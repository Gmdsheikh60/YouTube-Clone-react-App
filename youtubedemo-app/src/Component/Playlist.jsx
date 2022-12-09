import useFetch from "../Hooks/useFetch";
import "bootstrap/dist/css/bootstrap.min.css";
import Playlistcard from "../Layout/Playlistcard";

const Playlist = (props) => {
  const endpointUrl =
    "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCT_8FqzTIr2Q1BOtvX_DPPw&maxResults=25";

  const options = {
    method: "GET",
    headers: props.headerParameters,
  };
  const optionsStr = JSON.stringify(options);
  const { data, responseStatus } = useFetch(endpointUrl, optionsStr);

  if (data === null) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{
          paddingTop: "25%",
        }}
      >
        <div
          className="spinner-border"
          style={{ width: "5rem", height: "5rem" }}
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
          paddingTop: "25%",
        }}
      >
        {" "}
        <p>
          Something went wrong, please update the access token and try again!
        </p>
      </div>
    );
  } else {
    const tempResponse = data;
    const playlistData = tempResponse.items.map((playlist) => {
      return <Playlistcard playlistDetail={playlist} />;
    });

    return (
      <div className="container">
        <div>
          <h1>Playlists</h1>
        </div>
        <hr />

        <div className="py-5">
          <div className="row flex-row">{playlistData}</div>
        </div>
      </div>
    );
  }
};

export default Playlist;
