import React from "react";
import extremeOwnershipImage from "../../assets/FavoriteBooks/extremeOwnership.jpg";

const favoriteBooks = [
  {
    title: "Extreme Ownership: How U.S. Navy SEALs Lead and Win",
    imageUrl: extremeOwnershipImage,
  },
];

export default function FavoriteBooks() {
  return (
    <div>
      {favoriteBooks.map((book, index) => (
        <div key={index}>
          <div>{book.title}</div>
          <img style={{ width: "300px" }} src={book.imageUrl} />
        </div>
      ))}
    </div>
  );
}
