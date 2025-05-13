// import React, { useEffect, useState } from 'react';

// function TranslateButton() {
//   const [lang, setLang] = useState('en');

//   useEffect(() => {
//     const googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: 'en,hi',
//           includedLanguages: 'en,hi,mr,gu,pa,bn,ur,te,ta,kn,or,ml,as', 
//         },
//         'google_translate_element'
//       );
//     };

//     const addScript = document.createElement('script');
//     addScript?.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
//     document?.body?.appendChild(addScript);

//     window.googleTranslateElementInit = googleTranslateElementInit;

//     return () => {
//       document?.body?.removeChild(addScript);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const select = document?.querySelector('select.goog-te-combo');
//       if (select) {
//         const event = new Event('change');
//         select.value = lang;
//         select.dispatchEvent(event);
//         clearInterval(interval); // Clear interval once the language is changed
//       }
//     }, 100);

//     return () => clearInterval(interval);
//   }, [lang]);

//   const handleLanguageChange = (event) => {
//     let selectedLang = event.target.value;

    
//     if (selectedLang === 'no') {
//       selectedLang = 'hi';
//     }

//     setLang(selectedLang);
//   };

  

//   return (
//     <div>
//       <div id="google_translate_element" style={{ display: 'none' }}></div>
//       <div className='justify-content-center d-flex'>
//         <select className='form-select border border-dark' onChange={handleLanguageChange} value={lang}>
//           <option value="en">English</option>
//           {lang === 'no' ? (
//             <option value="hi">Hindi</option>
//           ) : (
//             <option value="hi">हिन्दी</option>
//           )}
//           <option value="mr">Marathi</option>
//           <option value="gu">Gujarati</option>
//           <option value="pa">Punjabi</option>
//           <option value="bn">Bengali</option>
//           <option value="ur">Urdu</option>
//           <option value="te">Telugu</option>
//           <option value="ta">Tamil</option>
//           <option value="kn">Kannada</option>
//           <option value="or">Odia</option>
//           <option value="ml">Malayalam</option>
//           <option value="as">Assamese</option>
//         </select>
//       </div>
//     </div>
//   );
// }

// export default TranslateButton;


// import React, { useEffect, useState } from 'react';

// function TranslateButton() {
//   const [lang, setLang] = useState('en');

//   useEffect(() => {
//     // Define the global callback before loading the script
//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: 'en,hi',
//           includedLanguages: 'en,hi,mr,gu,pa,bn,ur,te,ta,kn,or,ml,as',
//           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
//         },
//         'google_translate_element'
//       );
//     };

//     const script = document.createElement('script');
//     script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const select = document.querySelector('.goog-te-combo');
//       if (select) {
//         select.value = lang;
//         select.dispatchEvent(new Event('change'));
//         clearInterval(interval);
//       }
//     }, 500);

//     return () => clearInterval(interval);
//   }, [lang]);

//   const handleLanguageChange = (event) => {
//     let selectedLang = event.target.value;
//     if (selectedLang === 'no') {
//       selectedLang = 'hi';
//     }
//     setLang(selectedLang);
//   };

//   return (
//     <div>
//       <div id="google_translate_element" style={{ display: 'none' }}></div>
//       <div className="justify-content-center d-flex">
//         <select className="form-select border border-dark" onChange={handleLanguageChange} value={lang}>
//           <option value="en">English</option>
//           <option value="hi">हिन्दी</option>
//           <option value="mr">Marathi</option>
//           <option value="gu">Gujarati</option>
//           <option value="pa">Punjabi</option>
//           <option value="bn">Bengali</option>
//           <option value="ur">Urdu</option>
//           <option value="te">Telugu</option>
//           <option value="ta">Tamil</option>
//           <option value="kn">Kannada</option>
//           <option value="or">Odia</option>
//           <option value="ml">Malayalam</option>
//           <option value="as">Assamese</option>
//         </select>
//       </div>
//     </div>
//   );
// }

// export default TranslateButton;






import React, { useEffect } from "react";
 
const TranslateButton = () => {
  useEffect(() => {
    const loadGoogleTranslate = () => {
      window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          includedLanguages: "en,hi,mr,gu,pa,bn,ur,te,ta,kn,or,ml,as",
          layout:
            window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
        },
        "google_translate_element"
      );
    };
 
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
    document.body.appendChild(script);
 
    window.loadGoogleTranslate = loadGoogleTranslate;
 
    return () => {
      document?.body?.removeChild(script);
    };
  }, []);
 
  return <div id="google_translate_element"></div>;
};
 
export default TranslateButton;
 