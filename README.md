# Angular-project

## Installation

Use [git](https://git-scm.com/downloads) to clone project.

```bash
git clone https://github.com/IvoHSB/Angular-project.git

cd booking-app

npm install
```

## Run

First you need run server.

```bash
cd server

node surver.js
```
Аfter you have run the server you can start the work-wall application.

```bash
cd booking-app

ng s
```
## Description
This is a site where people can register and create, edit and delete room bookings for other users to view.

## Functionality

The front end communicates with the back end to save, edit, delete and read data.

The site has authentication for access to different pages depending on whether you are logged in or whether you are the owner of given data.

The site has several dynamic pages whose content is updated based on what data is on the server or whether there is data on the server.

The site has forms for creating, editing and deleting data from the server. All forms have validation and error handling.