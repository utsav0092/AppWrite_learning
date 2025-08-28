import React, { useState } from 'react';
import db from '../lib/databases';
import DeleteIcon from '../assets/DeleteIcon';

const Note = ({setNotes,  noteData }) => {
    const [note, setNote] = useState(noteData);

    const handleUpdate = async () => {
        const completed = !note.completed;
        db.notes.update(note.$id, { completed });
        setNote({ ...note, completed: completed });
    }

    const handleDelete = async () => {
        db.notes.delete(note.$id);
        setNote();
    }

    return (
        <div>
            <span onClick={handleUpdate}>
                {note.completed ? <s>{note.body}</s> : <>{note.body}</>}
            </span>
            <div onClick={handleDelete}>
                <DeleteIcon />
            </div>
        </div>
    );
};

export default Note; 