import React from 'react';

const SearchBox = ({OnSearchChange}) => {

// bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5



   return(
      <div className='pa2'>
         <input
         className='ba bg-light-blue pa3 ma2'
         type='Search'
         placeholder='Search'
         onsearch = {OnSearchChange}
         />
      </div>
   )
}

export default SearchBox;
