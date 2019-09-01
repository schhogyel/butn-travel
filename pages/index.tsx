import React, { Fragment } from "react";
import MainHero from "../src/components/MainHero";
// import TourList from "../src/components/TourList";
import PopularTour from "../src/components/PopularTour";
import ValueService from "../src/components/ValueService";
import TourCarousel from "../src/components/TourCarousel";

export default function Index() {
  return (
    <Fragment>
      <MainHero />
      <TourCarousel />
      {/* <TourList /> */}
      <PopularTour />
      <ValueService />
    </Fragment>
  );
}
