import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

  const dateBuilder = (getDate) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // return a number bewteen 0 and 6 to get the day of the week
    // look through the index in the array
    let day = days[getDate.getDay()];

    // return a number between 0 and 30 to get the date 
    let date = getDate.getDate();

    // return a number between 0 and 11 to get the month of the year
    // look through the index in the array
    let month = months[getDate.getMonth()];

    // return year
    let year = getDate.getFullYear();

    return `${day} ${month} ${date}, ${year}`
}

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    description: "This is a Sample Note...\nGet Started Now!",
    date: dateBuilder(new Date()),
  },
  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'));

    // check if any notes from local storage are received 
    // if we did we want to set it into state 
    // if any of the notes were retrived successfully from google storage
    // there will be a value
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-notes-data', JSON.stringify(notes));
  }, [notes]);

  const addNote = (description) => {
    // const date = new Date();
    const newNote = {
      id: nanoid(),
      description: description,
      date: dateBuilder(new Date())
    }
    // add new note to the end of the array
    // use the spread opertor to quickly copy all of the contents in the current array
    // need to do this because its bad to mutate state in react
    const newNotes = [...notes, newNote]; // the line creates a new array intead of updating the old one
    // cause the components to re-render and the list updates with the new data
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'darkMode'}`}>
      <div className="container">
        <Header handleToggleMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList notes={notes.filter((note) => note.description.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
  )
}

export default App; 
