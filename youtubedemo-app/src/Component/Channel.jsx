import useFetch from "../Hooks/useFetch";
import Channelcard from "../Layout/Channelcard";

const Channel = (props) => {
  const endpointUrl =
    "https://www.googleapis.com/youtube/v3/channels?part=snippet&mine=true";

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
        <p>
          Something went wrong, please update the access token and try again!
        </p>
      </div>
    );
  }
  const tempResponse = data;
  const channelData = tempResponse.items.map((channel) => {
    return <Channelcard channelDetail={channel} />;
  });

  return (
    <div className="container">
      <div>
        <h1>Channels</h1>
      </div>
      <hr />
      <div className="py-5">
        <div className="row flex-row">{channelData}</div>
      </div>
    </div>
  );
};
export default Channel;
