import React from "react";
import Playlists from "./Playlists";

const Library = ({ playlists, onRemovePlaylist }) => {
  return (
    <div className="playlistsItem">
      <Playlists
        playlistItems={playlists}
        onDeletePlaylist={onRemovePlaylist}
      />
    </div>
  );
};

export default Library;
