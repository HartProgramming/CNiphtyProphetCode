import React, { useEffect, useState, useRef } from "react";
import Card from "../UI/Card";
import Borrow from "./Borrow/Borrow";
import Lend from "./Lend/Lend";
import CNFT from "./CNFT/CNFT";
import Crypto from "./Crypto/Crypto";
import classes from "./CNiphtyProphet.module.css";
import Loading from "../UI/Loading";

function CNiphtyProphet() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setTimeout(() => {
      setLoading(false)
    }, 1200);
  })

  return (
    <>
      {loading && <Loading />}
        <Card className={loading ? classes.wrapper : classes.container}>
          <div className={classes.panelcontainer}>
            <Card className={classes.panelBorrow}>
              <Borrow
                start={classes.header}
                container={classes.inputscontainer}
                setData={setData}
              />
            </Card>
            <Card className={classes.panelLend}>
              <Lend
                header={classes.header}
                container={classes.inputscontainer}
              />
            </Card>
          </div>
          <div className={classes.panelcontainer}>
            <Card className={classes.panelCNFT}>
              <CNFT
                header={classes.header}
                container={classes.inputscontainer}
                data={data}
              />
            </Card>
            <Card className={classes.panelCrypto}>
              <Crypto
                data={data}
                header={classes.header}
                container={classes.inputscontainer}
              />
            </Card>
          </div>
        </Card>
    </>
  );
}

export default CNiphtyProphet;
