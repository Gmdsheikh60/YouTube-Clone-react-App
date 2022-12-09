import useFetch from "../Hooks/useFetch";
import "bootstrap/dist/css/bootstrap.min.css";
import Playlistitemcard from "../Layout/Playlistitemcard";
import { useLocation } from "react-router-dom";

const Playlistitems = (props) => {
  let { state } = useLocation();
  let { id } = state;
  const endpointUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}`;
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
    const videoData = tempResponse.items.map((playlistitem) => {
      return <Playlistitemcard playlisitemDetail={playlistitem} />;
    });

    return (
      <div className="container">
        <div>
          <h1>Playlist Videos</h1>
        </div>
        <hr />
        <div className="py-5">
          <div className="row flex-row">{videoData}</div>
        </div>
      </div>
    );
  }
};

export default Playlistitems;
