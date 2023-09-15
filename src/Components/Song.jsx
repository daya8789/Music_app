import { useState } from "react";

export const Song = ({fn, song }) => {
  console.log("Song sssss");

  const [playerFlag, setPlayerFlag] = useState(false);
  const showPlayer = () =>{
    fn(true, song);
  }
  
  return (
    <div className="row">
        <div className="col-3">
            <img src={song.artworkUrl100}/>
        </div>
        <div className="col-6">
            {song.artistName} {song.trackName}
        </div>
        <div className="col-3">
            <button onClick={showPlayer}>Play Song</button>
        </div>
    </div>
  );
};
