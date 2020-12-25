import React from "react";

export default function AmazonImage({ aLink, nestedImageSrc, bottomImageSrc }) {
  return (
    <>
      <a target="_blank" rel="noreferrer" href={aLink}>
        <img border="0" alt="" src={nestedImageSrc} />
      </a>
      <img
        src={bottomImageSrc}
        style={{ border: "none !important", margin: "0px !important" }}
        width="1"
        height="1"
        border="0"
        alt=""
      />
    </>
  );
}
