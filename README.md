# UP-Day

UP Day is an application dedicated to physiotherapist re-education of the perineum, to track micturition events from there patient.
There is 3 parts on this project :

- [Doctors](https://github.com/WildCodeSchool/biarritz_0319_kine_admin) <- You are here 
 - Add users and track events
- [Patients](https://github.com/WildCodeSchool/biarritz_0319_kine_front) 
 - Add and track their own events
- [Server](https://github.com/WildCodeSchool/biarritz_0319_kine_back) 
 - Link between front and database

## Stack

`React` `Redux (Thunk)` `React Router` `React.SemanticUI` `Axios`

## Directories

```
App
├── public
└── src
    ├── API
    ├── components
    ├── assets
    ├── pages
    └── pills
```

`API` Folder to stock api call functions

`components` Folder to stock simple components

`assets` Folder to stock assets for the app

`pages` Folder to stock components called only in router

`pills` Folder to stock complex connected components


`How work pills folder` :

- `*.action.js` : Actions and actions creators
- `*.container.js` : Smart component connected to redux
- `*.reducer.js`: redux reducer
- `*.selector.js` : selectors and combined selectors for redux
- `*.test.js` : test file for JEST
- `*.view.js` : Dumb component called by container for view.

## Installation

```sh
git clone git@github.com:WildCodeSchool/biarritz_0319_kine_admin.git
cd biarritz_0319_kine_admin
npm install
```

In `src/functions/axiosConfig.js`, change the adress of your server :

```javascript
baseURL: "http://localhost:3030/";
```

Use `npm start`, then open [http://localhost:3000/](http://localhost:3000/) to see your app.

## Get Started

First time you start the server, you can login with `login : admin || password : admin`
Create a new user as admin, and disconnect .
Login with your new admin account, `then delete admin from database`.
You can now create new users for your application.

## Data privacy || IMPORTANT

This application create a problem with personnal data.

You `do not must create an account with real information` about users of the application.

Because of this problematique, we 'kill' code for e-mail information. The code still present, but not accessible to users, and must not be before the database is secure.

(cf: privacy politic about medical data).

## Deployement

### `npm test`

Runs the test watcher in an interactive mode.
By default, runs tests verify functions related to reducers.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames inour app is ready to be clude the hashes.
Your app is ready to be deployed.

## Team

[Perrine Martyris](https://www.linkedin.com/in/perrinemartyris/)
[Laura Bolea](https://www.linkedin.com/in/laura-bolea/)
[Florian Gardy](https://www.linkedin.com/in/florian-gardy/)
[Nizar Slama](https://www.linkedin.com/in/nizar-slama-197b3b182/)
[Jonathan Galvao-Diniz](https://www.linkedin.com/in/jonathan-galvao-diniz/)

## License

UP Day is open source software [licensed as MIT](https://github.com/WildCodeSchool/biarritz_0319_kine_admin/blob/master/LICENSE).
