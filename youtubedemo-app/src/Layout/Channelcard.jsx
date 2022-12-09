import { useNavigate } from "react-router-dom";
const Channelcard = (props) => {
  const channel = props.channelDetail;
  const navigate = useNavigate();
  const navigateToChannelItem = () => {
    navigate("/Channelitem", { state: { id: channel.id } });
  };

  return (
    <div className="col-md-3">
      <div className="card" style={{ width: "24rem;" }}>
        <div onClick={navigateToChannelItem}>
          <img
            src={channel.snippet.thumbnails.medium.url}
            className="card-img-top"
            alt="..."
          />
          <div
            className="card-body"
            style={{ cursor: "pointer", height: "140px" }}
          >
            <h5 className="card-title">{channel.snippet.title}</h5>
            <p className="card-text">Channel: {channel.snippet.channelTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channelcard;
