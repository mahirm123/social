import Image from 'next/image';

export default function Home() {
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
          <a href="/" className="flex items-center space-x-3 p-3 rounded-full bg-gray-900 transition-colors">
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
          
          <a href="#" className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 transition-colors">
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
          
          <a href="#" className="flex items-center space-x-3 p-3 rounded-full hover:bg-gray-900 transition-colors">
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
            <div className="font-semibold">Gabriela Monteiro</div>
            <div className="text-gray-500 text-sm">@monteiro_g</div>
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
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">For You</h1>
            <div className="flex space-x-8">
              <button className="text-white border-b-2 border-yellow-400 pb-4">For You</button>
              <button className="text-gray-500 pb-4 hover:text-white transition-colors">Following</button>
            </div>
          </div>
          
          {/* Story circles */}
          <div className="flex space-x-4 mt-4 overflow-x-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full p-0.5">
                  <div className="w-full h-full bg-gray-600 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tweet Composer */}
        <div className="border-b border-gray-800 p-4">
          <div className="flex space-x-3">
            <div className="w-12 h-12 bg-gray-600 rounded-full flex-shrink-0"></div>
            <div className="flex-1">
              <textarea 
                placeholder="What's happening?!" 
                className="w-full bg-transparent text-xl placeholder-gray-500 resize-none border-none outline-none"
                rows={3}
              />
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-4 text-blue-400">
                  <svg className="w-5 h-5 cursor-pointer hover:bg-blue-900/20 rounded-full p-1 w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <svg className="w-5 h-5 cursor-pointer hover:bg-blue-900/20 rounded-full p-1 w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <button className="bg-blue-500 text-white px-6 py-1.5 rounded-full font-semibold hover:bg-blue-600 transition-colors">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feed */}
        <div className="divide-y divide-gray-800">
          {/* Post 1 */}
          <div className="p-4 hover:bg-gray-950/50 transition-colors">
            <div className="flex space-x-3">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Gabriela Monteiro</span>
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-500 text-sm">@monteiro_g · 8h</span>
                </div>
                <p className="mt-2 text-blue-400">#UX_UI #App #mobile #Design</p>
                
                <div className="mt-3 rounded-2xl overflow-hidden bg-gray-900">
                  <img 
                    src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Stack of pancakes with syrup and mint"
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">Your Future Starts Here</h3>
                    <p className="text-gray-400 text-sm mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mt-3">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-black flex items-center justify-center">❤️</div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-black">👍</div>
                    <div className="w-6 h-6 bg-yellow-500 rounded-full border-2 border-black">😂</div>
                    <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-black">😮</div>
                  </div>
                  <span className="text-gray-500 text-sm ml-2">89</span>
                </div>

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

                {/* Comments */}
                <div className="mt-4 space-y-3">
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-sm">Cody Fisher</span>
                        <span className="text-gray-500 text-xs">@cody · 4h ago</span>
                      </div>
                      <p className="text-sm text-gray-300">Wow! This looks absolutely delicious! 🤤</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-sm">Jane Cooper</span>
                        <span className="text-gray-500 text-xs">@jane · 3h ago</span>
                      </div>
                      <p className="text-sm text-gray-300">Amazing! I need to try this recipe! 😍</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <input 
                        type="text" 
                        placeholder="Write a comment..." 
                        className="w-full bg-transparent text-sm placeholder-gray-500 border-none outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div className="p-4 hover:bg-gray-950/50 transition-colors">
            <div className="flex space-x-3">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">Gabriela Monteiro</span>
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-500 text-sm">@monteiro_g · 12h</span>
                </div>
                <p className="mt-2 text-blue-400">#UX_UI #App #mobile #Design</p>
                
                <div className="mt-3 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Fresh salad"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 p-4 fixed right-0 h-full overflow-y-auto">
        <div className="bg-gray-900 rounded-2xl p-4 mb-4">
          <h2 className="text-xl font-bold mb-4">Suggestions for you</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
                <div>
                  <div className="font-semibold text-sm">Alex Stanton</div>
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
                  <div className="font-semibold text-sm">Devon Lane</div>
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
        
        <div className="text-gray-500 text-xs">
          <p>Sponsored by Starbucks</p>
        </div>
      </div>
    </div>
  );
}