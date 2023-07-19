import "./form.styles.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading/Loading.components";
import { useHistory } from "react-router-dom";
import {
  createPokemon,
  getTypes,
  resetNewPokemon,
} from "../../redux/actions/actions";
import React from "react";

const DEV_MODE = true;

function Form() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { newPokemon, types } = useSelector((state) => state);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [speed, setSpeed] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [image, setImage] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);

  const [error, setError] = useState("");

  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }

  function validate() {
    let error;
    if (name.length < 3) {
      error = "must have at least 3 characters";
    } else if (isNaN(hp)) {
      error = "must be a numeric value";
    } else if (isNaN(attack)) {
      error = "must be a numeric value";
    } else if (isNaN(defense)) {
      error = "must be a numeric value";
    } else if (isNaN(speed)) {
      error = "must be a numeric value";
    } else if (isNaN(height)) {
      error = "must be a numeric value";
    } else if (isNaN(weight)) {
      error = "must be a numeric value";
    } else if (!isValidUrl(image)) {
      error = "must have a picture";
    } else if (selectedTypes.length === 0) {
      error = "must have at least one type";
    }
    setError(error);
    console.log(error);
    return error;
  }

  useEffect(() => {
    validate();
  }, [name, hp, attack, defense, speed, height, weight, image, selectedTypes]);

  useEffect(() => {
    dispatch(getTypes());

    if (DEV_MODE) {
      return;
    }

    setName("");
    setHp("100");
    setAttack("30");
    setDefense("40");
    setSpeed("25");
    setHeight("120");
    setWeight("80");
    setImage("");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      return;
    }
    setError("");
    dispatch(
      createPokemon({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        image,
        types: selectedTypes,
      })
    );
    setLoading(true);
  };

  useEffect(() => {
    console.log("1");
    console.log(newPokemon);
    setLoading(false);
    if (newPokemon?.id) {
      console.log("2");
      dispatch(resetNewPokemon());
      history.push("/detail/" + newPokemon.id);
    }
  }, [newPokemon]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="h1-form">Create your own Pokemon</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        ></input>

        <input
          type="text"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
          placeholder="HP"
        ></input>

        <input
          type="text"
          value={attack}
          onChange={(e) => setAttack(e.target.value)}
          placeholder="Attack"
        ></input>

        <input
          type="text"
          value={defense}
          onChange={(e) => setDefense(e.target.value)}
          placeholder="Defense"
        ></input>

        <input
          type="text"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
          placeholder="Speed"
        ></input>

        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Height"
        ></input>

        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight"
        ></input>

        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image"
        ></input>

        <div>
          <label className="label-text">Select types</label>
          <div className="formtypes-container">
            {types.map((type) => (
              <div className="types" key={type}>
                <p>{type}</p>
                <input
                  type="checkbox"
                  name={`type-${type}`}
                  checked={selectedTypes.some((t) => t === type)}
                  onChange={(e) => {
                    if (selectedTypes.some((t) => t === type)) {
                      setSelectedTypes(selectedTypes.filter((t) => t !== type));
                    } else if (selectedTypes.length < 2) {
                      setSelectedTypes([...selectedTypes, type]);
                    } else {
                      setSelectedTypes([selectedTypes[1], type]);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <button className="button-form" disabled={!!error} type="submit">
          Create Pokemon
        </button>
        <label>{error}</label>
      </form>
    </div>
  );
}

export default Form;
