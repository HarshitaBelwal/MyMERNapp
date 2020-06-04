import React from "react";

import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css";
const NewPlace = (props) => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Plaese enter a valid Title!"
      />
    </form>
  );
};
export default NewPlace;
