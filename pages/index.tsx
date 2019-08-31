import React, { Fragment } from "react";
import MainHero from "../src/components/MainHero";
import TourList from "../src/components/TourList";
import PopularTour from "../src/components/PopularTour";
// import ValueService from "../src/components/ValueService";

export default function Index() {
  return (
    <Fragment>
      <MainHero />
      {/* <ValueService /> */}
      <TourList />
      <PopularTour />
    </Fragment>
  );
}
