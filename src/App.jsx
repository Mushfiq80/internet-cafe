import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Blogs from './component/Blogs/Blogs'
import Header from './component/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }

  const handleReadingTime = ( id, time) => {
    setReadingTime(readingTime + time)
    console.log(readingTime)
    const remainingBlogs = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBlogs);
  }


  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='flex gap-4 mt-4'>
        <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
