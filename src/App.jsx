import React from 'react';
// import { client, account, databases } from './lib/appwrite';
// import { client, databases } from './lib/appwrite';
import Notes from './pages/Notes';
// import './App.css';

function App() {
  return (
    <>
      <Notes />
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background-color: #f8fafc;
          color: #0f172a;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
        #root {
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
          padding: 24px;
        }
        h1, h2, h3, h4, h5, h6 {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 12px;
        }
        p {
          line-height: 1.6;
          margin-bottom: 12px;
        }
        a {
          color: #6366f1;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        a:hover {
          color: #4f46e5;
        }
        button {
          background-color: #6366f1;
          color: #ffffff;
          padding: 10px 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 15px;
          transition: background-color 0.2s ease, transform 0.05s ease;
        }
        button:hover {
          background-color: #4f46e5;
        }
        button:active {
          transform: translateY(1px);
        }
        @media (prefers-color-scheme: dark) {
          body {
            background-color: #0f172a;
            color: #e2e8f0;
          }
          h1, h2, h3, h4, h5, h6 {
            color: #f1f5f9;
          }
        }
      `}</style>
    </>
  );
}

export default App;