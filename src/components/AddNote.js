import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteDesc, setNoteDesc] = useState('');
    // not in state because the usser cannot change the word limit
    const charLimit = 500;

    // function where the value getss saved to state
    const handleChange = (e) => {
        // subtract the length of the value that the user 
        // has typed from the character limit 
        // if >= to 0 that means the limit has not been reached or at its max
        // so user can continue typing 
        if (charLimit - e.target.value.length >= 0) {
            setNoteDesc(e.target.value);
        }
    };

    const handleSaveClick = (e) => {
        // check to make sure aan empty note is not being added
        if (noteDesc.trim().length > 0) {
            handleAddNote(noteDesc);
            setNoteDesc('');
        }
    };

    return (
        <div className="new note">
            <textarea rows="8" cols="10" placeholder="Type To Add New Note" value={noteDesc} onChange={handleChange}></textarea>
            <div className="noteFooter">
                <small>{charLimit - noteDesc.length} Remaining</small>
                <button className="saveNote" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    );
};

export default AddNote;