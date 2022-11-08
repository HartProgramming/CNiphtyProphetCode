import React from "react";

const TableRow = (props) => {
  return (
    <tr className={props.className}>
      <td className={props.titleClass}>{props.title}</td>
        <td className={props.freeClass}>{props.free}</td>
        <td className={props.monthlyClass}>{props.monthly}</td>
        <td className={props.yearlyClass}>{props.yearly}</td>
        <td className={props.lifeClass}>{props.life}</td>
    </tr>
  );
};

export default TableRow;
