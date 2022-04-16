import React from 'react'
import * as CgIcons from "react-icons/cg";


const sidebar = () => {
  return (
    <form action="/" method="get">
      <label htmlFor="header-search">
        
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Search blog posts"
        name="s"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default sidebar


//  <form onSubmit={handleSubmit} action="#" id="form" className="w-500">
//           <div>
//             <input
//               type="text"
//               placeholder="email"
//               required
//               className="h-10 border-2 rounded-md p-5 mt-3 focus:border-none w-full"
//               autoComplete="off"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <span id="text"></span>
//           </div>
//   </form>