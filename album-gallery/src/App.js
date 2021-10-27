import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AddAlbum from "./components/Albums/AddAlbum";
import Albums from "./components/Albums/Albums";
import albumList from "./components/Albums/AlbumData";
import Navbar from "./components/Navbar";
import Songs from "./components/Songs/Songs";
import CreatePlaylist from "./components/Library/CreatePlaylist";
import playlistItems from "./components/Library/PlaylistData";
import Library from "./components/Library/Library";
import PlaylistOne from "./components/Library/PlaylistOne";

class App extends Component {
  state = {
    albums: albumList,
    searchList: [],
    playlists: playlistItems,
  };

  addAlbum = (albumItem) => {
    const newAlbumList = [albumItem, ...this.state.albums];
    return this.setState({ albums: newAlbumList });
  };

  removeAlbum = (id) => {
    const removeArr = [...this.state.albums].filter((albumItem) => {
      return albumItem.id !== id;
    });
    this.setState({ albums: removeArr });
  };

  searchAlbum = (searchText) => {
    const searchAlbum = [...this.state.albums].find((albumListItem) =>
      albumListItem.album === searchText || albumListItem.artist === searchText
        ? albumListItem
        : ""
    );
    this.setState({ searchList: searchAlbum });
  };

  addPlaylist = (playlistItem) => {
    const newPlayList = [playlistItem, ...this.state.playlists];
    return this.setState({ playlists: newPlayList });
  };

  removePlaylist = (id) => {
    const removeArr = [...this.state.playlists].filter((pl) => {
      return pl.id !== id;
    });
    this.setState({ playlists: removeArr });
  };
  render() {
    return (
      <>
        <Router>
          <Navbar
            onSearch={this.searchAlbum}
            searchLists={this.state.searchList}
            removeAlbum={this.removeAlbum}
          />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/addalbum">
              <div className="container">
                <div className="header">
                  <AddAlbum onAdd={this.addAlbum} albums={this.state.albums} />
                </div>
              </div>
            </Route>
            <Route exact path="/albums">
              <div className="container">
                <div className="albums">
                  <div className="albums-box">
                    <h1 className="albums-heading">Albums</h1>
                    <div className="album_item">
                      <Albums
                        albums={this.state.albums}
                        removeAlbum={this.removeAlbum}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Route>
            <Route exact path="/albums/:id">
              <Songs albums={this.state.albums} />
            </Route>
            <Route exact path="/library">
              <Library
                playlists={this.state.playlists}
                onRemovePlaylist={this.removePlaylist}
              />
            </Route>
            <Route exact path="/library/:id">
              <PlaylistOne playlists={this.state.playlists} />
            </Route>
            <Route exact path="/createPlaylist">
              <CreatePlaylist
                onCreate={this.addPlaylist}
                playlists={this.state.playlists}
              />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
export default App;
