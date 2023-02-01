import { TiDelete } from 'react-icons/ti';

const Note = ({ id, description, date, handleDeleteNote }) => {
    return (
        <div className="note">
            <span>{description}</span>
            <div className="noteFooter"> 
                <small>{date}</small>
                <TiDelete onClick={() => handleDeleteNote(id)} className='deleteIcon' size='1.3em'/>
            </div>
        </div>
    );
};

export default Note;