import useFetch from "../Hooks/useFetch";
import "bootstrap/dist/css/bootstrap.min.css";
import Videolist from "./Videolist";
import { useLocation } from "react-router-dom";
import Videocommentlist from "./Videocommentlist";
const Videoplayer = (props) => {
  let { state } = useLocation();
  let { id } = state;
  const endpointUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,player&id=${id}`;
  const options = {
    method: "GET",
    headers: props.headerParameters,
  };
  console.log(props.headerParameters);
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
    const videoData = tempResponse.items.map((video) => {
      return (
        <div
          className="flex-container"
          style={{ display: "flex", width: "100%" }}
        >
          <div
            className="container"
            style={{ width: "70%", marginTop: "5rem" }}
          >
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="videos"
                className="embed-responsive-item"
                src={"https://www.youtube.com/embed/" + video.id}
                allowFullScreen="allowfullscreen"
              ></iframe>
            </div>
            <div>
              <Videocommentlist
                headerParameters={props.headerParameters}
                videoId={video.id}
              />
            </div>
          </div>

          <div style={{ width: "30%" }}>
            <Videolist headerParameters={props.headerParameters} />
          </div>
        </div>
      );
    });

    return <div>{videoData}</div>;
  }
};

export default Videoplayer;
