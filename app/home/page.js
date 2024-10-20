'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Next.js specific

const Home = () => {
  const router = useRouter();

  const [posts, setPosts] = useState([
    { id: 1, name: 'Ashwitha', content: 'Enjoying a sunny day at the beach!', image: '/path-to-image', likes: 20 },
    { id: 2, name: 'Harshitha', content: 'Had an amazing time at the concert last night!', image: '/path-to-image', likes: 35 },
  ]);

  const [suggestedUsers, setSuggestedUsers] = useState([
    { id: 1, name: 'neha__01', followStatus: false },
    { id: 2, name: 'spamm_xx', followStatus: false },
  ]);

  const handleFollow = (id) => {
    setSuggestedUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, followStatus: !user.followStatus } : user
      )
    );
  };

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: '250px', padding: '20px', backgroundColor: '#fff', borderRight: '1px solid #ddd' }}>
        <h3>Instagram</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🏠</span> Home
          </a>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🔍</span> Search
          </a>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>📹</span> Reels
          </a>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>✉️</span> Messages
          </a>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>❤️</span> Notifications
          </a>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>➕</span> Create
          </a>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>👤</span> Profile
          </a>
        </nav>
      </div>

      {/* Main content feed */}
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f0f2f5' }}>
        {/* Stories Section */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', padding: '10px', borderBottom: '1px solid #ddd' }}>
          <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#ddd' }}></div>
          <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#ddd' }}></div>
          <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#ddd' }}></div>
          <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#ddd' }}></div>
          <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: '#ddd' }}></div>
        </div>

        {/* Posts Section */}
        <div>
          {posts.map((post) => (
            <div key={post.id} style={{ marginBottom: '20px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#ddd', marginRight: '10px' }}></div>
                <h5>{post.name}</h5>
              </div>
              <p>{post.content}</p>
              <div style={{ height: '300px', backgroundColor: '#ddd', marginBottom: '10px' }}>
                {/* Post image goes here */}
              </div>
              <button
                onClick={() => handleLike(post.id)}
                style={{
                  backgroundColor: '#3A6D8C',
                  color: '#fff',
                  padding: '10px 15px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  border: 'none',
                }}
              >
                Like ({post.likes})
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Users (Right Sidebar) */}
      <div style={{ width: '250px', padding: '20px', backgroundColor: '#f0f2f5', borderLeft: '1px solid #ddd' }}>
        <h4>Suggested for you</h4>
        <div>
          {suggestedUsers.map((user) => (
            <div key={user.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ddd', marginRight: '10px' }}></div>
                <span>{user.name}</span>
              </div>
              <button
                onClick={() => handleFollow(user.id)}
                style={{
                  backgroundColor: user.followStatus ? '#f44336' : '#4CAF50',
                  color: '#fff',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                  width:'60%',
                }}
              >
                {user.followStatus ? 'Unfollow' : 'Follow'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
