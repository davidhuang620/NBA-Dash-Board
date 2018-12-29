import React, {Component} from 'react';
import CardList from './CardList';
import {nbaPlayers} from './nbaPlayers';
import SearchBox from './SearchBox';
import './App.css';


class App extends Component {

   constructor(){
      super();
      this.state = {
         nbaPlayers: nbaPlayers,
         searchField: ''
      }
   }

   OnSearchChange = (event) => {
      this.setState({searchField: event.target.value});
      // console.log(this.state.searchField);

   }


   render(){

      const searchResult = this.state.nbaPlayers.filter(
         obj => {
            return (
               obj.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            )
         }
      )


      return (
         <div className = 'tc'>
            <h1 className = 'f1'>NBA Dash Board</h1>
            <SearchBox SearchChange = {this.OnSearchChange}/>
            <CardList nbaPlayers = {searchResult}/>
         </div>
      )
   };

}

export default App;
