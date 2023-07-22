import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <img src="/path_to_icon.png" alt="Icon" className="h-8 w-8 mr-2" />
            <span>Some Text</span>
          </div>
          <div className="mb-4">
            <p>Some other text</p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-2">
              A Button
            </button>
          </div>
          <p>Another Text</p>
        </div>

        <div className="text-center">
          <p className="font-bold">Address</p>
          <p>Some Street, Some City</p>
        </div>

        <div className="text-right">
          <p className="font-bold">Contact</p>
          <p>+1234567890</p>
        </div>
      </div>


      
    </footer>
  );
};

export default Footer;
