import React from 'react';
import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div>
            <h4 className='my-5 p-3 bg-slate-100 rounded-md'>{title}</h4>
        </div>
    );
};


Bookmark.propTypes = {
    bookmark: PropTypes.object,
};


export default Bookmark;
