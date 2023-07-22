import React from "react";

const MainPage = () => {
  return (
    <div style={{background: `url(https://mir-s3-cdn-cf.behance.net/project_modules/disp/5e0f6429920719.560ab5e9e1a78.gif) no-repeat center center fixed`, backgroundSize: 'cover'}} className="text-black min-h-screen">

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1>Icon</h1>
          </div>
          <div className="flex">
            <div className="mr-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"  >Our services</div>
            <div className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Join our newsletter</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 mt-48">
        <div className="text-left">
          <h1 className="text-7xl mb-4">BotNow</h1>
          <p className="text-7xl mb-4">AI</p>
        </div>
        <div className="flex mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            Let&apos;s Talk
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
