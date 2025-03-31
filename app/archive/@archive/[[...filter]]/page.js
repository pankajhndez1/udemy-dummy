import Image from "next/image";
import Link from "next/link";
import React from "react";


const FilterArchive = () => {
    const imageName = "beaver.jpg";
  return (
    <div>
      <div>FilterArchive</div>
      <Link href={`news/${imageName}`}>
        <Image src={`/images/news/${imageName}`} height={100} width={100} />
      </Link>
    </div>
  );
};

export default FilterArchive;
