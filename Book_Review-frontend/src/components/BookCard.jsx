import React from "react";

const BookCard = ({ele,i}) => {
  return (
    <div key={i}>
      <h1>Tittle : {ele.title}</h1>
      <p>Author : {ele.author} </p>
      <p>Year : {ele.year} </p>
      <p>Rating : {ele.Rating} </p>
    </div>
  );
};

export default BookCard;
