import { useNavigate } from "react-router-dom";
const Playlistcard = (props) => {
  const playlist = props.playlistDetail;
  const navigate = useNavigate();
  const navigateToPlaylistItem = () => {
    navigate("/Playlistitem", { state: { id: playlist.id } });
  };

  return (
    <div className="col-md-3" style={{ marginBottom: "2rem" }}>
      <div className="card" style={{ width: "18rem;" }}>
        <div onClick={navigateToPlaylistItem}>
          <img
            src={playlist.snippet.thumbnails.high.url}
            className="card-img-top"
            alt="..."
          />
          <div class="card-body" style={{ cursor: "pointer", height: "140px" }}>
            <h5 className="card-title">{playlist.snippet.title}</h5>
            <p className="card-text">
              Channel: {playlist.snippet.channelTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlistcard;
