# React Starter Kit with Appwrite

Kickstart your React development with this ready-to-use starter project integrated with [Appwrite](https://www.appwrite.io).

## 🚀 Features

- React 19 + Vite for fast development
- Appwrite backend integration (database)
- Simple notes app example

## 🛠️ Getting Started

### 1. Clone the Project

```sh
git clone https://github.com/appwrite/starter-for-react
cd starter-for-react
```

### 2. Configure Appwrite

Update `.env` with your Appwrite project credentials:

```
VITE_APPWRITE_ENDPOINT=your-appwrite-endpoint
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
VITE_APPWRITE_COLLECTION_ID_NOTES=your-notes-collection-id
```

### 3. Install Dependencies

```sh
npm install
```

### 4. Run the App

```sh
npm run dev
```

## 📁 Project Structure

```
starter-for-react/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   │   └── DeleteIcon.jsx
│   ├── components/
│   │   ├── Note.jsx
│   │   └── NoteForm.jsx
│   ├── lib/
│   │   ├── appwrite.js
│   │   └── databases.js
│   └── pages/
│       └── Notes.jsx
├── .env
├── package.json
├── vite.config.js
└── README.md
```

## 💡 Notes

- The starter project demonstrates basic CRUD operations with Appwrite’s database.
- UI is styled with Tailwind CSS and custom styles.
- For more advanced usage, refer to [Appwrite documentation](https://appwrite.io/docs).
