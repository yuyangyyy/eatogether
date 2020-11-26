import React from "react";

import "./Video.css";

class Video extends React.Component {
  render() {
    return <div className="video-prez" > 
        <iframe  src="https://www.youtube.com/embed/Xv8biKSDN5Y" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>;
  }
}

export default Video;
