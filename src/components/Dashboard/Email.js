import React, { useEffect, useState } from "react";
import ImageId from "./ImageId";

const Email = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("https://tryst-rubel-sarver-azure.vercel.app/image")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          {item.map((id) => (
            <ImageId item={id} key={id.img1}></ImageId>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Email;
