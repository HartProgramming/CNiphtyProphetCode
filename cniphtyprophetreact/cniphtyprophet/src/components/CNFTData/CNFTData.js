import React, { useEffect } from "react";
import { useState } from "react";
import cnftArray from "../CNFTProjectData";
import axios from "axios";
import Dropdown from "../Dropdown/Dropdown";
import DropdownUl from "../DropdownUl/DropdownUl";
import classes from "./CNFTData.module.css";
import Clay from "./ClayNationGC8070.png";
import Card from "../UI/Card";

function CNFTData() {
  const projectList = [];
  const projectListUl = [];

  const [floor, setFloor] = useState("Change Project");

  for (let x of cnftArray) {
    projectList.push(
      <Dropdown
        key={x.id}
        idDropdown={x.projectID}
        textDropdown={x.project}
        valueDropdown={x.policyID}
        checked={checked}
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

  const [checked, setChecked] = useState(false);
  const [imgCNFT, setImgCNFT] = useState(null);
  const [volCNFT, setVolCNFT] = useState(0);
  const [mktCapCNFT, setMktCapCNFT] = useState(0);
  const [assetHolders, setAssetHolders] = useState(0);
  const [assetsMinted, setAssetsMinted] = useState(0);
  const [assetsWallet, setAssetsWallet] = useState(0);

  useEffect(() => {
    const aqua = document.querySelector("#project9");
    aqua.checked = true;
    ChangeProject("86ec26a91051e4d42df00b023202e177a0027dca4294a20a0326a116");
  }, []);

  const ChangeProject = (e) => {
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
    axios
      .get(`https://api.opencnft.io/1/policy/${params.policy}`, config)
      .then((res) => {
        const volumeStr = `${(res.data.total_volume /= Math.pow(
          10,
          6
        )).toLocaleString()} ADA`;
        const floorNum = (res.data.floor_price /= Math.pow(10, 6));
        const floorStr = `${floorNum} ADA`;
        const assets = res.data.asset_minted;
        const cap = `${(assets * floorNum).toLocaleString()} ADA`;
        const editImg = res.data.thumbnail.slice(-46);
        const holders = res.data.asset_holders;
        console.log(editImg);
        const nftsPerWallet = (res.data.asset_minted /=
          res.data.asset_holders).toFixed(2);
        const pic = `https://ipfs.io/ipfs/${editImg}`;
        setImgCNFT(pic);
        setFloor(floorStr);
        setVolCNFT(volumeStr);
        setMktCapCNFT(cap);
        setAssetsMinted(assets);
        setAssetHolders(holders);
        setAssetsWallet(nftsPerWallet);
        console.log(res.data.thumbnail);
        console.log(cap);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card className={classes.container}>
      <div className={classes.row}>
        <div>
          <img className={classes.img} src={imgCNFT} />
          <div className="select-options-container">
            <div
              onClick={ChangeProject}
              className="select-options-div-box"
              tabIndex="1"
            >
              {projectList}
              <img
                className="select-icon"
                src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
                alt="Arrow Icon"
                aria-hidden="true"
              />
            </div>
            <ul className="select-list">
              <div className="list-container">{projectListUl}</div>
            </ul>
          </div>
        </div>
        <div>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <span className={classes.span}>Floor Price:</span> {floor}
            </li>
            <li className={classes.li}>
              <span className={classes.span}>Total Volume:</span> {volCNFT}
            </li>
            <li className={classes.li}>
              <span className={classes.span}>Mkt. Cap:</span> {mktCapCNFT}
            </li>

            <li className={classes.li}>
              <span className={classes.span}>Holders:</span> {assetHolders}
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
      </div>
    </Card>
  );
}

export default CNFTData;
