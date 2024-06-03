import { marked } from 'marked';

/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
function Preview({ markdown }) {
  const parsed = marked(markdown);
  
  return (
    <div>
      <div className="w-full bg-gray-900 p-3 text-gray-400 uppercase tracking-wider">
        Preview
      </div>
      <div className='p-6 prose prose-invert' dangerouslySetInnerHTML={{ __html: parsed }} />
    </div>
  );
}

export default Preview;
