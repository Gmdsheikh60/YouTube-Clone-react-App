import { useState } from 'react';
import useFetchComment from '../Hooks/useFetchComment';
import Videocomment from './Videocomment';

const Videocommentlist = (props) => {

  const videoId = props.videoId;
  const [trigger, setTrigger] = useState(true);
  const endpointUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}`;
  const Filter = async () => {
    const newTrigger = !trigger;
    setTrigger(newTrigger);
  };
  const options = {
    method: 'GET',
    headers: props.headerParameters,
  };
  const optionsStr = JSON.stringify(options);
  const { data, responseStatus } = useFetchComment(endpointUrl, optionsStr,trigger);
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
  const commentsObj = data;
  const commentsData = commentsObj.items
    .slice(
      0,
      commentsObj.items.length > 10 ? 10 : commentsObj.items.length - 1
    )
    .reverse()
    .map((comments) => {
      return (
        <div className="at accordion-body">
            <strong>
              {comments.snippet.topLevelComment.snippet.authorDisplayName}:
            </strong>
            {comments.snippet.topLevelComment.snippet.textOriginal}
         <hr/> 
        </div>
      );
    });
  return (
    <div className="container">
      <hr />

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Comments
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <ul>
              <div className="row flex-row">{commentsData}</div>
            </ul>
            <Videocomment
              headerParameters={props.headerParameters}
              videoID={videoId}
              Filter={Filter}
            />
          </div>
        </div>
        <div className="container">
          <div>
            <ul className="list-group list-group-flush">{}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videocommentlist;
