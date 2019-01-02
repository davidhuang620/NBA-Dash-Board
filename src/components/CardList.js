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
                  firstName={val.firstName}
                  lastName={val.lastName}
                  // team={val.team}
                  // rank={val.rank}
               />);
         })
      }

   </div>);

}

export default CardList;
