# Coding challenge

## Goal:

Create a simple Fullstack app using `Node.js`/`Express.js`/`PostgreSQL`/`React` and containerase it with `Docker`

## Running the app:

- `With Docker:`

```
docker-compose up
```

- `Without Docker:`
  - For the backend:
    - Make sure to edit `/server/database.js` with correct credentials/host/port for the local database
    - ```
      cd server/
      npm install
      npm start
      ```
  - For the frontend:
    - ```
      cd frontend/
      npm install
      npm start
      ```

## Result:

If everything runs correctly you will be able to see the app running on http://localhost:3000/

## Thoughts and takeaways:

- Backend:
  - Since the goal was to build a single endpoint, I've decided against using an ORM
  - I did expose an extra endpoint that accepts `DELETE` requests on http://localhost:3000/users so I can test my seeding logic more easily
  - That is also why I have most of the logic inside of `index.js` otherwise I would've definetly utilize seperate folders for routes and models as I've done [previously](https://github.com/ipd39952/coding-challenge)
- Frontend:
  - Thispart of the challenge was a really nice test of my React knowledge. I didn't run into any major issues.
- Docker
  - As I haven't worked with Docker previously, this was definetly the most challenging part but also where I've learned the most
  - My main struggle was in regards to the database container and mainly:
    - Creating a database and a table when starting the container
    - Making sure the server container waits on the database container to start first before running
  * All this has really helped me understand why Docker is so widely used and just how powerful it can be if used correctly. I'm definetly interested in having an even deeper understanding of Docker

## Any feedback is welcome and appriciated! 🐋
