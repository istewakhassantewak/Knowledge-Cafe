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
  const handleMarkAsRead = (id, time) => {
    setReadingTIme(readingTime + time)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)

    setBookmarks(remainingBookmarks)
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto p-4'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}
          readingTime={readingTime}></Bookmarks>
      </div>


    </>
  )
}

export default App
