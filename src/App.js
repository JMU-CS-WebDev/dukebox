import './App.css';
import { useState } from 'react';
import { Albums } from './Albums';

const initialState = {
  artists: [
    'The Album Leaf',
    'Balmorhea',
    'Library Tapes',
    'Nils Frahm',
    'Ólafur Arnalds',
  ],

  // These a Balmorhea's albums...
  albums: [
    'Balmorhea',
    'Rivers Arms',
    'All Is Wild, All Is Silent',
    'Constellations',
    'Stranger',
    'Clear Language',
    'The Wind',
  ],

  // These are the tracks of Rivers Arms...
  tracks: [
    'San Solomon',
    'Lament',
    'The Summer',
    'The Winter',
    'Greyish Tapering Ash',
    'Baleen Morning',
    'Barefoot Pilgrims',
    'Context',
    'Process',
    'Divisadero',
    'Limmat',
    'Theme No. 1',
    'Windansea',
    'San Solomon (Reprise)',
  ],
};

function App() {
  const albums = useState(initialState);

  return (
    <div className="App">
      {
        albums.map(album =>
          <Albums
            album={album}
          />
        )
      }
    </div>
  );
}

export default App;