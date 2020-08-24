import React, { useState, useEffect } from "react";

const Caption = ({ selected, name, desc }) => (
  <div
    style={
      selected
          ? { 
              height: '101%',
              width: '100%',
              left: "0px", 
              top: "0px", 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              display: 'table',
              position: "absolute", 
              zIndex: "1", 
              overflow: 'hidden',
              pointerEvents: "none" 
      }
        : { display: "none" }
    }
  >
        <div style={captionContent}>
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
  </div>
);

const imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const selectedImgStyle = {
  transform: "translateZ(0px) scale3d(1.2, 1.2, 1)",
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};

const SelectedImage = ({
  index,
  photo,
  margin,
  direction,
  top,
  left,
  selected,
  project
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  const handleOnHover = e => {
    setIsSelected(true);
};

  const handleOffHover = e => {
    setIsSelected(false);
  };

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);
  return (
    <div
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
      className={!isSelected ? "not-selected" : ""}
    >
      <Caption name={photo.name} desc={photo.desc} selected={isSelected ? true : false} />
      <img
        alt={photo.title}
        style={
          isSelected ? { ...imgStyle, ...selectedImgStyle } : { ...imgStyle }
        }
        {...photo}
        onMouseOver={handleOnHover}
        onMouseLeave={handleOffHover}
      />
    </div>
  );
}

const captionContent = {
    height: '100%',
    width: '90%',
    textAlign: 'center',
    transform: 'translateY(50%)',
    fontFamily: 'monospace'
}

export default SelectedImage;

