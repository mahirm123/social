import React from 'react';

export default function Reels() {
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
          {/* Reel 1 */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-transparent to-black/50">
            <img 
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Sea turtle underwater"
              className="w-full h-96 object-cover"
            />
            
            {/* Video Controls */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
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
                    <span className="font-semibold text-white">Merojul Islam</span>
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white text-sm">1d</span>
                  </div>
                  <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold mt-1 hover:bg-gray-200 transition-colors">
                    Follow
                  </button>
                </div>
              </div>
              <p className="text-white text-sm">design of ui design design of ui design design of ui design</p>
            </div>
            
            {/* Action Buttons */}
            <div className="absolute bottom-4 right-4 flex flex-col space-y-4">
              <button className="flex flex-col items-center text-white hover:text-red-400 transition-colors">
                <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center mb-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs">642</span>
              </button>
              
              <button className="flex flex-col items-center text-white hover:text-blue-400 transition-colors">
                <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center mb-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs">10</span>
              </button>
              
              <button className="flex flex-col items-center text-white hover:text-green-400 transition-colors">
                <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center mb-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs">959</span>
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
              <div className="h-full bg-yellow-400 w-1/3"></div>
            </div>
            
            {/* Time Indicator */}
            <div className="absolute bottom-2 right-20 text-white text-xs bg-black/50 px-2 py-1 rounded">
              08:31
            </div>
          </div>

          {/* Reel 2 */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-transparent to-black/50">
            <img 
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Vintage floral arrangement"
              className="w-full h-96 object-cover"
            />
            
            {/* Video Controls */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
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
                    <span className="font-semibold text-white">Merojul Islam</span>
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white text-sm">1d</span>
                  </div>
                  <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold mt-1 hover:bg-gray-200 transition-colors">
                    Follow
                  </button>
                </div>
              </div>
              <p className="text-white text-sm">design of ui design design of ui design design of ui design</p>
            </div>
            
            {/* Action Buttons */}
            <div className="absolute bottom-4 right-4 flex flex-col space-y-4">
              <button className="flex flex-col items-center text-white hover:text-red-400 transition-colors">
                <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center mb-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs">642</span>
              </button>
              
              <button className="flex flex-col items-center text-white hover:text-blue-400 transition-colors">
                <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center mb-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs">10</span>
              </button>
              
              <button className="flex flex-col items-center text-white hover:text-green-400 transition-colors">
                <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center mb-1">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs">959</span>
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
              <div className="h-full bg-yellow-400 w-2/3"></div>
            </div>
            
            {/* Time Indicator */}
            <div className="absolute bottom-2 right-20 text-white text-xs bg-black/50 px-2 py-1 rounded">
              05:42
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