import React from "react";
import {useParams} from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Maharaja Agrasen Institute Of Technology",
    description: "One of the finest college of GGSIPU",
    imageUrl:
      "https://www.purplestudy.com/uploads/Maharaja-Agrasen-Institute-of-Technology-Delhi.jpg",
    address: "Plot No 1 Rohini, Sector 22, PSP Area, Delhi, 110086",
    location: {
      lat: 28.719819,
      long: 77.065543,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Maharaja Agrasen Institute Of Technology",
    description: "One of the finest college of GGSIPU",
    imageUrl:
      "https://www.purplestudy.com/uploads/Maharaja-Agrasen-Institute-of-Technology-Delhi.jpg",
    address: "Plot No 1 Rohini, Sector 22, PSP Area, Delhi, 110086",
    location: {
      lat: 28.719704,
      long: 77.066091,
    },
    creator: "u2",
  },
];
const UserPlaces = () => {
  const userId = useParams().userId ;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId  );
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
