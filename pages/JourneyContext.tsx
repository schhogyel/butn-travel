import React from 'react';

interface Journey {
  arrivalDate: Date | number;
  departureDate: Date | number;
  noOfTravellers: number;
}

interface JourneyContext {
  journey: Journey;
  setJourney: React.Dispatch<React.SetStateAction<Journey>>;
}

const defaultJourney: Journey = {
  arrivalDate: Date.now(),
  departureDate: Date.now(),
  noOfTravellers: 1
};

const defaultJourneyContext = {
  journey: defaultJourney,
  setJourney: (): void => {}
};

const JourneyContext = React.createContext<JourneyContext>(
  defaultJourneyContext
);

function JourneyProvider(props: any) {
  const [journey, setJourney] = React.useState<Journey>({
    arrivalDate: Date.now(),
    departureDate: Date.now(),
    noOfTravellers: 0
  });
  return (
    <JourneyContext.Provider value={{ journey, setJourney }}>
      {props.children}
    </JourneyContext.Provider>
  );
}

const JourneyConsumer = JourneyContext.Consumer;

export default JourneyContext;

export { JourneyConsumer, JourneyProvider };
