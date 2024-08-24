Backend: Backend: Built with Node.js and Express.
Database: MongoDB.
Frontend: Developed using React, with Vite as the build tool and Zustand for state management.

1. Create a .env File:
   In your project's root directory, create a file named .env if it doesn't already exist.

2. Structure Your .env File:

# Database Configuration

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority

# JWT Configuration

JWT_SECRET=your_super_secret_key

# TMDB API Configuration

TMDB_API_KEY=your_tmdb_api_key

# Node Environment

NODE_ENV=development

MONGO_URI: Replace <username>, <password>, and <dbname> with your actual MongoDB credentials and database name.
JWT_SECRET: Use a strong, unique key to sign and verify your JWT tokens.
TMDB_API_KEY: Replace with your actual TMDB API key.
NODE_ENV: Set this to development, production, or test based on the environment.
