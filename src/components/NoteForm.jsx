import React from 'react';
import db from '../lib/databases';

const NoteForm = ({ setNotes }) => {
  const handleAdd = async (e) => {
    e.preventDefault();
    const noteBody = e.target.body.value;
    if (noteBody === "") return;

    try {
      const payload = { body: noteBody };
      const response = await db.notes.create(payload);
      setNotes((prevState) => [response, ...prevState]);
      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleAdd} className="note-form">
        <input
          type="text"
          name="body"
          placeholder="🤔 What's on the agenda?"
          className="note-input"
          autoComplete="off"
        />
      </form>

      <style>{`
        .note-form {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 16px;
          box-sizing: border-box;
        }
        .note-input {
          width: 100%;
          max-width: 720px;
          padding: 14px 16px;
          font-size: 16px;
          line-height: 1.4;
          border: 1px solid #d0d7de;
          border-radius: 12px;
          background: #ffffff;
          color: #0b1220;
          outline: none;
          box-sizing: border-box;
          transition: border-color .2s ease, box-shadow .2s ease, background-color .2s ease, transform .05s ease;
        }
        .note-input::placeholder {
          color: #6b7280;
          opacity: 1;
        }
        .note-input:focus {
          border-color: #6366f1;
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.18);
          background: #ffffff;
        }
        .note-input:active {
          transform: translateY(1px);
        }
        .note-input:-webkit-autofill,
        .note-input:-webkit-autofill:hover, 
        .note-input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
          -webkit-text-fill-color: #0b1220;
          transition: background-color 9999s ease-in-out 0s;
        }
        @media (prefers-color-scheme: dark) {
          .note-input {
            background: #0f172a;
            color: #f1f5f9;
            border-color: #253046;
          }
          .note-input::placeholder {
            color: #94a3b8;
          }
          .note-input:focus {
            border-color: #7c83ff;
            box-shadow: 0 0 0 4px rgba(124, 131, 255, 0.22);
            background: #0f172a;
          }
          .note-input:-webkit-autofill,
          .note-input:-webkit-autofill:hover, 
          .note-input:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0px 1000px #0f172a inset;
            -webkit-text-fill-color: #f1f5f9;
          }
        }
        @media (max-width: 480px) {
          .note-form {
            padding: 12px;
          }
          .note-input {
            font-size: 15px;
            padding: 12px 14px;
            border-radius: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default NoteForm;