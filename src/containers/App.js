import React, {Component} from 'react';
import CardList from '../components/CardList';
import {nbaPlayers} from '../components/nbaPlayers';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component {

   constructor(){
      super();
      this.state = {
         nbaPlayers: nbaPlayers,
         searchField: ''
      }
   }

   // componentDidMount(){
   //    fetch('https://jsonplaceholder.typicode.com/users')
   //    .then(response => response.json())
   //    .then(users => {this.setState({nbaPlayers: users})})
   // }

   OnSearchChange = (event) => {
      this.setState({searchField: event.target.value});
      // console.log(this.state.searchField);

   }


   render(){
      const {nbaPlayers, searchField} = this.state;
      const searchResult = nbaPlayers.filter(
         obj => {
            return (
               obj.name.toLowerCase().includes(searchField.toLowerCase())
            )
         }
      )

      return (nbaPlayers.length === 0)
      ? (<h1 className ='tc'> LOADING </h1>)
      :
      (
         <div className = 'tc'>
            <h1 className = 'f1'>NBA Dash Board</h1>
            <SearchBox SearchChange = {this.OnSearchChange}/>
            <Scroll>
               <CardList nbaPlayers = {searchResult}/>
            </Scroll>
         </div>
      )
   

   };

}

export default App;
