import React from "react";

const ImageOpener = ({ params }) => {
  console.log(params, "<<<===params");
  return (
    <div>
      <img src={`/images/news/beaver.jpg`} />
    </div>
  );
};

export default ImageOpener;
