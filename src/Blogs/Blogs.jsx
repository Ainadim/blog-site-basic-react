import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from "prop-types"

const Blogs = ({handleBookMark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch ('blogs.json')
        .then (res => res.json())
        .then (data => setBlogs(data))
    }, [])
    return (
        <div className='md:w-2/3'>
             <div>
                {
                    blogs.map(blog => 
                    <Blog key={blog.id} 
                    blog = {blog}
                    handleBookMark = {handleBookMark}
                    handleReadingTime = {handleReadingTime}></Blog>)
                }
            </div>
        </div>
    );
};
Blogs.propTypes = {
    handleBookMark: PropTypes.func,
    handleReadingTime: PropTypes.func,
}
export default Blogs;