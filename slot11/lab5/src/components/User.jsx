import React from 'react';
const User = ({ user }) => (
    <div className="card mb-3 p-3 shadow-sm border-0 border-start border-primary border-4">
        <h5 className="mb-1 fw-bold text-dark">{user.name}</h5>
        <p className="text-muted mb-0 small">{user.email}</p>
    </div>
);
export default User;