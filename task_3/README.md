# React Redux Posts App

A simple React-Redux application that fetches and displays posts from an API and allows users to add new posts.

---

## Features

- Fetch posts from API
- Display posts list
- Add new posts
- Redux Toolkit state management
- Async API handling with createAsyncThunk
- Loading and error handling
- Feature-based folder structure

---

## Technologies Used

- ReactJS
- Redux Toolkit
- React Redux
- Axios

---

## Project Structure

```
project-root/
│
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   └── store.js
│   │
│   ├── components/
│   │   └── Layout.jsx
│   │
│   ├── features/
│   │   └── posts/
│   │       ├── components/
│   │       │   ├── PostForm.jsx
│   │       │   ├── PostItem.jsx
│   │       │   └── PostsList.jsx
│   │       │
│   │       ├── services/
│   │       │   └── postService.js
│   │       │
│   │       ├── postsSlice.js
│   │       └── postsSelectors.js
│   │
│   ├── hooks/
│   │   ├── useAppDispatch.js
│   │   └── useAppSelector.js
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── package.json
├── README.md
└── .gitignore
```

---

## Installation

Clone repository:

git clone <your-repository-url>

Install dependencies:

npm install

---

## Run Project

npm start

---

## API Endpoint

https://jsonplaceholder.typicode.com/posts

---

## Redux Flow

1. Component dispatches async thunk
2. Thunk calls API service
3. Redux slice updates state
4. UI re-renders from store changes

---

## Future Improvements

- Delete post
- Edit post
- Pagination
- Search and filtering
- Better UI styling

---

## Author

Minh Pham Quang