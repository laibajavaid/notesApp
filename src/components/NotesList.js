import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <div className="list">
            {notes.map((note)=> <Note id={note.id} description={note.description} date={note.date} handleDeleteNote={handleDeleteNote}/>)}
            <AddNote  handleAddNote={handleAddNote}/>
        </div>
    );
};

export default NotesList;