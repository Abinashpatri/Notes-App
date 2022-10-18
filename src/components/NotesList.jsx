import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NotesList = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div className='notes-list'>
        <AddNote handleAddNote={handleAddNote}  />
        {
            notes.map((note) => <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/> )
        }
    </div>
  )
}

export default NotesList