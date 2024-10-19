// Navbar.js
"use client"; 
import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="bg-blue-600 p-4 text-white">
            <div className="container mx-auto flex justify-between">
                <div className="text-lg font-bold">Social Media App</div>
                <div className="flex space-x-4">
                    <button onClick={() => router.push('/')} className="hover:text-blue-200">Home</button>
                    <button onClick={() => router.push('/friends')} className="hover:text-blue-200">Friends</button>
                    <button onClick={() => router.push('/profile')} className="hover:text-blue-200">Profile</button>
                    <button onClick={() => router.push('/notifications')} className="hover:text-blue-200">Notifications</button>
                    <button onClick={() => router.push('/messages')} className="hover:text-blue-200">Messages</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
