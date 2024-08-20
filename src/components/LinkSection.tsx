import React from "react";

const LinkSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-DarkWhite p-6">

      <div className="relative w-40 h-40 mb-4">
        <div className="absolute inset-0 bg-gradient-to-t from-DarkPurple to-transparent rounded-full shadow-lg"></div>
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src="/assets/loadingprofile.jpg" 
            alt="Loading Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-DarkPurple">Loading Jr</h2>
        <p className="text-sm text-black">Entre em contato</p>
      </div>

      <div className="w-full max-w-xs space-y-4">
        <a
          href="https://www.linkedin.com/company/loading-junior/?originalSubdomain=br" // Replace with your LinkedIn URL
          className="block w-full py-3 text-center text-white bg-DarkPurple rounded-lg shadow-md hover:bg-MediumPurple transform hover:-translate-y-1 transition-all duration-200 ease-in-out"
        >
          LinkedIn
        </a>
        <a
          href="https://www.facebook.com/" // Replace with your Instagram URL
          className="block w-full py-3 text-center text-white bg-DarkPurple rounded-lg shadow-md hover:bg-MediumPurple transform hover:-translate-y-1 transition-all duration-200 ease-in-out"
        >
          Facebook
        </a>
        
        <a
          href="https://www.instagram.com/loadingjr/" // Replace with your Instagram URL
          className="block w-full py-3 text-center text-white bg-DarkPurple rounded-lg shadow-md hover:bg-MediumPurple transform hover:-translate-y-1 transition-all duration-200 ease-in-out"
        >
          Instagram
        </a>
        <a
          href="mailto:oi.loadingjr@gmail.com" // Replace with your email
          className="block w-full py-3 text-center text-white bg-DarkPurple rounded-lg shadow-md hover:bg-MediumPurple transform hover:-translate-y-1 transition-all duration-200 ease-in-out"
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default LinkSection;