// FriendList.js
"use client"; 
import React from 'react';

const FriendList = ({ friends }) => {
    return (
        <div className="container mx-auto p-4">
            {friends.map(friend => (
                <div key={friend.id} className="flex items-center justify-between py-2 border-b">
                    <span>{friend.name}</span>
                    <button className="text-blue-500">Follow</button>
                </div>
            ))}
        </div>
    );
};

export default FriendList;
