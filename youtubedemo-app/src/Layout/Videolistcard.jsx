import { useNavigate } from "react-router-dom";

const Videolistcard = (props) => {
  const navigate = useNavigate();
  const video = props.videoDetail;
  const navigateToVideoPlayer = () => {
    console.log("here");
    navigate("/Videoplayer", { state: { id: video.id } });
  };
  return (
    <div className="card" style={{ width: "12rem;", marginBottom: "1rem" }}>
      <div>
        <iframe
          title="videos"
          className="embed-responsive-item"
          src={"https://www.youtube.com/embed/" + video.id}
          allowFullScreen="allowfullscreen"
          style={{ margin: "0", width: "100%" }}
        ></iframe>
      </div>
      <div
        className="card-body"
        style={{ cursor: "pointer" }}
        onClick={navigateToVideoPlayer}
      >
        <h5 className="card-title">{video.snippet.title}</h5>
        <p className="card-text">Channel: {video.snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default Videolistcard;
