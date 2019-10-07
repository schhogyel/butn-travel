import React from 'react';

interface Traveller {
  title: string;
  dateOfBirth: Date;
  fullName: string;
  hasPassport: boolean;
  country?: string;
  passportNumber?: string;
  passportExpiry?: Date;
}
interface ContactDetails {
  contactPerson: string;
  address: string;
  phone: string;
  email: string;
  confirmEmail: string;
}

interface TravellerContext {
  travellers: Array<Traveller>;
  contactDetails: ContactDetails;
  setTravellers: React.Dispatch<React.SetStateAction<Traveller[]>>;
  setContactDetails: React.Dispatch<React.SetStateAction<ContactDetails>>;
}

const initialTraveller: Traveller = {
  title: 'Mr',
  dateOfBirth: new Date(),
  fullName: '',
  hasPassport: false,
  country: '',
  passportNumber: '',
  passportExpiry: new Date()
};

const initialContactDetails: ContactDetails = {
  contactPerson: '',
  address: '',
  phone: '',
  email: '',
  confirmEmail: ''
};

const initialTravellerContext = {
  travellers: [initialTraveller],
  contactDetails: initialContactDetails,
  setTravellers: (): void => {},
  setContactDetails: (): void => {}
};

const TravellerContext = React.createContext<TravellerContext>(
  initialTravellerContext
);

function TravellerProvider(props: any) {
  const [travellers, setTravellers] = React.useState<Array<Traveller>>([
    initialTraveller
  ]);
  const [contactDetails, setContactDetails] = React.useState<ContactDetails>(
    initialContactDetails
  );
  return (
    <TravellerContext.Provider
      value={{ travellers, setTravellers, contactDetails, setContactDetails }}
    >
      {props.children}
    </TravellerContext.Provider>
  );
}

const TravellerConsumer = TravellerContext.Consumer;

export default TravellerContext;

export { TravellerConsumer, TravellerProvider };
