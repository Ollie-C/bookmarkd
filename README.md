# bookmarkd

Link: https://bookmarkd-chi.vercel.app/
Github: https://github.com/Ollie-C/bookmarkd

Note: main branch is the current deployed version, for completion of challenge. main-extended is an experimental branch

## Introduction

bookmarkd is a light-weight bookmark manager that uses localStorage to track a user's saved bookmarks and allows them to manage their links. Built in React.

### Get started

npm i to install all dependencies

### Features

1. Displays a form that lets a user submit a link. The form validates the input is a valid URL and doesn't already exist

2. Displays a list of links with pagination

3. Users can remove links and clear all

4. Links persist on page reload

5. App has minimalist design with light use of framer-motion

### Limitations

- User is currently unable to edit links
- Currently no search/filter functionality
- No testing design beyond a certain number of pages (navigation bar is not limited)

### Notes

This project uses CRA for basic linting and webpack configuration.
