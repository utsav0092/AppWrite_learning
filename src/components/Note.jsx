// src/components/Note.js
import React, { useState } from 'react';
import db from '../lib/databases';
import DeleteIcon from '../assets/DeleteIcon';

const Note = ({ setNotes, noteData }) => {
    const [note, setNote] = useState(noteData);

    const handleUpdate = async () => {
        try {
            const completed = !note.completed;
            setNote({ ...note, completed: completed });
            await db.notes.update(note.$id, { completed });
        } catch (error) {
            console.error("Failed to update note:", error);
            setNote(note);
        }
    }

    const handleDelete = async () => {
        try {
            await db.notes.delete(note.$id);
            setNotes((prevState) =>
                prevState.filter((currentNote) => currentNote.$id !== note.$id)
            );
        } catch (error) {
            console.error("Failed to delete note:", error);
        }
    }

    return (
        <div className="note-item">
            <span className={`note-body ${note.completed ? "completed" : ""}`} onClick={handleUpdate}>
                {note.body}
            </span>
            <div className="note-delete" onClick={handleDelete}>
                <DeleteIcon />
            </div>

            <style>{`
                .note-item {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 12px 16px;
                  border: 1px solid #d0d7de;
                  border-radius: 10px;
                  background: #ffffff;
                  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
                  transition: background-color 0.2s ease, transform 0.05s ease;
                  cursor: pointer;
                }
                .note-item:hover {
                  background-color: #f9fafb;
                }
                .note-body {
                  flex: 1;
                  font-size: 15px;
                  color: #1f2937;
                  word-break: break-word;
                }
                .note-body.completed {
                  text-decoration: line-through;
                  color: #9ca3af;
                }
                .note-delete {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-left: 12px;
                  padding: 6px;
                  border-radius: 6px;
                  transition: background-color 0.2s ease;
                }
                .note-delete:hover {
                  background-color: #fee2e2;
                }
                .note-delete svg {
                  width: 18px;
                  height: 18px;
                  fill: #ef4444;
                }
                @media (prefers-color-scheme: dark) {
                  .note-item {
                    background: #1e293b;
                    border-color: #334155;
                  }
                  .note-body {
                    color: #f1f5f9;
                  }
                  .note-body.completed {
                    color: #64748b;
                  }
                  .note-item:hover {
                    background-color: #273548;
                  }
                  .note-delete:hover {
                    background-color: #7f1d1d;
                  }
                  .note-delete svg {
                    fill: #f87171;
                  }
                }
            `}</style>
        </div>
    );
};

export default Note;