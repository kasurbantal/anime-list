"use client";
import React from "react";

const CollectionButton = ({ anime_mal_id, user_email }) => {
  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email };
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
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <button
      onClick={handleCollection}
      className="px-2 py-1 bg-color-accent rounded"
    >
      Add to Collections
    </button>
  );
};

export default CollectionButton;
