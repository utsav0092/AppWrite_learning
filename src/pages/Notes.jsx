import React, { useEffect, useState } from 'react'
import db from '../lib/databases';
import NoteForm from '../components/NoteForm';
import { Query } from 'appwrite';
import Note from '../components/Note';
// import { databases } from '../lib/appwrite';

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const response = await db.notes.list([
            Query.orderDesc('$createdAt')
        ]);
        setNotes(response.documents);
    }

    return (
        <div className="notes-container">
            <NoteForm setNotes={setNotes} />
            <div className="notes-list">
                {notes.map(note => (
                    <Note key={note.$id} setNotes={setNotes} noteData={note} />
                ))}
            </div>

            <style>{`
                .notes-container {
                  width: 100%;
                  max-width: 720px;
                  margin: 0 auto;
                  display: flex;
                  flex-direction: column;
                  gap: 20px;
                  padding: 20px;
                  box-sizing: border-box;
                }
                .notes-list {
                  display: flex;
                  flex-direction: column;
                  gap: 16px;
                }
                @media (max-width: 600px) {
                  .notes-container {
                    padding: 12px;
                    gap: 16px;
                  }
                  .notes-list {
                    gap: 12px;
                  }
                }
            `}</style>
        </div>
    );
}

export default Notes;