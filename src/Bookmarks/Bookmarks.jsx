import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmark, readingTime}) => {
    return (
        <div className='md:w-1/3 px-3'>
            <h2 className='bg-yellow-100 p-5 text-xl text-s font-bold rounded-md'>Spent time on read : {readingTime} min</h2>
            <div className='mt-5 p-5 bg-teal-200 rounded-md'>
                <h4 className='text-1xl font-bold'>
                    Bookmarked Blogs : {bookmark.length}
                </h4>
                {
                    bookmark.map((bookmark,idx) => <Bookmark key = {idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.array,
    readingTime: PropTypes.number,
};

export default Bookmarks;