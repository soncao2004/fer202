import React from 'react';
const Post = ({ post }) => (
    <div className="card h-100 p-3 shadow-sm border-0 bg-light">
        <h6 className="fw-bold text-danger text-uppercase">{post.title}</h6>
        <p className="small text-secondary">{post.body}</p>
    </div>
);
export default Post;