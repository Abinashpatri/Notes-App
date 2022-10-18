import React from 'react'

const Header = ({handleToggleDarkMode}) => {
  return (
    <div className='header'>
        <h1>Notes</h1>
        <br />
        <br />
        <br />
        <button className='save' onClick={() => handleToggleDarkMode(prevDarkMode => !(prevDarkMode))}>Toggle Mode</button>
    </div>
  )
}

export default Header