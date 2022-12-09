import { useNavigate } from "react-router-dom";
const Searchvideocard = (props) => {
  const navigate = useNavigate();
  const video = props.videoDetail;
  const navigateToVideoPlayer = () => {
    navigate("/Videoplayer", { state: { id: video.id.videoId } });
  };
  return (
    <div className="col-md-3" style={{ marginBottom: "2rem" }}>
      <div className="card" style={{ width: "18rem;" }}>
        <div onClick={navigateToVideoPlayer}>
          <iframe
            title="videos"
            className="embed-responsive-item"
            src={"https://www.youtube.com/embed/" + video.id.videoId}
            allowFullScreen="allowfullscreen"
          ></iframe>
          <div
            className="card-body"
            style={{ cursor: "pointer", height: "140px" }}
          >
            <h5 className="card-title">{video.snippet.title}</h5>
            <p className="card-text">Channel: {video.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchvideocard;
