import React from "react";

function MainHeading({ title }: { title: string }) {
  return (
    <>
      <h3 className="text-2xl font-semibold my-5 ">{title}</h3>
    </>
  );
}

export default MainHeading;
