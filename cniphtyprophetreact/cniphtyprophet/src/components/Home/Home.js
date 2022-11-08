import React from "react";
import Card from "../UI/Card";
import HomeList from "./HomeList";
import classes from "./Home.module.css";
import add from 'classnames';

const Home = () => {
  const appListArr = [
    "Borrow Assistance",
    "Lend Assistance",
    "Crypto Trade Assistance",
    "NFT Trade Assistance",
  ];
  const dataListArr = [
    "Floor Price, Volume, etc.",
    "Crypto Price, Market Cap, etc",
  ];
  const plansArr = [
    "Currently Free",
    "Monthly, Yearly, Life",
    "Follow socials for updates",
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
  ];

  const detailsArr = ['This is V1, details on V2 will be announced throughout development and user input.', 'APIs for data are free and restricted to a limit, if you are receiving errors that is due to the request limit being reached.', 'Based on interest I will be able to gauge better API usage.', 'This is my first project as a software developer, if you would like to hire me or collaborate feel free to dm me on twitter.'];

  const app = appListArr.map((x) => <li key={`app${x}`}  className={classes.li}>{x}</li>);
  const data = dataListArr.map((x) => <li key={`data${x}`}  className={classes.li}>{x}</li>);
  const plans = plansArr.map((x) => <li key={`plan${x}`}  className={classes.li}>{x}</li>);
  const links = linksArr.map((x) => (
    <li key={`link${x}`}  className={classes.li}>
      <a className={classes.a} href={x[0]}>
        {x[1]}
      </a>
    </li>
  ));
  const details = detailsArr.map(x => <li className={classes.li}>{x}</li>)

  return (
    <>
      <h2 className={classes.header}>Helpful details below</h2>
      <Card className={classes.container}>
        <Card className={classes.list}>
          <HomeList header={"CNiphtyProphet App"} children={app} />
        </Card>
        <Card className={classes.list}>
          <HomeList children={data} header={"Data Tools"} />
        </Card>
        <Card className={classes.list}>
          <HomeList children={plans} header={"Plans"} />
        </Card>
        <Card className={classes.list}>
          <HomeList children={links} header={"Other Links"} />
        </Card>
      </Card>
      <Card className={add(classes.container, classes.list, classes.details)}>
        <HomeList children={details} header={"Extra Details"} />
      </Card>
    </>
  );
};

export default Home;
