"use client";
import React, { useState } from "react";

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email, anime_image, anime_title };
    try {
      const response = await fetch("/api/v1/collection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const collection = await response.json();
      console.log({ collection });
      if (collection.status == 200) {
        setIsCreated(collection.isCreated);
      }
      return;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {isCreated ? (
        <p className="text-color-accent">Success Added to Collections</p>
      ) : (
        <button
          onClick={handleCollection}
          className="px-2 py-1 bg-color-accent rounded"
        >
          Add to Collections
        </button>
      )}
    </>
  );
};

export default CollectionButton;
