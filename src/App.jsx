import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTIme] = useState(0)
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = time => {
    setReadingTIme(readingTime + time)
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}
          readingTime={readingTime}></Bookmarks>
      </div>


    </>
  )
}

export default App
