import useFetch from '../Hooks/useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Videocard from '../Layout/Videocard';

const Home = (props) => {
  const endpointUrl = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet,player&chart=mostPopular&maxResults=25';

  const options = {
    method: 'GET',
    headers: props.headerParameters,
  };
  const optionsStr = JSON.stringify(options);
  const { data, responseStatus } = useFetch(endpointUrl, optionsStr);

  if (data === null) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{
          paddingTop: '25%',
        }}
      >
        <div
          className="spinner-border"
          style={{ width: '5rem', height: '5rem' }}
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
          paddingTop: '25%',
        }}
      >
        <p>
          Something went wrong, please update the access token and try again!
        </p>
      </div>
    );
  }
  const tempResponse = data;
  const videoData = tempResponse.items.map((video) => { return <Videocard videoDetail={video} />; });

  return (
    <div className="container">
      <div>
        <h1>Home</h1>
      </div>
      <hr />
      <div className="py-5">
        <div className="row flex-row">{videoData}</div>
      </div>
    </div>
  );
};

export default Home;
