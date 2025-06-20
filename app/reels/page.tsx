'use client';

import React, { useState, useEffect } from 'react';

interface Comment {
  id: string;
  user: string;
  content: string;
  timestamp: Date;
  likes: number;
  avatar: string;
}

interface Reel {
  id: string;
  user: string;
  username: string;
  description: string;
  likes: number;
  comments: Comment[];
  shares: number;
  isLiked: boolean;
  isFollowing: boolean;
  image: string;
  duration: string;
}

export default function Reels() {
  const [reels, setReels] = useState<Reel[]>([
    {
      id: '1',
      user: 'Merojul Islam',
      username: '@merojul',
      description: 'design of ui design design of ui design design of ui design',
      likes: 642,
      comments: [
        {
          id: '1',
          user: 'Alex Stanton',
          content: 'Amazing work! 🔥',
          timestamp: new Date(Date.now() - 120000),
          likes: 12,
          avatar: ''
        },
        {
          id: '2',
          user: 'Devon Lane',
          content: 'This is so inspiring!',
          timestamp: new Date(Date.now() - 60000),
          likes: 8,
          avatar: ''
        }
      ],
      shares: 959,
      isLiked: false,
      isFollowing: false,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '08:31'
    },
    {
      id: '2',
      user: 'Merojul Islam',
      username: '@merojul',
      description: 'design of ui design design of ui design design of ui design',
      likes: 1205,
      comments: [
        {
          id: '3',
          user: 'Iva Ryan',
          content: 'Love the colors! 💙',
          timestamp: new Date(Date.now() - 180000),
          likes: 15,
          avatar: ''
        }
      ],
      shares: 743,
      isLiked: true,
      isFollowing: true,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      duration: '05:42'
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [activeReel, setActiveReel] = useState<string | null>(null);
  const [showComments, setShowComments] = useState<string | null>(null);

  // Simulate real-time comments
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        const users = ['Sarah Johnson', 'Mike Chen', 'Emma Wilson', 'David Brown', 'Lisa Garcia'];
        const comments = [
          'This is incredible! 🤩',
          'So creative!',
          'Love this design',
          'Amazing work!',
          'Inspiring! 💫',
          'Great job! 👏',
          'Beautiful colors',
          'This is fire! 🔥'
        ];

        const randomReel = reels[Math.floor(Math.random() * reels.length)];
        const newComment: Comment = {
          id: Date.now().toString(),
          user: users[Math.floor(Math.random() * users.length)],
          content: comments[Math.floor(Math.random() * comments.length)],
          timestamp: new Date(),
          likes: Math.floor(Math.random() * 20),
          avatar: ''
        };

        setReels(prev => prev.map(reel => 
          reel.id === randomReel.id 
            ? { ...reel, comments: [...reel.comments, newComment] }
            : reel
        ));
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [reels]);

  // Simulate real-time likes
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const randomReelIndex = Math.floor(Math.random() * reels.length);
        setReels(prev => prev.map((reel, index) => 
          index === randomReelIndex 
            ? { ...reel, likes: reel.likes + Math.floor(Math.random() * 3) + 1 }
            : reel
        ));
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLike = (reelId: string) => {
    setReels(prev => prev.map(reel => 
      reel.id === reelId 
        ? { 
            ...reel, 
            isLiked: !reel.isLiked,
            likes: reel.isLiked ? reel.likes - 1 : reel.likes + 1
          }
        : reel
    ));
  };

  const handleFollow = (reelId: string) => {
    setReels(prev => prev.map(reel => 
      reel.id === reelId 
        ? { ...reel, isFollowing: !reel.isFollowing }
        : reel
    ));
  };

  const handleAddComment = (reelId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      user: 'You',
      content: newComment,
      timestamp: new Date(),
      likes: 0,
      avatar: ''
    };

    setReels(prev => prev.map(reel => 
      reel.id === reelId 
        ? { ...reel, comments: [...reel.comments, comment] }
        : reel
    ));

    setNewComment('');
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (days > 0) return `${days}d`;
    if (hours > 0) return `${hours}h`;
    if (minutes > 0) return `${minutes}m`;
    return 'now';
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Sidebar */}
      <div className="w-64 p-4 border-r border-gray-800 fixed h-full">
        <div className="mb-8">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">X</span>
          </div>
        </div>
        
        <nav className="space-y-2">
          <a href="/" className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-xl">Home</span>
          </a>
          
          <a href="/explore" className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <span className="text-xl">Explore</span>
          </a>
          
          <a href="/reels" className="flex items-center space-x-3 p-3 rounded-full bg-gray-900 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
            <span className="text-xl">Reel</span>
          </a>
          
          <a href="/messages" className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-xl">Messages</span>
          </a>
          
          <a href="#" className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span className="text-xl">Profile</span>
          </a>
          
          <a href="#" className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xl">Notification</span>
          </a>
        </nav>
        
        <button className="w-full bg-yellow-400 text-black font-bold py-3 px-8 rounded-full mt-8 hover:bg-yellow-500 transition-colors">
          Post
        </button>
        
        <div className="absolute bottom-4 flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 transition-colors cursor-pointer">
          <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
          <div>
            <div className="font-semibold">Carlota Monteiro</div>
            <div className="text-gray-500 text-sm">@monteiro</div>
          </div>
          <svg className="w-5 h-5 ml-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 mr-80">
        {/* Header */}
        <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-gray-900 text-white placeholder-gray-500 rounded-full py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Reels Feed */}
        <div className="space-y-6 p-4">
          {reels.map((reel) => (
            <div key={reel.id} className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-transparent to-black/50">
              <img 
                src={reel.image}
                alt="Reel content"
                className="w-full h-96 object-cover"
              />
              
              {/* Video Controls */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => setActiveReel(activeReel === reel.id ? null : reel.id)}
                  className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  {activeReel === reel.id ? (
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
              
              {/* User Info Overlay */}
              <div className="absolute bottom-4 left-4 right-16">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-sm">M</span>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-white">{reel.user}</span>
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white text-sm">1d</span>
                    </div>
                    <button 
                      onClick={() => handleFollow(reel.id)}
                      className={`px-4 py-1 rounded-full text-sm font-semibold mt-1 transition-colors ${
                        reel.isFollowing 
                          ? 'bg-gray-600 text-white hover:bg-gray-700' 
                          : 'bg-white text-black hover:bg-gray-200'
                      }`}
                    >
                      {reel.isFollowing ? 'Following' : 'Follow'}
                    </button>
                  </div>
                </div>
                <p className="text-white text-sm">{reel.description}</p>
              </div>
              
              {/* Action Buttons */}
              <div className="absolute bottom-4 right-4 flex flex-col space-y-4">
                <button 
                  onClick={() => handleLike(reel.id)}
                  className={`flex flex-col items-center transition-colors ${
                    reel.isLiked ? 'text-red-400' : 'text-white hover:text-red-400'
                  }`}
                >
                  <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center mb-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs">{reel.likes.toLocaleString()}</span>
                </button>
                
                <button 
                  onClick={() => setShowComments(showComments === reel.id ? null : reel.id)}
                  className="flex flex-col items-center text-white hover:text-blue-400 transition-colors"
                >
                  <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center mb-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs">{reel.comments.length}</span>
                </button>
                
                <button className="flex flex-col items-center text-white hover:text-green-400 transition-colors">
                  <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center mb-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs">{reel.shares}</span>
                </button>
                
                <button className="flex flex-col items-center text-white hover:text-blue-400 transition-colors">
                  <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center mb-1">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                  </div>
                </button>
              </div>
              
              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-600">
                <div className={`h-full bg-yellow-400 transition-all duration-1000 ${
                  activeReel === reel.id ? 'w-full' : 'w-1/3'
                }`}></div>
              </div>
              
              {/* Time Indicator */}
              <div className="absolute bottom-2 right-20 text-white text-xs bg-black/50 px-2 py-1 rounded">
                {reel.duration}
              </div>

              {/* Comments Section */}
              {showComments === reel.id && (
                <div className="absolute inset-0 bg-black/80 flex flex-col">
                  <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h3 className="text-lg font-semibold">Comments</h3>
                    <button 
                      onClick={() => setShowComments(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {reel.comments.map((comment) => (
                      <div key={comment.id} className="flex space-x-3">
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-sm">{comment.user}</span>
                            <span className="text-xs text-gray-400">{formatTime(comment.timestamp)}</span>
                          </div>
                          <p className="text-sm text-gray-300 mt-1">{comment.content}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <button className="text-xs text-gray-400 hover:text-white transition-colors">
                              ❤️ {comment.likes}
                            </button>
                            <button className="text-xs text-gray-400 hover:text-white transition-colors">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <form onSubmit={(e) => handleAddComment(reel.id, e)} className="p-4 border-t border-gray-700">
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <input
                          type="text"
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          placeholder="Add a comment..."
                          className="w-full bg-transparent text-sm placeholder-gray-400 border-none outline-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={!newComment.trim()}
                        className="text-blue-400 text-sm font-semibold hover:text-blue-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Post
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 p-4 fixed right-0 h-full overflow-y-auto">
        <div className="bg-gray-900 rounded-2xl p-4 mb-4">
          <h2 className="text-xl font-bold mb-4">Live Activity</h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-2 bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Sarah liked your reel</span>
            </div>
            <div className="flex items-center space-x-3 p-2 bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Mike commented on your post</span>
            </div>
            <div className="flex items-center space-x-3 p-2 bg-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Emma shared your reel</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl p-4 mb-4">
          <h2 className="text-xl font-bold mb-4">Suggestion for you</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm">Alex Buckmaster</div>
                  <div className="text-gray-500 text-xs">Suggested for you</div>
                </div>
              </div>
              <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                Follow
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm">Dennis Callis</div>
                  <div className="text-gray-500 text-xs">Follow you</div>
                </div>
              </div>
              <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                Follow
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm">Iva Ryan</div>
                  <div className="text-gray-500 text-xs">Suggested for you</div>
                </div>
              </div>
              <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                Follow
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm">Francine Swartz</div>
                  <div className="text-gray-500 text-xs">Suggested for you</div>
                </div>
              </div>
              <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                Follow
              </button>
            </div>
          </div>
          
          <button className="text-blue-400 text-sm mt-3 hover:underline">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}