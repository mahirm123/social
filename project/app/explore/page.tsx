import React from 'react';

export default function Explore() {
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
          
          <a href="/explore" className="flex items-center space-x-3 p-3 rounded-full bg-gray-900 transition-colors">
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
          
          <a href="#" className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="text-xl">Chat</span>
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
              placeholder="Meroj" 
              className="w-full bg-gray-900 text-white placeholder-gray-500 rounded-full py-3 px-4 pl-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex space-x-2">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="flex space-x-8 mt-4">
            <button className="text-white border-b-2 border-yellow-400 pb-2">Top</button>
            <button className="text-gray-500 pb-2 hover:text-white transition-colors">Latest</button>
            <button className="text-gray-500 pb-2 hover:text-white transition-colors">People</button>
            <button className="text-gray-500 pb-2 hover:text-white transition-colors">Media</button>
            <button className="text-gray-500 pb-2 hover:text-white transition-colors">Lists</button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Recent Section */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Recent</h2>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full p-0.5">
                    <div className="w-full h-full bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold">M</span>
                    </div>
                  </div>
                  <p className="text-xs text-center mt-1 text-gray-400">@username_{i}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Search Results */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 hover:bg-gray-900 rounded-lg transition-colors cursor-pointer">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Meroj</span>
            </div>
            
            <div className="flex items-center space-x-3 p-3 hover:bg-gray-900 rounded-lg transition-colors cursor-pointer">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Meroj Islam</span>
            </div>
            
            <div className="flex items-center space-x-3 p-3 hover:bg-gray-900 rounded-lg transition-colors cursor-pointer">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Meroj</span>
            </div>
            
            <div className="flex items-center space-x-3 p-3 hover:bg-gray-900 rounded-lg transition-colors cursor-pointer">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Web</span>
            </div>
          </div>

          {/* Trends Section */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Trends for you</h2>
            <div className="space-y-4">
              <div className="hover:bg-gray-900 p-3 rounded-lg transition-colors cursor-pointer">
                <p className="text-gray-500 text-sm">Trending in Bangladesh</p>
                <p className="font-semibold">Meroj Islam</p>
              </div>
              
              <div className="hover:bg-gray-900 p-3 rounded-lg transition-colors cursor-pointer">
                <p className="text-gray-500 text-sm">Business & Finance • Trending</p>
                <p className="font-semibold text-yellow-400">#CryptoPump</p>
                <p className="text-gray-500 text-sm">3.5M posts</p>
              </div>
              
              <div className="hover:bg-gray-900 p-3 rounded-lg transition-colors cursor-pointer">
                <p className="text-gray-500 text-sm">Business & Finance • Trending</p>
                <p className="font-semibold">Paxs</p>
                <p className="text-gray-500 text-sm">41.5K posts</p>
              </div>
              
              <div className="hover:bg-gray-900 p-3 rounded-lg transition-colors cursor-pointer">
                <p className="text-gray-500 text-sm">Music • Trending</p>
                <p className="font-semibold text-yellow-400">#JENNIE</p>
                <p className="text-gray-500 text-sm">178K posts</p>
              </div>
            </div>
          </div>

          {/* People Grid */}
          <div className="mt-8">
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'Jessica Hall', handle: '@jessica', followers: '5.5M', following: '40M', posts: '10M' },
                { name: 'Rosy Smith', handle: '@rosy', followers: '5.5M', following: '40M', posts: '10M' },
                { name: 'Galib Liton', handle: '@galib', followers: '5.5M', following: '40M', posts: '10M' }
              ].map((person, i) => (
                <div key={i} className="bg-gray-900 rounded-lg p-4 text-center">
                  <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-3"></div>
                  <h3 className="font-semibold">{person.name}</h3>
                  <p className="text-gray-500 text-sm">{person.handle}</p>
                  <div className="flex justify-between text-xs text-gray-400 mt-3">
                    <div>
                      <div className="font-semibold text-white">{person.followers}</div>
                      <div>Followers</div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{person.following}</div>
                      <div>Following</div>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{person.posts}</div>
                      <div>Posts</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <div className="mt-8">
            <div className="bg-gray-900 rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Abstract colorful design"
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
                  <span className="font-semibold">Carlota Monteiro</span>
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-500 text-sm">@monteiro_g</span>
                </div>
                <p className="text-blue-400 text-sm mb-2">#UX_UI #App #mobile #Design</p>
                <h3 className="font-semibold text-lg mb-2">Your Future Starts Here</h3>
                <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                
                <div className="flex items-center justify-between mt-4 max-w-md">
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                    <span>89k</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-green-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    <span>12k</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-gray-500 hover:text-red-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    <span>78k</span>
                  </button>
                  
                  <button className="text-gray-500 hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 p-4 fixed right-0 h-full overflow-y-auto">
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