

// import React from 'react';

// const ContentArea = ({ content }) => {
//   return (
//     <div className="content-area">
//       <h2>Content</h2>
//       <div dangerouslySetInnerHTML={{ __html: content || 'Select a section to view content' }} />
//     </div>
//   );
// };

// export default ContentArea;


//----------------


import React from 'react';

const ContentArea = ({ title, content }) => {
  return (
    <div className="content-area">
      <h2>{title || 'Content'}</h2>
      <div dangerouslySetInnerHTML={{ __html: content || 'Select a section to view content' }} />
    </div>
  );
};

export default ContentArea;
