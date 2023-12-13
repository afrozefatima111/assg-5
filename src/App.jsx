import React from 'react';
import Entry from './Entry'; // Import the Entry component
import emojipedia from './emojipedia'; // Import your emoji data

function App() {
  // Map through the emojipedia array and render Entry components
  const emojiEntries = emojipedia.map((emoji) => (
    <Entry
      key={emoji.id} // Make sure to set a unique key for each Entry component
      emoji={emoji.emoji}
      name={emoji.name}
      description={emoji.description}
    />
  ));

  return (
    <div>
      {emojiEntries}
    </div>
  );
}

export default App;
