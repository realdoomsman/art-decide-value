# ART – Decide the Value

A playful platform where users draw scribble art and publish it. The community decides what has value.

## Features

- 🎨 Simple drawing canvas with colors and brush sizes
- 📝 Publish art with title and description
- 🖼️ Public gallery with filters (Newest, Most Liked, Random)
- ❤️ Like and comment on artworks
- 👤 User profiles showing all artworks
- 🔐 Simple authentication

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Styling: Custom CSS with playful gradients

## Getting Started

### Install dependencies

```bash
npm run install:all
```

### Run the app

```bash
npm run dev
```

This will start:
- Frontend on http://localhost:3000
- Backend on http://localhost:5000

## Project Structure

```
art-decide-value/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
├── server/          # Express backend
│   ├── server.js
│   └── package.json
└── package.json
```

## Future Features

- Mint to Solana blockchain
- Buy/sell marketplace
- Creator royalties
- Remix ART feature
- Wallet authentication (Phantom)

## Notes

- Currently uses in-memory storage (data resets on server restart)
- For production, add a proper database (MongoDB, PostgreSQL, etc.)
- Add proper authentication with JWT tokens
- Implement image storage service (AWS S3, Cloudinary, etc.)
