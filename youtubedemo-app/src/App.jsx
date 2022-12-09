import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Videoplayer from './Component/Videoplayer';
import Playlist from './Component/Playlist';
import Playlistitem from './Component/Playlistitem';
import Channel from './Component/Channel';
import Channelitem from './Component/Channelitem';
import Search from './Component/Search';

function App() {
  const headerParameters = {
    Authorization:
      'Bearer ',
    Accept: 'application/json',
  };

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home headerParameters={headerParameters} />}
          />
          <Route
            path="/Videoplayer"
            element={<Videoplayer headerParameters={headerParameters} />}
          />
          <Route
            path="/Playlist"
            element={<Playlist headerParameters={headerParameters} />}
          />
          <Route
            path="/Playlistitem"
            element={<Playlistitem headerParameters={headerParameters} />}
          />
          <Route
            path="/Channel"
            element={<Channel headerParameters={headerParameters} />}
          />
          <Route
            path="/Channelitem"
            element={<Channelitem headerParameters={headerParameters} />}
          />
          <Route
            path="/Search"
            element={<Search headerParameters={headerParameters} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
