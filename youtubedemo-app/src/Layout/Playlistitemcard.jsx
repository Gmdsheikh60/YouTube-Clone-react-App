import { useNavigate } from "react-router-dom";
const Playlistitemcard = (props) => {
  const navigate = useNavigate();
  const playlisitemData = props.playlisitemDetail;
  const navigateToVideoPlayer = () => {
    navigate("/Videoplayer", {
      state: { id: playlisitemData.snippet.resourceId.videoId },
    });
  };
  return (
    <div className="col-md-3" style={{ marginBottom: "2rem" }}>
      <div className="card" style={{ width: "18rem;" }}>
        <div onClick={navigateToVideoPlayer}>
          <iframe
            title="videos"
            className="embed-responsive-item"
            src={
              "https://www.youtube.com/embed/" +
              playlisitemData.snippet.resourceId.videoId
            }
            allowFullScreen="allowfullscreen"
          ></iframe>
          <div
            className="card-body"
            style={{ cursor: "pointer", height: "140px" }}
          >
            <h5 className="card-title">{playlisitemData.snippet.title}</h5>
            <p className="card-text">
              Channel: {playlisitemData.snippet.channelTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlistitemcard;
