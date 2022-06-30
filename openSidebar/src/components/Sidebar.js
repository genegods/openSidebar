import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const SideBar = () => {
    const [openSidebar, setOpenSidebar] = useState(false);

    const handleOpenSidebar = () => {
        setOpenSidebar(!openSidebar);
      };
 

  return (
    <React.Fragment>
      <section className="hidden md:block">
        <div className="w-1/5 h-screen grid grid-cols-3">
          <div className='bg-red-500'>
            <div  className="h-20 bg-gray-900 text-2xl text-white centered">
                {
                    (openSidebar === false)?
                    <FaBars onClick={handleOpenSidebar}/>:
                    <FaTimes onClick={handleOpenSidebar}/>
                }
         
            
            </div>
          </div>
          <div className={`bg-green-500 col-span-2 ${
            (openSidebar === true) ? 'block': 'hidden'
          }`}></div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SideBar;
