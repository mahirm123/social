'use client';

import React, { useState, useEffect } from 'react';

interface Post {
  id: string;
  image: string;
  likes: number;
  comments: number;
  isVideo?: boolean;
}

interface Follower {
  id: string;
  name: string;
  username: string;
  location: string;
  isFollowing: boolean;
  isFollowed: boolean;
  avatar: string;
}

interface Comment {
  id: string;
  user: string;
  content: string;
  timestamp: string;
  likes: number;
  avatar: string;
}

export default function Profile() {
  const [activeTab, setActiveTab] = useState<'posts' | 'followers' | 'following' | 'reels'>('posts');
  const [isFollowing, setIsFollowing] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [newComment, setNewComment] = useState('');

  const [profileStats, setProfileStats] = useState({
    followers: 25869,
    following: 659887,
    posts: 1247
  });

  const [posts] = useState<Post[]>([
    {
      id: '1',
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 1234,
      comments: 89,
      isVideo: false
    },
    {
      id: '2',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 2156,
      comments: 156,
      isVideo: true
    },
    {
      id: '3',
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 987,
      comments: 67,
      isVideo: false
    },
    {
      id: '4',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 3421,
      comments: 234,
      isVideo: true
    },
    {
      id: '5',
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 1876,
      comments: 123,
      isVideo: false
    },
    {
      id: '6',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 2987,
      comments: 189,
      isVideo: true
    }
  ]);

  const [followers, setFollowers] = useState<Follower[]>([
    {
      id: '1',
      name: 'Jenny Wilson',
      username: '@jenny',
      location: 'New Division',
      isFollowing: false,
      isFollowed: false,
      avatar: ''
    },
    {
      id: '2',
      name: 'Courtney Henry',
      username: '@courtney',
      location: 'New Division',
      isFollowing: false,
      isFollowed: false,
      avatar: ''
    },
    {
      id: '3',
      name: 'Robert Fox',
      username: '@robert',
      location: 'New Division',
      isFollowing: false,
      isFollowed: false,
      avatar: ''
    },
    {
      id: '4',
      name: 'Esther Howard',
      username: '@esther',
      location: 'New Division',
      isFollowing: false,
      isFollowed: false,
      avatar: ''
    },
    {
      id: '5',
      name: 'Kathryn Murphy',
      username: '@kathryn',
      location: 'New Division',
      isFollowing: true,
      isFollowed: true,
      avatar: ''
    },
    {
      id: '6',
      name: 'Devon Lane',
      username: '@devon',
      location: 'New Division',
      isFollowing: true,
      isFollowed: true,
      avatar: ''
    },
    {
      id: '7',
      name: 'Cameron Williamson',
      username: '@cameron',
      location: 'New Division',
      isFollowing: false,
      isFollowed: false,
      avatar: ''
    },
    {
      id: '8',
      name: 'Savannah Nguyen',
      username: '@savannah',
      location: 'New Division',
      isFollowing: false,
      isFollowed: false,
      avatar: ''
    },
    {
      id: '9',
      name: 'Cody Fisher',
      username: '@cody',
      location: 'New Division',
      isFollowing: false,
      isFollowed: false,
      avatar: ''
    }
  ]);

  const [comments] = useState<Comment[]>([
    {
      id: '1',
      user: 'Cody Fisher',
      content: 'Wow! This looks absolutely delicious! 🤤',
      timestamp: '4h ago',
      likes: 12,
      avatar: ''
    },
    {
      id: '2',
      user: 'Jane Cooper',
      content: 'Amazing! I need to try this recipe! 😍',
      timestamp: '3h ago',
      likes: 8,
      avatar: ''
    }
  ]);

  // Simulate real-time follower updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        setProfileStats(prev => ({
          ...prev,
          followers: prev.followers + Math.floor(Math.random() * 5) + 1
        }));
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setProfileStats(prev => ({
      ...prev,
      followers: isFollowing ? prev.followers - 1 : prev.followers + 1
    }));
  };

  const handleFollowUser = (userId: string) => {
    setFollowers(prev => prev.map(follower => 
      follower.id === userId 
        ? { ...follower, isFollowing: !follower.isFollowing }
        : follower
    ));
  };

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    // Add comment logic here
    setNewComment('');
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
          
          <a href="/reels" className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 transition-colors">
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
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xl">Notifications</span>
          </a>
          
          <a href="/profile" className="flex items-center space-x-3 p-3 rounded-full bg-gray-900 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span className="text-xl">Profile</span>
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
      <div className="flex-1 ml-64">
        {/* Header */}
        <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">Profile</h1>
              <div className="flex space-x-6 mt-2">
                <button 
                  onClick={() => setActiveTab('posts')}
                  className={`pb-2 ${activeTab === 'posts' ? 'text-white border-b-2 border-yellow-400' : 'text-gray-500 hover:text-white'} transition-colors`}
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => setActiveTab('followers')}
                  className={`pb-2 ${activeTab === 'followers' ? 'text-white border-b-2 border-yellow-400' : 'text-gray-500 hover:text-white'} transition-colors`}
                >
                  Followers
                </button>
                <span className="text-gray-500 pb-2">Carlota Monteiro</span>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Profile Content */}
        <div className="relative">
          {/* Cover Photo */}
          <div className="h-64 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 relative">
            <button className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm hover:bg-black/70 transition-colors">
              Edit Profile
            </button>
          </div>

          {/* Profile Info */}
          <div className="px-6 pb-6">
            <div className="flex items-end justify-between -mt-16 mb-4">
              <div className="relative">
                <div className="w-32 h-32 bg-gray-600 rounded-full border-4 border-black overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-2 right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
              
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Profile</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Followers</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Following</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  <span className="text-sm">Reels</span>
                </button>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-2xl font-bold">Carlota Monteiro</h1>
                <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-400 mb-2">Designer</p>
              
              <div className="flex space-x-8 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{profileStats.followers.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{profileStats.following.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{profileStats.posts.toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Posts</div>
                </div>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'posts' && (
              <div>
                {/* About Section */}
                <div className="bg-gray-900 rounded-2xl p-6 mb-6">
                  <h2 className="text-xl font-bold mb-4">About</h2>
                  <div className="space-y-3 text-sm">
                    <p className="text-gray-300">Top I love sugar when I love our cake. Travel and restaurants I love juckes. Tapping cake water.</p>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>Joined Mar 2020</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>USA</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>brown.design@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>UX Designer at Google</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" clipRule="evenodd" />
                      </svg>
                      <span>Studied at College of new Jersey</span>
                    </div>
                  </div>
                </div>

                {/* Featured Post */}
                <div className="bg-gray-900 rounded-2xl overflow-hidden mb-6">
                  <img 
                    src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Featured post"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">Carlota Monteiro</span>
                          <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-400">1 min ago</p>
                      </div>
                    </div>
                    
                    <p className="text-blue-400 text-sm mb-2">#UX_UI #App #mobile #Design</p>
                    <h3 className="text-xl font-bold mb-2">Your Future Starts Here</h3>
                    <p className="text-gray-400 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    
                    <div className="flex items-center space-x-1 mb-4">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-black flex items-center justify-center text-xs">❤️</div>
                        <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-black text-xs flex items-center justify-center">👍</div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full border-2 border-black text-xs flex items-center justify-center">😂</div>
                        <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-black text-xs flex items-center justify-center">😮</div>
                      </div>
                      <span className="text-gray-500 text-sm ml-2">89</span>
                    </div>

                    <div className="flex items-center justify-between max-w-md">
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg>
                        <span>165</span>
                      </button>
                      
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-green-400 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                        <span>208</span>
                      </button>
                      
                      <button className="flex items-center space-x-2 text-gray-500 hover:text-red-400 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                        <span>783K</span>
                      </button>
                      
                      <button className="text-gray-500 hover:text-blue-400 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                      </button>
                    </div>

                    {/* Comments */}
                    <div className="mt-6 space-y-4">
                      {comments.map((comment) => (
                        <div key={comment.id} className="flex space-x-3">
                          <div className="w-8 h-8 bg-gray-600 rounded-full flex-shrink-0"></div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold text-sm">{comment.user}</span>
                              <span className="text-xs text-gray-400">{comment.timestamp}</span>
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
                      
                      <form onSubmit={handleAddComment} className="flex space-x-3">
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <input 
                            type="text" 
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Write a comment..." 
                            className="w-full bg-transparent text-sm placeholder-gray-500 border-none outline-none"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-3 gap-1">
                  {posts.map((post) => (
                    <div 
                      key={post.id} 
                      className="relative aspect-square bg-gray-800 cursor-pointer group overflow-hidden"
                      onClick={() => handlePostClick(post)}
                    >
                      <img 
                        src={post.image} 
                        alt="Post"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {post.isVideo && (
                        <div className="absolute top-2 right-2">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                          </svg>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="flex items-center space-x-4 text-white">
                          <div className="flex items-center space-x-1">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-semibold">{post.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-semibold">{post.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'followers' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Followers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {followers.map((follower) => (
                    <div key={follower.id} className="bg-gray-900 rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                          <div>
                            <h3 className="font-semibold text-sm">{follower.name}</h3>
                            <p className="text-xs text-gray-400">{follower.username}</p>
                            <div className="flex items-center space-x-1 text-xs text-gray-500">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                              <span>{follower.location}</span>
                            </div>
                          </div>
                        </div>
                        {follower.isFollowed && (
                          <div className="flex items-center space-x-1 text-green-400">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-xs">Followed</span>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => handleFollowUser(follower.id)}
                        className={`w-full py-2 px-4 rounded-full text-sm font-semibold transition-colors ${
                          follower.isFollowing
                            ? 'bg-gray-700 text-white hover:bg-gray-600'
                            : 'bg-white text-black hover:bg-gray-200'
                        }`}
                      >
                        {follower.isFollowing ? 'Following' : 'Follow'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex">
              <div className="flex-1">
                <img 
                  src={selectedPost.image} 
                  alt="Post"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="w-80 p-4 border-l border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Comments</h3>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-red-400 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span>{selectedPost.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                      <span>{selectedPost.comments}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}