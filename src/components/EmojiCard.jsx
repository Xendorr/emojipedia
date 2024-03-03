import React from "react";

const EmojiCard = ({ emoji, name, description }) => {
  return (
    <>
      <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {emoji}
          </span>
          <span className="name">{name}</span>
        </dt>
        <dd>{description}</dd>
      </div>
    </>
  );
};

export default EmojiCard;
