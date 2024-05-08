import "./listitem.scss";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";

import React, { useState } from "react";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://youtu.be/73_1biulkYk";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://communist.red/wp-content/uploads/2022/08/godfather.png.webp"
        alt=""
      />
      {isHovered && (
        <>
          <iframe
            width="1903"
            height="750"
            src="https://www.youtube.com/embed/73_1biulkYk?autoplay=1&loop=1"
            title="Deadpool & Wolverine | Official Trailer | In Theaters July 26"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="itemInfo">
            <div className="icons">
              <PlayCircleFilledRoundedIcon className="icon" />
              <AddRoundedIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOffAltOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="ageLimit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              optio, aut beatae sunt corporis
            </div>
            <div className="genre">Action</div>
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default ListItem;
