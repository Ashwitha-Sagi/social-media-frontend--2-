// HomePage.js
"use client"; 
import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar'; 
import Post from './Post'; 

const HomePage = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
        return <div>You need to log in to see this page.</div>;
    }

    const posts = [
        { content: "Enjoying a great day!" },
        { content: "Working on my new project!" },
    ];

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
                {posts.map((post, index) => (
                    <Post key={index} content={post.content} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
