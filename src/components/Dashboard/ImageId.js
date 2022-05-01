import React from "react";

const ImageId = (props) => {
  const { img1, img2, img3, img4 } = props.item;
  return (
    <>
      <div className="col-3">
        <img className="img-fluid p-3" src={img1} alt="img1" />
      </div>
      <div className="col-3">
        <img className="img-fluid p-3" src={img2} alt="img2" />
      </div>
      <div className="col-3">
        <img className="img-fluid p-3 " src={img3} alt="img3" />
      </div>
      <div className="col-3">
        <img className="img-fluid p-3" src={img4} alt="img4" />
      </div>
    </>
  );
};

export default ImageId;
