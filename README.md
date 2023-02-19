## Setting Up (General)

- clone the repo

## Setting Up (Backend)

- cd into the backend folder in the repo
- make a copy of the `.env.example` file and name it as `.env`
- in the `.env` file, place the url of your mongo db cluster as the value of `MONGO_DB_URL`, the port in which the server should run as value of `EXPRESS_PORT` and the secret used to sign the issued JWTs as the value of `JWT_SECRET`
- if in any case your hosting provider allocates a port for the application to listen in (case of many shared hosting providers in tiers), the app will default to that port
- from the backend folder, run `yarn` command to install the dependencies
- after dependencies are installed run `yarn setup` for syncing the database with the required schema
- run `yarn start` for running the app

## Setting Up (Frontend)

- cd into the frontend folder in the repo
- make a copy of the `.env.local.example` file and name it as `.env.local`
- place the url in which the demo backend is setup `NEXT_PUBLIC_API_ENDPOINT` inside `.env.local`
- from the frontend folder, run `yarn` command to install the dependencies
- after dependencies are installed run `yarn dev` for running the app in development mode

this application is create using nextjs [nextjs](https://nextjs.org/). for building or running apps in other modes may refer for the commands in their documentation.

## Live Demo

[demo](https://open-auto-demo.vercel.app/)
