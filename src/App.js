import { nanoid } from 'nanoid'
import { useEffect, useState } from "react";
import Header from './components/Header';
import NotesList from "./components/NotesList";
import Search from './components/Search';

function App() {
  
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "18/10/2022"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "16/10/2022"
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "15/10/2022"
    },
])

const [searchText, setSearchText] = useState('')
const [darkMode, setDarkMode] = useState(false)

// ---------------LOCAL STORAGE---------------------------------------------------------------
useEffect(() => {  // GET From LS
  const savedNotes = JSON.parse(localStorage.getItem('Notes-Project-React'))
  if (savedNotes){
    setNotes(savedNotes)
  }
}, [])

useEffect(() => {   //SAVE ON LS
  localStorage.setItem('Notes-Project-React', JSON.stringify(notes))
}, [notes])

// ------------------------------------------------------------------------------------------

const addNote = (text) => {     // Add Note 
    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
}



const deleteNote = (id) => {       // delete Note
  const newNotes = notes.filter((note) => note.id !== id)
  setNotes(newNotes)
}


  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;
