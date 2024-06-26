/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
function Editor({ markdown, setMarkdown }) {
  return (
    <div className=' border-r-2 border-gray-600'>
      <div className="w-full bg-gray-900 p-3 text-gray-400 uppercase tracking-wider">
        Markdown
      </div>
      <textarea
        className="w-full h-full bg-gray-800 text-white outline-none"
        onChange={(e) => setMarkdown(e.target.value)}
      >
        {markdown}
      </textarea>
    </div>
  );
}

export default Editor;
