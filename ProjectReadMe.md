# A React,Firebase Javascript Project
### This Project is a small PLant Nursery Marketing and Advertisment Website

### Tools
* React.js
* Firebase
* Kommunicate
* DialougeFlow
* Redux

This project is aimed for Marketing and Advertisment of A Plant Nursery website.
Project basically targets some latest features and tools which are being used
these days for a good website.

Project uses firebase as backend to store Pictures added by admin in realtime database.
It also uses an email password based authorization for admin access. Admin can perform CRUD
operations for Images.

Redux is not necassary for the project, however i used it to keep logged in admin status in local storage.

I have integrated a chatbot for the website to meet basic queries of visiters.
It uses DialougeFlow as backend and Kommunicate for frontend services.


## How To Run Project.
 
* Install React
* Make a firebase project
* Add firebase credentials from firebase to firebase.js file

https://medium.com/firebase-developers/patterns-for-security-with-firebase-per-user-permissions-for-cloud-firestore-be67ee8edc4a

https://stackoverflow.com/questions/37403747/firebase-permission-denied

https://stackoverflow.com/questions/43452822/how-to-get-id-of-object-from-firebase-database-in-reactjs

* Make a ChatBot backend on dialogflow

https://chatbotslife.com/dialogflow-restaurant-bot-tutorial-1-45ce1d3c0ab5

* Integerate DialougeFlow backend with Kommunicate

https://www.kommunicate.io/blog/integrate-dialogflow-bot-react-js/

* Add Kommunicate credentials in /website/chat.js

* Run npm install to install dependencies
* Run npm start

!! Thats it