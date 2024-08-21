import { useState } from 'react'
import './App.css'
import Blogs from './Blogs/Blogs'
import Bookmarks from './Bookmarks/Bookmarks'
import Header from './Header/Header'

function App() {

  const [bookmark, setBookmark] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleBookMark = blog => {
    const newBookmark = [...bookmark, blog]
    setBookmark(newBookmark)
  }

  const handleReadingTime = (time, id) => {
    setReadingTime(readingTime + time)
    const list = bookmark.filter(bookmark => bookmark.id !== id)
    setBookmark(list)
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleBookMark = {handleBookMark} handleReadingTime = {handleReadingTime}></Blogs>
      <Bookmarks bookmark= {bookmark} readingTime = {readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
