import React from "react";

const AdjustProjectList = (props) => {
  return (
    <>
      <div className={props.containerClass}>
        <div onClick={props.onClick} className={props.boxClass} tabIndex="1">
          {props.listOne}
          <img
            className={props.iconClass}
            src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
            alt="Arrow Icon"
            aria-hidden="true"
          />
        </div>
        <ul className={props.selectListClass}>
          <div className={props.listContainerClass}>{props.listTwo}</div>
        </ul>
      </div>
    </>
  );
};

export default AdjustProjectList;
