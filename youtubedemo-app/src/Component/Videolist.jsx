import useFetch from "../Hooks/useFetch";
import Videolistcard from "../Layout/Videolistcard";
const Videolist = (props) => {
  const endpointUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,player&chart=mostPopular&maxResults=25`;
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
    const videoListData = data;
    const videoData = videoListData.items.map((video) => {
      return <Videolistcard videoDetail={video} />;
    });

    return (
      <div className="container">
        <hr />
        <div className="py-5">
          <div className="d-flex-row-reverse">{videoData}</div>
        </div>
      </div>
    );
  }
};

export default Videolist;
