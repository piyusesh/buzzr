import React from 'react';
import { FaGithub, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Welcome() {
  return (
    <div className="bg-gray-900 h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-9xl font-bold font-tiny5 py-2">
        <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-transparent bg-clip-text text-9xl">Buzzr</span>
      </h1>
      <p className="text-gray-200 font-mono font-bold py-2 text-2xl">
        Where Productivity Meets Procrastination (We Won't Tell)
      </p>
      <h2 className="text-6xl py-3 font-bold font-tiny5 bg-gradient-to-r from-gray-800 to-gray-100 text-transparent bg-clip-text">
        coming soon
      </h2>
      <div className="flex space-x-4 py-3">
        <a href="https://github.com/piyusesh/buzzr" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-200 text-3xl hover:text-purple-600 transition-transform transform hover:scale-110"/>
        </a>
        <a href="http://x.com/piyusesh" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className='text-gray-200 text-3xl hover:text-purple-600 transition-transform transform hover:scale-110' />
        </a>
        <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="text-gray-200 text-3xl hover:text-purple-600 transition-transform transform hover:scale-110"/>
        </a>
      </div>
    </div>
  );
}
