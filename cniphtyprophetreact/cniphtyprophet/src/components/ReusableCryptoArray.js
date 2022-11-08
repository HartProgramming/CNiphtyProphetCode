import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import DropdownUl from "./DropdownUl/DropdownUl";
import tokenSortList from "./CryptoProjectData";

export const projectListCrypto = [];
export const projectListCryptoUl = [];

for (let x of tokenSortList) {
  projectListCrypto.push(
    <Dropdown
      idDropdown={x.id}
      textDropdown={x.name}
      valueDropdown={x.coinId}
    ></Dropdown>
  );
}

console.log(tokenSortList);

for (let i of tokenSortList) {
  projectListCryptoUl.push(
    <DropdownUl forDropdown={i.id} textDropdown={i.name}></DropdownUl>
  );
}
