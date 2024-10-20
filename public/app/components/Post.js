// app/components/Post.js
import React from 'react';

const Post = ({ content }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <p>{content}</p>
        </div>
    );
};

export default Post;