import React from 'react';
import MainHero from '../components/MainHero';
// import TourList from "../src/components/TourList";
import PopularTour from '../components/PopularTour';
import ValueService from '../components/ValueService';
import TourCarousel from '../components/TourCarousel';
import Page from '../components/Page';

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
