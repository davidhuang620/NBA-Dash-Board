import React from 'react';
import Card from './Card';
// import {nbaPlayers} from './nbaPlayers';

const CardList = ({nbaPlayers}) => {

   // const cardArray = nbaPlayers.map((val, ind) => {
   //    return (
   //       <Card
   //          key = {ind}
   //          rank={val.rank}
   //          name={val.name}
   //          team={val.team}
   //       />);
   // });

   return (<div>

      {
         nbaPlayers.map((val, ind) => {
            return (
               <Card
                  key = {ind}
                  rank={val.rank}
                  name={val.name}
                  team={val.team}
               />);
         })
      }

   </div>);

}

export default CardList;
