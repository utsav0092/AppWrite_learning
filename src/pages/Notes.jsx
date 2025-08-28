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
        // const response = await databases.listDocuments(
        //     import.meta.env.VITE_APPWRITE_DATABASE_ID,
        //     import.meta.env.VITE_APPWRITE_COLLECTION_ID_NOTES
        // );
        // db.notes.list()
        // db.notes.create()

        const response = await db.notes.list([
            Query.orderDesc('$createdAt')
        ]);
        setNotes(response.documents);
    }

    return (
        <div>
            <NoteForm setNotes={setNotes} />
            <div>{notes.map(note => (
                <Note key={note.$id} noteData={note} />
                // <div key={note.$id}>{note.body}</div>
            ))}</div>
        </div>
    );
}

export default Notes;