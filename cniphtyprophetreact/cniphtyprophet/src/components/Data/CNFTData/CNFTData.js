import React, { useEffect } from "react";
import { useState } from "react";
import cnftArray from "../../CNFTProjectData";
import axios from "axios";
import classes from "./CNFTData.module.css";
import Dropdown from "../../Dropdown/Dropdown";
import DropdownUl from "../../DropdownUl/DropdownUl";
import styles from "../../Dropdown/Dropdown.module.css";
import Card from "../../UI/Card";
import Loading from "../../UI/Loading";
import add from "classnames";

import AdjustProjectList from "../../UI/AdjustProjectList";

function CNFTData() {
  const projectList = [];
  const projectListUl = [];

  for (let x of cnftArray) {
    projectList.push(
      <Dropdown
        name="cnftdata"
        key={x.id}
        idDropdown={x.projectID}
        textDropdown={x.project}
        valueDropdown={x.policyID}
      ></Dropdown>
    );
  }

  for (let i of cnftArray) {
    projectListUl.push(
      <DropdownUl
        key={i.id}
        forDropdown={i.projectID}
        textDropdown={i.project}
      ></DropdownUl>
    );
  }

  const [imgCNFT, setImgCNFT] = useState(null);
  const [volCNFT, setVolCNFT] = useState(0);
  const [mktCapCNFT, setMktCapCNFT] = useState(0);
  const [assetHolders, setAssetHolders] = useState(0);
  const [assetsMinted, setAssetsMinted] = useState(0);
  const [assetsWallet, setAssetsWallet] = useState(0);
  const [floor, setFloor] = useState("Change Project");
  const [loading, setLoading] = useState(true);
  const [dataLoad, setDataLoad] = useState(true);
  const [error, setError] = useState(true);

  const ChangeProject = async (e) => {
    let policyManual;
    let selectedPolicyCNFT;
    if (e.length > 1) {
      policyManual = e;
      selectedPolicyCNFT = null;
    } else {
      selectedPolicyCNFT = e.target.value;
      policyManual = null;
    }

    function sortPolicy() {
      setDataLoad(true);
      if (policyManual !== null) {
        return policyManual;
      } else {
        return selectedPolicyCNFT;
      }
    }
    console.log(selectedPolicyCNFT);
    console.log(e);
    const config = { headers: { Accept: "application/json" } };

    const params = {
      policy: sortPolicy(),
    };
    try {
      const res = await axios.get(
        `https://api.opencnft.io/1/policy/${params.policy}`,
        config
      );
      setTimeout(() => {
        const editImg = res.data.thumbnail.slice(-46);
        const pic = `https://ipfs.io/ipfs/${editImg}`;
        setImgCNFT(pic);
      }, 100);
      setTimeout(() => {
        const volumeStr = `${(res.data.total_volume /= Math.pow(
          10,
          6
        )).toLocaleString()} ADA`;
        const floorNum = (res.data.floor_price /= Math.pow(10, 6));
        const floorStr = `${floorNum} ADA`;
        const assets = res.data.asset_minted;
        const cap = `${(assets * floorNum).toLocaleString()} ADA`;
        const holders = res.data.asset_holders;
        const nftsPerWallet = (res.data.asset_minted /=
          res.data.asset_holders).toFixed(2);
        setFloor(floorStr);
        setVolCNFT(volumeStr);
        setMktCapCNFT(cap);
        setAssetsMinted(assets);
        setAssetHolders(holders);
        setAssetsWallet(nftsPerWallet);
        console.log(res.data.thumbnail);
        console.log(cap);
        setDataLoad(false);
        console.log(res.data);
      }, 700);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, [loading]);

  useEffect(() => {
    setTimeout(() => {
      const aqua = document.querySelector("#project9");
      aqua.checked = true;
      ChangeProject("86ec26a91051e4d42df00b023202e177a0027dca4294a20a0326a116");
    }, 10);
  }, []);

  return (
    <>
      {loading && <Loading container={classes.loadContainer} />}
      <Card className={loading ? classes.wrapper : classes.container}>
        <div className={classes.dataContainer}>
          <div className={classes.row}>
            <div className={classes.imgContainer}>
              {dataLoad && (
                <Loading
                  container={classes.loadContainer}
                  logo={classes.logoImg}
                />
              )}
              <img
                alt="Image failed to load"
                src={imgCNFT}
                className={dataLoad ? classes.none : classes.img}
              />
              <AdjustProjectList
                containerClass={add(
                  styles.selectOptionsContainer,
                  classes.width
                )}
                onClick={ChangeProject}
                boxClass={styles.selectOptionsDivBox}
                listOne={projectList}
                listTwo={projectListUl}
                iconClass={styles.selectIcon}
                selectListClass={styles.selectList}
                listContainerClass={styles.listContainer}
              />
            </div>
            {dataLoad ? (
              <p className={classes.p}>Loading data...</p>
            ) : (
              <div>
                <ul className={classes.ul}>
                  <li className={classes.li}>
                    <span className={classes.span}>Floor Price:</span> {floor}
                  </li>
                  <li className={classes.li}>
                    <span className={classes.span}>Total Volume:</span>{" "}
                    {volCNFT}
                  </li>
                  <li className={classes.li}>
                    <span className={classes.span}>Mkt. Cap:</span> {mktCapCNFT}
                  </li>

                  <li className={classes.li}>
                    <span className={classes.span}>Holders:</span>{" "}
                    {assetHolders}
                  </li>
                  <li className={classes.li}>
                    <span className={classes.span}>Supply:</span> {assetsMinted}
                  </li>
                  <li className={classes.li}>
                    <span className={classes.span}>Avg NFTs Per Wallet:</span>{" "}
                    {assetsWallet}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <h3 className={classes.thanks}>
          Thank You to Opencnft.io for the data feed. Some images will have
          issues being retrieved from ipfs.
        </h3>
      </Card>
    </>
  );
}

export default CNFTData;
