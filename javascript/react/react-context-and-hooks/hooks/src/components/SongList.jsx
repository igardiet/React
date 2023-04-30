import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'song one', id: 1 },
    { title: 'song two', id: 2 },
    { title: 'song three', id: 3 },
  ]);
  const addSong = () => {
    setSongs([...songs, { title: 'new song', id: uuidv4() }]);
  };
  return (
    <div className='song-list'>
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSong}>Add song!</button>
    </div>
  );
};
