import React from 'react';

const Card = ({firstName, lastName, team, rank}) => {
   // const {name, team} = props;
   return (
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
         <img alt='robotPhotos' src={`https://robohash.org/${firstName}${lastName}?200x200`} />
         <div>
            <h2>{firstName} {lastName}</h2>
            <p> rank {rank}
                team {team}  </p>
         </div>
      </div>
   )
}

export default Card;
