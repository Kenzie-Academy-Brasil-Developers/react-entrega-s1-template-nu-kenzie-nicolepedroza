import { useState } from "react"
import { HomePage } from "./pages/HomePage"
import './styles/index.scss'

function App() {
  const [listNotes, setListNotes] = useState([]);

  const addNote = (title, price) => {
    const id = crypto.randomUUID()
    console.log(id)
    const newNote = {title, price, id}
    setListNotes([...listNotes, newNote]);
  }
  const removeNote = (id) => {
    const listFiltered = listNotes.filter((note) => {
      if(note.id !== id){
        return note
      }
    })
    setListNotes(listFiltered)
  }

  return (
    <>
    <HomePage listNotes={listNotes} addNote={addNote} removeNote={removeNote}/>
    </>
  )
}

export default App
