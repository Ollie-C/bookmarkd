# bookmarkd

Link: https://bookmarkd-chi.vercel.app/
Github: https://github.com/Ollie-C/bookmarkd

Note: main branch is the current deployed version, for completion of challenge completed within 5 hours. I'll be adding new features and refactoring in main-extended, so please check that out too if at all interested.

## Introduction

bookmarkd is a light-weight bookmark manager that uses localStorage to track a user's saved bookmarks and allows them to manage their links. Built in React.

### Get started

npm i to install all dependencies
npm start / npm run dev to kick things off in your browser

### Tools
- Javascript for DOM manipulation and accessing localStorage
- React for the use of hooks and reusable components
- SASS (not modules) for quick, organised styling
- Framer-motion for subtle animations to complement the minimalist theme

### Design Approach
I believe a bookmark manager should be something a user will want to come back to regularly, promoted by a simple design and layout so not to overcomplicate things yet is appealing to look at. There is a balance in space taken up by the form and the bookmarks section as I believe both play an equally important part in the user's experience.

### Features

1. Displays a form that lets a user submit a link. The form validates the input is a valid URL and doesn't already exist

2. Displays a list of links with pagination

3. Users can remove links and clear all

4. Links persist on page reload

5. App has minimalist design with light use of framer-motion

6. App is designed for use over multiple media channels, including desktop, tablet and mobile

### Limitations

- User is currently unable to edit links
- Currently no search/filter functionality
- Pagination navbar not capped, may cause aesthetic issues if number of pages goes beyond 6 or 7
- There are no user accounts hence lack of authentication and authorisation which are not necessary for an app that uses localstorage

### Future of the project
- Add search functionality
- Add filter functionality
- Give user's the ability to edit a bookmark
- Implement the use of exotic libraries like WebGL

### Notes

This project uses CRA for basic linting and webpack configuration.
