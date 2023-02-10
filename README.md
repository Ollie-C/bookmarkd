# bookmarkd

Original: 

Link: https://bookmarkd-app.vercel.app/

Github: https://github.com/Ollie-C/bookmarkd

Version 2:

Link: https://bookmarkd-v2.vercel.app

Github: https://github.com/Ollie-C/bookmarkd/tree/main-extended

**Update 06/02/23**: main branch is the current deployed version, for completion of challenge completed within 5 hours. I'll be adding new features and refactoring in main-extended, so please check that out too if at all interested.

**Update 08/02/23**: As version 2 scales (which was never my original intention, got slightly carried away...), it may have been worth starting the project with dependency injection (context) and reusable components which I'll implement later on. SASS variables and seperate modules or stylesheets may be worth introducing too.

## Introduction

bookmarkd is a light-weight bookmark manager that uses localStorage to track a user's saved bookmarks and allows them to manage their links. Built in React.

### Get started

1. Open up your terminal and clone the repo: **git clone https://github.com/Ollie-C/bookmarkd.git**
2. Install dependencies: **npm i / npm install** 
3. Give it a whirl: **npm start / npm run dev** 

### Tools
- Javascript for DOM manipulation and accessing localStorage
- React for the use of hooks, context and reusable components
- SASS (not modules) for use in a small project and to keep styling organised and easy to read using BEM
- Framer-motion for subtle animations to complement a minimalistic theme

### Design Approach
I believe a bookmark manager should be an app that a user will frequent, based on ease-of-use and simple yet attractive UI. I've created a balance in space taken up by the two main component - form and bookmarks - as both play an equally important role in the user's experience. 

### Features

1. Displays a form that lets a user submit a link. The form validates the input is a valid URL and doesn't already exist

2. Displays a list of links with pagination, 20 per page

3. Users can remove individual bookmarks and clear all

4. Links persist on page reload

5. App has minimalist design with light use of framer-motion

6. App is designed for use over multiple media channels, including desktop, tablet and mobile

7. Version 2 only: Users are able to edit the bookmark URL

### Limitations

* **Addressed in newer version (main-extended)**

- **User is currently unable to edit links** *
- Currently no search/filter functionality
- Pagination navbar not capped, may cause aesthetic issues if number of pages goes beyond 6 or 7
- No user accounts, authentication and authorisation - not useful for a app that uses localstorage

### Future of the project
- Add search functionality
- Add filter functionality
- Give user's the ability to edit a bookmark
- Spice the design up a little with use of exotic libraries like WebGL

### Notes

This project uses CRA for basic linting and webpack configuration.
