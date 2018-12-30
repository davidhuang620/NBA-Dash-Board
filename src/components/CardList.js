import React from 'react';
import Card from './Card';
// import {nbaPlayers} from './nbaPlayers';

const CardList = ({nbaPlayers}) => {



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
