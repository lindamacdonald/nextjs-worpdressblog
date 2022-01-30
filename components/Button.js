import React from 'react';

function Button() {
  return (
    
    <div className=" relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            
                            <div className=" absolute bottom-0 py-2 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                
                            </div>
                        </div>
    
                
        
        )
}

export default Button;
