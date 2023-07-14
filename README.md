# Contractor Contacts

#### Table of Contents

- [About](#About)
- [Screenshots](#Screenshots)
- [Installation](#About)
  - [Requirements/Limitations](#Requirements)
  - [Frontend](#Frontend)
  - [Backend](#Backend)
- [Tech Stack Details](#About)

## About

Contractor Contacts is a full stack mobile app, built to help contract workers showcase their work. With built in functionality that allows users to upload photos from their mobile gallery, users are able to share their individual businesses' profile page. This includes: Business Name, Contact Info, Images of work to shocase, and an About the Business section. When complete, 2 types of users will exist - contractors and job posters. Job posters will have the ability fo view contractor profiles or message them directly to determine details of the contract work.





## Screenshots



### Profile related profile pages 
- Main Profile
![Profile](https://github.com/bdejene19/GetTradedReactNative/assets/67334768/3f381298-f338-430c-8622-29b4b8ef7337)

- Drawer Options
![ProfileDrawer](https://github.com/bdejene19/GetTradedReactNative/assets/67334768/8526f3d6-7975-44ab-8a30-25af5c324680)

- Profile Settings
![Settings](https://github.com/bdejene19/GetTradedReactNative/assets/67334768/cd96d949-fb24-46b2-96da-692bdf8b87c5)

- Editable Profile Options
![EditProfileOptions copy](https://github.com/bdejene19/GetTradedReactNative/assets/67334768/5d333c33-a7fe-4ade-8d5b-b5fe593af024)

### Job Board Pages
![JobBoard](https://github.com/bdejene19/GetTradedReactNative/assets/67334768/85d1b608-18dc-4920-83ff-a05694c48e97)

### Message Board pages
![MessageBoard](https://github.com/bdejene19/GetTradedReactNative/assets/67334768/88d09b81-ab3a-4fb7-afa2-35d046f6b73b)




## Installation

Note: This application was built with NPM, requiring it to be installed on any forks. Yarn is also an alternative.

Install any main dependencies

- `npm i`

### Requirements:
Currently, Contractor Contacts only supports iOS devices. This application is also a mobile app, which requires developers to have a simulator installed on their computer. On Mac, I suggest XCode.

Additionally, the backend of this application is built with MySQL, requiring MySQL Server to be installed on your computer, and running while the app is running.

Note: this application is an Expo React Native app;

### Frontend

Steps:

1. Install all dependencies and run the React Native Expo app

- a) `npm i`
- b) `npx expo start`

### Backend

1. Install all dependencies

- `npm i`

2. Open a second terminal to handle starting MySQL server
3. In MySQL terminal:

- a) `source db/schema.sql;` => can validate if Database was select with [`select database();`] command

4. After running db Schema file, run server and seed database.

- a) `nodemon index.js` - runs server with hot reloading
- b) `node seeds/seeds.js` - seeds MySQL database

## Tech Stack

### Frontend Stack

- TypeScript
- React Native
- UI-Kitten
- React Native Image Picker
- React Native Share

  ### Backend Stack

- JavaScript (Node)
- Express.js
- MySQL
- Sequelize
