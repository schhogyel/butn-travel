import React from "react";
import MainHero from "../src/components/MainHero";
// import TourList from "../src/components/TourList";
import PopularTour from "../src/components/PopularTour";
import ValueService from "../src/components/ValueService";
import TourCarousel from "../src/components/TourCarousel";
import Page from "../src/components/Page";

export default function Index() {
  return (
    <Page>
      <MainHero />
      <TourCarousel />
      <PopularTour />
      <ValueService />
    </Page>
  );
}
