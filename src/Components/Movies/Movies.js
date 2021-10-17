import React from "react";

const Movies = ({ movie, title ,poster_path}) => {
  return (
    <div class="card card-design shadow-sm mb-2 mt-3">
      <div className="card-body">
         
        <h3 className="card-title p-2">{title}</h3>
      </div>
    </div>
  );
};

export default Movies;