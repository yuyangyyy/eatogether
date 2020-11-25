import React from "react";
import "./Video.css";

class Video extends React.Component {
  render() {
    return <div className="video-prez" > 
        <iframe width="960" height="515" src="https://www.youtube.com/embed/r-LfxffnKWU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>;
  }
}

export default Video;
