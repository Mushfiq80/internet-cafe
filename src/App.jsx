import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Blogs from './component/Blogs/Blogs'
import Header from './component/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleBookmark = (blog) => {
    console.log('Bookmark', blog)
  }


  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='flex gap-4'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
