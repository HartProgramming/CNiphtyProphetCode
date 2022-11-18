import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import HomeList from "./HomeList";
import classes from "./Home.module.css";
import add from "classnames";
import Button from "../UI/Button";
import discord from "./discord.svg";
import twitter from "./twitter.svg";
import HomeButtonCard from "./HomeButtonCard";
import FAQ from "./FAQ";
import FAQAnswer from "./FAQAnswer";
import Modal from "../UI/Modal";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const appListArr = [
    "Short your ADA with confidence by seeing the break-even price and profit price of ADA.",
    "Compare your crypto and NFT trade possibilities depending on amount of ADA borrowed and price of different projects.",
    "Compare the outcome of various borrowing scenarios to lending out the ADA you borrowed or ADA you have sitting idle that you can lend.",
    "Summary analysis of your decisions providing you the possible outcomes of all scenarios.",
  ];
  const dataListArr = [
    "Essential data on the markets are provided in order for you to make a sound judgement.",
    "Save time and screen real estate by eliminating multiple tabs and windows in order to analyze markets.",
    "CNFT data provided by opencnft.io lays out current floor price, market cap, total volume, etc.",
    "Crypto market data provided by coingecko highlights the current price, market cap, daily performance, etc.",
  ];
  const plansArr = [
    "CNiphtyProphet is currently free, visit discord to gain advice from fellow users and make suggestions about improvements to the app.",
    "There will be a monthly, yearly, and lifetime access memberships in the form of NFTs.",
    "Follow socials for updates.",
  ];
  const linksArr = [
    ["https://twitter.com/CNiphty", "CNiphty Twitter"],
    ["https://twitter.com/CNiphtyProphet", "CNiphtyProphet Twitter"],
    [
      "https://discord.com/channels/1028109414193975336/1028109415607455816",
      "Discord",
    ],
    [
      "https://medium.com/@programmedhart/cniphtypaper-1-0-dc8a72587ac4",
      "LitePaper",
    ],
    ["https://cniphty.com", "CNiphty"],
  ];

  const app = appListArr.map((x) => (
    <>
      <li key={`app${x}`} className={classes.li}>
        {x}
      </li>
    </>
  ));
  const data = dataListArr.map((x) => (
    <>
      <li key={`data${x}`} className={classes.li}>
        {x}
      </li>
    </>
  ));
  const plans = plansArr.map((x) => (
    <>
      <li key={`plan${x}`} className={classes.li}>
        {x}
      </li>
    </>
  ));
  const links = linksArr.map((x) => (
    <>
      <li key={`link${x}`} className={classes.li}>
        <a className={classes.a} href={x[0]}>
          {x[1]}
        </a>
      </li>
    </>
  ));

  const [answer1, setAnswer1] = useState(false);
  const [answer2, setAnswer2] = useState(false);
  const [answer3, setAnswer3] = useState(false);
  const [answer4, setAnswer4] = useState(false);
  const [answer5, setAnswer5] = useState(false);
  const [answer6, setAnswer6] = useState(false);
  const [answer7, setAnswer7] = useState(false);

  const [detail1, setDetail1] = useState(false);
  const [detail2, setDetail2] = useState(false);
  const [detail3, setDetail3] = useState(false);
  const [detail4, setDetail4] = useState(false);

  const DetailsHandler1 = () => {
    console.log("hi");
    if (detail1 === false) {
      console.log("true");
      setDetail1(true);
    } else {
      setDetail1(false);
    }
  };

  const DetailsHandler2 = () => {
    if (detail2 === false) {
      setDetail2(true);
    } else {
      setDetail2(false);
    }
  };

  const DetailsHandler3 = () => {
    if (detail3 === false) {
      setDetail3(true);
    } else {
      setDetail3(false);
    }
  };

  const DetailsHandler4 = () => {
    if (detail4 === false) {
      setDetail4(true);
    } else {
      setDetail4(false);
    }
  };

  const AnswerHandler1 = (e) => {
    if (answer1 === false) {
      setAnswer1(true);
    } else {
      setAnswer1(false);
    }
  };

  const AnswerHandler2 = (e) => {
    if (answer2 === false) {
      setAnswer2(true);
    } else {
      setAnswer2(false);
    }
  };

  const AnswerHandler3 = (e) => {
    if (answer3 === false) {
      setAnswer3(true);
    } else {
      setAnswer3(false);
    }
  };

  const AnswerHandler4 = (e) => {
    if (answer4 === false) {
      setAnswer4(true);
    } else {
      setAnswer4(false);
    }
  };

  const AnswerHandler5 = (e) => {
    if (answer5 === false) {
      setAnswer5(true);
    } else {
      setAnswer5(false);
    }
  };

  const AnswerHandler6 = (e) => {
    if (answer6 === false) {
      setAnswer6(true);
    } else {
      setAnswer6(false);
    }
  };

  const AnswerHandler7 = (e) => {
    if (answer7 === false) {
      setAnswer7(true);
    } else {
      setAnswer7(false);
    }
  };

  return (
    <>
      {detail1 && (
        <HomeList
          onClick={DetailsHandler1}
          header="App Details"
          children={app}
        />
      )}
      {detail2 && (
        <HomeList
          onClick={DetailsHandler2}
          header="Data Details"
          children={data}
        />
      )}
      {detail3 && (
        <HomeList
          onClick={DetailsHandler3}
          header="Plans Details"
          children={plans}
        />
      )}
      {detail4 && (
        <HomeList
          onClick={DetailsHandler4}
          header="Official Links"
          children={links}
        />
      )}

      <h2 className={classes.header}>
        The NFT Borrowing and Lending Assistance Platform for Cardano
      </h2>
      <Card className={add(classes.container)}>
        <Card className={classes.cardcontainer}>
          <HomeButtonCard
            path="/app"
            onClick={DetailsHandler1}
            cardClass={classes.list}
            h2Class={classes.h2}
            h2="Breakdown your Borrow/Lend Position Possibilities"
            title="App"
            buttonPage={classes.buttonPage}
            detailsTitle="Details"
            detailsClass={classes.detailsButton}
          />
        </Card>
        <Card className={classes.cardcontainer}>
          <HomeButtonCard
            path="/data"
            onClick={DetailsHandler2}
            cardClass={classes.list}
            h2Class={classes.h2}
            h2="Reduce your Research Time with our CNFT and Crypto Data Tools"
            buttonPage={classes.buttonPage}
            title="Data"
            detailsTitle="Details"
            detailsClass={classes.detailsButton}
          />
        </Card>
        <Card className={classes.cardcontainer}>
          <HomeButtonCard
            path="/plans"
            onClick={DetailsHandler3}
            cardClass={classes.list}
            h2Class={classes.h2}
            title="Plans"
            h2="Free, Monthly, Yearly, and Lifetime Memberships (TBD)"
            buttonPage={classes.buttonPage}
            detailsTitle="Details"
            detailsClass={classes.detailsButton}
          />
        </Card>
        <Card className={classes.cardcontainer}>
          <HomeButtonCard
            path="/"
            onClick={DetailsHandler4}
            cardClass={classes.list}
            h2Class={classes.h2}
            h2="Official Links to all CNiphty Platforms"
            buttonPage={classes.none}
            detailsTitle="Details"
            detailsClass={classes.detailsButton}
            icons={
              <div className={classes.iconcontainer}>
                <img src={twitter} />
                <img src={discord} />
              </div>
            }
          />
        </Card>
      </Card>
      <Card className={add(classes.faqcontainer)}>
        <h2 className={classes.h2faq}>FAQ</h2>

        <FAQ
          answer={
            answer1 && (
              <FAQAnswer answer="This is not a borrowing and lending platform. We implement no smart contracts. The wallet connector is for verifying your membership via NFT and will store your positions. This feature will be available at a later date." />
            )
          }
          icon={answer1 ? faMinus : faPlus}
          onClick={AnswerHandler1}
          question="Can you lend and borrow on here?"
        />
        <FAQ
          answer={
            answer2 && (
              <FAQAnswer answer="This is a Cardano only platform. However, you can use the same formulas and process (available in discord) for NFTs on other chains." />
            )
          }
          icon={answer2 ? faMinus : faPlus}
          onClick={AnswerHandler2}
          question="Is this tool only for Cardano NFTs?"
        />
        <FAQ
          answer={
            answer3 && (
              <FAQAnswer answer="This tool will provide you confidence by providing you with a visual representation of the result of a borrowing position by shorting ADA and simultaneously using the funds to trade crypto or NFTs." />
            )
          }
          icon={answer3 ? faMinus : faPlus}
          onClick={AnswerHandler3}
          question="Why should I use this tool?"
        />
        <FAQ
          answer={
            answer4 && (
              <FAQAnswer answer="There will be no recommendations provided as none of the data or tools are aimed toward providing financial advice." />
            )
          }
          icon={answer4 ? faMinus : faPlus}
          onClick={AnswerHandler4}
          question="Does the tool provide recommendations?"
        />
        <FAQ
          answer={
            answer5 && (
              <FAQAnswer answer="The first feature will be a portfolio tool that saves the borrow and lend positions you submit. As LendingPond, FluidTokens, and other protocols release more features CNiphtyProphet will as well." />
            )
          }
          icon={answer5 ? faMinus : faPlus}
          onClick={AnswerHandler5}
          question="If this is V1 of CNiphtyProphet, what will V2 consist of?"
        />
        <FAQ
          answer={
            answer6 && (
              <FAQAnswer answer="A paid membership will consist of all the features in V2 at this time. Check out the Plans page for more details. " />
            )
          }
          icon={answer6 ? faMinus : faPlus}
          onClick={AnswerHandler6}
          question="What features are included in a membership?"
        />
        <FAQ
          answer={
            answer7 && (
              <FAQAnswer answer="We are not partnered with anyone at this time. If you are a NFT project and interested in partnering to provide holders with membership benefits to our platform." />
            )
          }
          icon={answer7 ? faMinus : faPlus}
          onClick={AnswerHandler7}
          question="Are you partnered with anyone?"
        />
      </Card>
    </>
  );
};

export default Home;
