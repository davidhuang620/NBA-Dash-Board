import React from 'react';

const Card = ({name, team, rank}) => {
   // const {name, team} = props;
   return (
      <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
         <img alt='robotPhotos' src={`https://robohash.org/${name}?200x200`} />
         <div>
            <h2>{name}</h2>
            <p> rank {rank}
                team {team}  </p>
         </div>
      </div>
   )
}

export default Card;
