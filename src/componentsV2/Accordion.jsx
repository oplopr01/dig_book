// import React from 'react';

// const Accordion = ({ chapters, onChapterSelect, onSectionSelect, selectedChapter, selectedSection }) => {
//   return (
//     <div className="accordion">
//       {chapters.map((chapter, chapterIndex) => (
//         <div key={chapterIndex}>
//           <h3>
//             <button
//               type="button"
//               onClick={() => onChapterSelect(chapterIndex)}
//               style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: '0' }}
//             >
//               {chapter.title}
//             </button>
//           </h3>
//           {selectedChapter === chapterIndex && (
//             <ul>
//               {chapter.sections.map((section) => (
//                 <li
//                   key={section.id}
//                   onClick={() => onSectionSelect(section.id)}
//                   className={selectedSection === section.id ? 'active' : ''}
//                   style={{ cursor: 'pointer', color: selectedSection === section.id ? 'blue' : 'black' }} // Change colors as needed
//                 >
//                   {section.title}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;


//----------------------------------


import React from 'react';

const Accordion = ({ chapters, onChapterSelect, onSectionSelect, selectedChapter, selectedSection }) => {
  return (
    <div className="accordion">
      {chapters.map((chapter, chapterIndex) => (
        <div key={chapterIndex}>
          <h3 onClick={() => onChapterSelect(chapterIndex)}>
            {chapter.title}
          </h3>
          {selectedChapter === chapterIndex && (
            <ul>
              {chapter.sections.map((section) => (
                <li
                  key={section.id}
                  onClick={() => onSectionSelect(section.id)}
                  className={selectedSection === section.id ? 'active' : ''}
                >
                 {section.id} {section.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
