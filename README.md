# FlixFinder 🍿
## Overview
This day and age we’re often overwhelmed by all the options at our fingertips, and FlixFinder hopes to relieve the stress of having to find something new to watch at the end of a long workday. FlixFinder generates a random movie recommendation for users based on their favorite genres and interests. It aims to simplify the movie selection process by providing personalized suggestions from vast streaming platform libraries.

## Demo
![](https://github.com/stmcpeters/FlixFinder/blob/main/client/src/assets/flixfinder-demo.gif)

## Features
- Create new user
- Log in for existing users
- Set/update user's favorite genre(s)
- Be provided a random movie based on the user's favorite genres, the streaming platforms it's available on, and an AI generated summary of all user reviews
- Users can browse, create, edit and delete movie reviews
- Responsive and accessible app built using React and React Bootstrap

## Technologies
### Frontend
- React-Vite template
- React Bootstrap: styling of components
- Fetch API: makes HTTP requests to the backend
- Render: used to deploy FlixFinder on the web
### Backend
- Express.js: A Node.js framework for setting up the server and handling HTTP requests
- Postman: API testing and development software for HTTP requests
- Node.js: JavaScript environment used to run the Express server
- Cors: Middleware to handle Cross-Origin Resource Sharing
- Dotenv: Hides sensitive environment variables
- PostgreSQL: Database management system
### APIs
- [Streaming Availability API] (https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability)
- [AI Summarize API by ApyHub] (https://apyhub.com/utility/ai-summarize)
### Testing
- Jest
- React Testing Library

## Installation
### Pre Requisites 
- Node.js (which includes npm): [Download Node.js](https://nodejs.org/en/download/package-manager)
- Git (for cloning the repository): [Download Git](https://git-scm.com/downloads)
### Steps
1. Clone the repo <br>
`git clone https://github.com/stmcpeters/FlixFinder`<br>
`cd flix-finder` 
2. Set up the backend
- Navigate to the `server` folder
- Install backend dependencies: `npm install`
- Create a `.env` file in the server directory and add your environment variables, such as database port and/or API key (see `.env-sample` for example)
- Import and configure `dotenv` in your `server.js` file: <br>
`import dotenv from 'dotenv';` <br>
`dotenv.config();` <br>
3. There are two ways to restore the DB dump file the project already contains: 

A- If you have postgres set up postgres with an User:  
 * just run the command `psql -U postgres -f db.sql`. Make sure that you have your Postgres password on hand. The psql console will ask for your password. 

B- If your initial configuration of postgres doesn't require a User:
* just run the command `psql -f db.sql`

7. Inside your server folder, open the file `.env.example` and copy the correct option for your configuation found there to your new .env file. 

Here is what your `.env` might look like:

```
DB_URL="postgresql://localhost/flix-finder"
``` 
For this template, the name of your db should be `flix-finder`.

⚠️ If you don't see a `flix-finder` db, you can create one. From the terminal, navigate to the psql command line with `psql` and type `create database flix-finder;` - don't forget the semicolon!! ⚠️

- Start the server using: `npm start`

4. Set up the frontend:
- Navigate to the `client` folder
- Install dependencies: `npm install`
- Start the React development server using `npm run dev`

5. Sign up/log in to get your own free API key from [Streaming Availability API](https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability)
6. Sign up/log in to get your own free API key from [AI Summarize API](https://apyhub.com/utility/ai-summarize)

## API Endpoints
- GET `/users`: retrieves user data
- POST `/users`: creates new user
- GET `/movies/<selected-genres>`: fetches movies that match the genres the user has selected
- GET `/db/reviews/recent`: fetches all reviews sorted by their creation timestamp (most recent first — limited to 3)
- GET `/genres`: fetches all genres from genre table to populate genre selection dropdown
- GET `/db/user-genre/:userId:`: returns all genre preferences for a specific user using their user ID

## Stretch Goals/Nice-to-Haves
- auth0 sign in for users
- add movies to watched/favorites list
- comments on user reviews

## Contributing
Contributions are welcomed to this project! If you have an idea for a new feature or a bug fix, please open an issue or a pull request.

## License
This project is licensed under the MIT License.

[Pitch Submission](https://docs.google.com/document/d/1rbN_tOjCMwFOAwJeCzdO4INEx16JQW3d37MWukxj27U/edit?usp=sharing)

[Trello Board](https://trello.com/invite/b/670da71816bd97c939f8dd66/ATTIfd2b1ad0a0f7398a7faf6d41d6034c1593A98A20/final-project)
