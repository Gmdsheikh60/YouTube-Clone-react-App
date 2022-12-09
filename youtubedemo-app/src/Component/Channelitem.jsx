import { useLocation } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import Playlistcard from '../Layout/Playlistcard';

const Channelitem = (props) => {
  const { state } = useLocation();
  const { id } = state;
  const endpointUrl = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${id}&maxResults=25`;

  const options = {
    method: 'GET',
    headers: props.headerParameters,
  };
  const optionsStr = JSON.stringify(options);
  const { data, responseStatus } = useFetch(endpointUrl, optionsStr);

  if (data === null) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{
          paddingTop: '25%',
        }}
      >
        <div
          className="spinner-border"
          style={{ width: '5rem', height: '5rem' }}
          role="status"
        >
          <div className="visually-hidden ">Loading...</div>
        </div>
      </div>
    );
  }
  if (!(responseStatus === 200 || responseStatus === 0)) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{
          paddingTop: '25%',
        }}
      >
        <p>
          Something went wrong, please update the access token and try again!
        </p>
      </div>
    );
  }
  const tempResponse = data;
  const channelPlaylistData = tempResponse.items.map((channelPlaylist) => {
    return <Playlistcard playlistDetail={channelPlaylist} />;
  });

  return (
    <div className="container">
      <div>
        <h1>
          {tempResponse.items[0].snippet.channelTitle}
          Playlist
        </h1>
      </div>
      <hr />
      <div className="py-5">
        <div className="row flex-row">{channelPlaylistData}</div>
      </div>
    </div>
  );
};

export default Channelitem;
