import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCandy } from "../store";

const Form = () => {
  const [newCandy, setNewCandy] = useState({
    name: "",
    imageUrl: "",
    description: "",
  });

  const dispatch = useDispatch();

  const handleName = (event) => {
    setNewCandy({ ...newCandy, name: event.target.value });
  };

  const handleImage = (event) => {
    setNewCandy({ ...newCandy, imageUrl: event.target.value });
  };
  const handleDescription = (event) => {
    setNewCandy({ ...newCandy, description: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createCandy({ ...newCandy }));
    setNewCandy({
      ...newCandy,
      name: "",
      imageUrl: "",
      description: "",
    });
  };

  return (
    <div className="form">
      <form id="candy-form" onSubmit={handleSubmit}>
        <label htmlFor="candyName">Candy: </label>
        <input name="candyName" value={newCandy.name} onChange={handleName} />

        <label htmlFor="candyImage">Image URL: </label>
        <input
          name="candyImage"
          value={newCandy.imageUrl}
          onChange={handleImage}
        />

        <label htmlFor="candyDescription">Description: </label>
        <input
          name="candyDescription"
          value={newCandy.description}
          onChange={handleDescription}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
