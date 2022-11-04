import React from "react";
import Button from "../UI/Button";
import Loading from "../UI/Loading";
import Card from "../UI/Card";
import TableRow from "./TableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan } from "@fortawesome/free-solid-svg-icons";
import classes from "./Plans.module.css";

const Plans = () => {
  const check = <FontAwesomeIcon icon={faCheck} />;
  const dash = <FontAwesomeIcon icon={faBan} />;

  return (
    <Card className={classes.container}>
      <table className={classes.table}>
        <tr>
          <th className={classes.headerclass}>Features</th>
          <th className={classes.headerclass}>Free</th>
          <th className={classes.headerclass}>Monthly</th>
          <th className={classes.headerclass}>Yearly</th>
          <th className={classes.headerclass}>Lifetime</th>
        </tr>
        <TableRow
          className={classes.row}
          titleClass={classes.titleclass}
          title={"CNFT Data"}
          free={check}
          monthly={check}
          yearly={check}
          life={check}
        />
        <TableRow
          className={classes.row}
          titleClass={classes.titleclass}
          title={"Crypto Data"}
          free={check}
          monthly={check}
          yearly={check}
          life={check}
        />
        <TableRow
          className={classes.row}
          titleClass={classes.titleclass}
          title={"Borrow Assistance"}
          free={check}
          monthly={check}
          yearly={check}
          life={check}
        />
        <TableRow
          className={classes.row}
          titleClass={classes.titleclass}
          title={"Lend Assistance"}
          free={check}
          monthly={check}
          yearly={check}
          life={check}
        />
        <TableRow
          className={classes.row}
          titleClass={classes.titleclass}
          title={"Crypto Trade"}
          free={dash}
          monthly={check}
          yearly={check}
          life={check}
        />
        <TableRow
          className={classes.row}
          titleClass={classes.titleclass}
          title={"NFT Trade"}
          free={dash}
          monthly={check}
          yearly={check}
          life={check}
        />
        <TableRow
          className={classes.row}
          titleClass={classes.titleclass}
          title={"Position Management"}
          free={dash}
          monthly={check}
          yearly={check}
          life={check}
        />
        <TableRow
          className={classes.row}
          titleClass={classes.titleclass}
          title={"Price"}
          free={"Free"}
          monthly={"8 ADA"}
          yearly={"30A ADA"}
          life={"45 ADA"}
        />
        <TableRow
          className={classes.row}
          monthly={<Button style={classes.button} title="Mint" />}
          yearly={<Button style={classes.button} title="Mint" />}
          life={<Button style={classes.button} title="Mint" />}
        />
      </table>
    </Card>
  );
};

export default Plans;
