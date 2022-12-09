
const Videocomment = (props) => {
  const videoId = props.videoID;
 
  const endpointUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet`;

  let options = {
    method: "POST",
    headers: props.headerParameters,
    body: '',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bodyParameters = JSON.stringify({
      snippet: {
        topLevelComment: {
          snippet: {
            textOriginal: `${e.target[0].value}`,
            videoId: `${videoId}`,
          },
        },
      },
    });
    options.body = bodyParameters;
    try {
      const response = await fetch(endpointUrl, options);
      if (response.ok) {
        props.Filter(e.target[0].value);
      }
      
    } catch (e) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="floatingInputGrid"
                placeholder="Comment"
                style={{ height: '3em' }}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-danger">
                Comment
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Videocomment;
