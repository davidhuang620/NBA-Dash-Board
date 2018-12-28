import React from 'react';
import CardList from './CardList';
import {nbaPlayers} from './nbaPlayers';
import SearchBox from './SearchBox';

const App = () => {



   return (
      <div class = 'tc'>
         <h1>NBA Dash Board</h1>
         <SearchBox/>
         <CardList nbaPlayers = {nbaPlayers}/>
      </div>
   )
}

export default App;
