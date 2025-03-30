import Link from "next/link";
import React from "react";


const ImageOpener = () => {
  const imageName = "beaver.jpg";
  return (
    <Link href={`archive/${imageName}/image`}>
      <img src={`/images/news/${imageName}`} />
    </Link>
  );
};

export default ImageOpener;
