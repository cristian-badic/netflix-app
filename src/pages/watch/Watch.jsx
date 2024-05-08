import "./watch.scss";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIosNewOutlinedIcon />
        Home
      </div>
      <iframe
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4?autoplay=0"
        title="Deadpool & Wolverine | Official Trailer | In Theaters July 26"
        className="video"
        // controls
        // autoplay
        // muted
        // allow="autoplay"
      ></iframe>
    </div>
  );
};

export default Watch;
