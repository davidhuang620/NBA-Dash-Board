import React, {Component} from 'react';
import CardList from './CardList';
import {nbaPlayers} from './nbaPlayers';
import SearchBox from './SearchBox';



class App extends Component {

   constructor(){
      super();
      this.state = {
         nbaPlayers: nbaPlayers,
         searchField: ''
      }
   }

   OnSearchChange = (event) => {
      console.log(event);
   }

   render(){
      return (
         <div className = 'tc'>
            <h1>NBA Dash Board</h1>
            <SearchBox onSearchChange = {this.OnSearchChange}/>
            <CardList nbaPlayers = {this.state.nbaPlayers}/>
         </div>
      )
   };

}

export default App;
