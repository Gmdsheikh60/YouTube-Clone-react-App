import { useNavigate } from "react-router-dom";
const Videocard = (props) => {
  const navigate = useNavigate();
  const video = props.videoDetail;
  const navigateToVideoPlayer = () => {
    navigate("/Videoplayer", { state: { id: video.id } });
  };
  return (
    <div className="col-md-3" style={{ marginBottom: "2rem" }}>
      <div className="card" style={{ width: "18rem;" }}>
        <div onClick={navigateToVideoPlayer}>
          <iframe
            title="videos"
            className="embed-responsive-item"
            src={"https://www.youtube.com/embed/" + video.id}
            allowFullScreen="allowfullscreen"
          ></iframe>
          <div
            className="card-body"
            style={{ height: "140px", cursor: "pointer" }}
          >
            <h5 className="card-title">{video.snippet.title}</h5>
            <p className="card-text">Channel: {video.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videocard;
