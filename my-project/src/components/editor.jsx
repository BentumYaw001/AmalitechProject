/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
function Editor({markdown},_props) {
   return(
      <div>
<div className="w-full bg-gray-900 p-3 text-gray-400 uppercase tracking-wider ">
        Markdown
      </div>
      <textarea className='w-full  h-full bg-gray-800 text-white outline-none' >{markdown}</textarea>
      </div>
      
   );
}

export default Editor;
