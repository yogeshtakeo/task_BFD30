import React from 'react'
import ReactDOM from 'react-dom/client'
import getRedditData from './RedditPost'
import './index.css'
import RedditPost from './RedditPost'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RedditPost/>
  </React.StrictMode>,
)
