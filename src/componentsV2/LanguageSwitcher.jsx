
// import React from 'react';

// const LanguageSwitcher = ({ selectedLanguage, onLanguageChange }) => {
//   const languages = ['English', 'Telugu', 'Hindi', 'Marathi', 'Tamil', 'Malayalam', 'Gujarati'];

//   return (
//     <div className="language-switcher">
//       {languages.map((language) => (
//         <button
//           key={language}
//           onClick={() => onLanguageChange(language)}  // Correct function call
//           className={selectedLanguage === language ? 'active' : ''}
//         >
//           {language}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default LanguageSwitcher;

//---------------------




import React from 'react';

const LanguageSwitcher = ({ selectedLanguage, onLanguageChange }) => {
  const languages = ['English', 'Telugu', 'Hindi', 'Marathi', 'Tamil', 'Malayalam', 'Gujarati'];

  return (
    <div className="language-switcher">
      {languages.map((language) => (
        <button
          key={language}
          onClick={() => onLanguageChange(language)}
          className={selectedLanguage === language ? 'active' : ''}
        >
          {language}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
