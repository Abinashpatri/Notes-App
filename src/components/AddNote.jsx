import React, { useState } from 'react'


const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('')
    const characterLimit = 200

    const handleChange = (e) => {
        if(characterLimit - e.target.value.length >= 0){      //update depends upon char limit
            setNoteText(e.target.value)
        }
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0 ){  //text should be present
            handleAddNote(noteText) // prop drilling
            setNoteText('')  //Input clear
        }  
    }

  return (
    <div className='note new'>
        <textarea rows="8" cols="10" placeholder='Type to add a note...' value={noteText} onChange={handleChange}></textarea>
        <div className="note-footer">
            <small>{characterLimit - noteText.length} Remaining</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNote