import React, {Component} from 'react';
import CardList from '../components/CardList';
// import {nbaPlayers} from '../components/nbaPlayers';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component {

   constructor(){
      super();
      this.state = {
         nbaPlayers: [],
         searchField: ''
      }
   }


   // componentDidMount(){
   //    fetch('https://jsonplaceholder.typicode.com/users')
   //    .then(response => response.json())
   //    .then(users => console.log(users))
   //    .then(users => {this.setState({nbaPlayers: users})})
   // }


   // unirest.get("https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/{playerid}")
   // .header("X-RapidAPI-Key", "eef1cf18famsh17f37a5a9fe4a69p1aa3d9jsn9dae8fd81353")
   // .end(function (result) {
   //   console.log(result.status, result.headers, result.body);
   // });


   // componentDidMount(){
   //    fetch('https://data.nba.net/10s/prod/v1/2018/players.json')
   //    .then(resp => console.log(resp))
   //    // .then(response => response.json())
   //    // .then(users => console.log(users))
   //    .catch(console.log('OOPS! Error'))
   //    // .then(users => {this.setState({nbaPlayers: users})})
   // }
   //




//
// componentDidMount(){
//    // fetch('http://data.nba.net/prod/v1/20170201/0021600732_boxscore.json', {mode: 'no-cors'})
//    fetch("http://stats.nba.com/stats/scoreboard/?GameDate=02/14/2015&LeagueID=00&DayOffset=0",
//    {headers: {
//             "Access-Control-Allow-Origin": "*"
//             // "Content-Type": "text/plain"
//         }}
//    )
//    // .then(resp => console.log(resp))
//    // .then(response => response.json())
//    .then(users => console.log(users))
//    // .then(users => {this.setState({nbaPlayers: users})})
//    .catch(console.log('OOPS! Error'))
//    // .then(users => {this.setState({nbaPlayers: users})})
// }
//


   componentDidMount(){
      fetch('https://data.nba.net/10s/prod/v1/2016/players.json')
      .then(response => response.json())
      .then(users => {this.setState({nbaPlayers: users.league.standard})})
      .catch(() => console.log('OOPS! Error'))
   }






   OnSearchChange = (event) => {
      this.setState({searchField: event.target.value});
      // console.log(this.state.searchField);

   }


   render(){
      const {nbaPlayers, searchField} = this.state;
      const searchResult = nbaPlayers.filter(
         obj => {
            return (
               obj.firstName.toLowerCase().includes(searchField.toLowerCase())
            )
         }
      )

      return (nbaPlayers.length === 1)
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
