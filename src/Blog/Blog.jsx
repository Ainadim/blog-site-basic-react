import React from 'react';
import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";


const Blog = ({ blog, handleBookMark, handleReadingTime }) => {
    const { id, cover, title, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div className='border-b-4 pb-5 mb-10 space-y-5'>
            <img className='w-full mb-10' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='w-20 mr-5' src={author_img} alt={author} />
                    <div>
                        <h4 className='text-2xl font-bold'>{author}</h4>
                        <p className='text-teal-600	'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <h4 className='mr-5 font-bold'> {reading_time} min read</h4>
                    <button onClick={() => handleBookMark(blog)} className='text-2xl'><IoBookmarksOutline />
                    </button>
                </div>
            </div>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <h4>{
                hashtags.map ((hash,idx) => <span className='mr-3 text-red-600' key = {idx}><a href=""># {hash}</a></span> )
                }</h4>
            <button onClick={() => handleReadingTime(reading_time,id)} className='text-blue-500 underline font-bold'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired,
};

export default Blog;