import "./featured.scss";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import React from "react";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="western">Western</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
            <option value="thriller">Thriller</option>
            <option value="animation">Animation</option>
          </select>
        </div>
      )}
      <img
        width="100%"
        src="https://images.unsplash.com/photo-1714399611409-20ca201954d7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
        alt=""
      />
      <div className="info">
        <img
          src="https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          rem placeat, quisquam nostrum iure distinctio perspiciatis voluptate
          reprehenderit officiis iste culpa quaerat in maiores similique sed!
          Hic aspernatur quia sapiente?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayCircleIcon />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            <span>Information</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
