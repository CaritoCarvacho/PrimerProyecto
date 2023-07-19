import "./form.styles.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading/Loading.components";
import { useHistory } from "react-router-dom";
import { createPokemon, getTypes } from "../../redux/actions/actions";
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

  useEffect(() => {
    dispatch(getTypes());

    if (!DEV_MODE) {
      return;
    }

    setName("Zoe");
    setHp("100");
    setAttack("30");
    setDefense("40");
    setSpeed("25");
    setHeight("120");
    setWeight("80");
    setImage(
      "https://lh3.googleusercontent.com/pw/AIL4fc-vnjyQVJG2dEdJ7XrUAtxy9NzvZ5UTEyS8xQSQpXQ1ws5V-ipVagNliY5k59cyMZMcD2yAw_SbJf4NQVyLGjJ07P_HDp6wKBH8wfeAKXluN7r00b_Y8kBGRLfHc_5zAFIDqPgdprYEsXGAG8gbqswYqaMDWVO90ZkNnebtWiwF2fvA0F_j0XLyymDJfE9kuMEltUBOHFcJrGx5HghDlxczdTXjQY9GHa96SbMzictF9lMiHOu6DLVqJCYOwHXVUTez9dTcOjGKvzCH5875Bw01IU62mDt8tvwAC3_ICoF0ZxTFFcncPlI4HkP4zBdd5oHHxceGgmDC9J6D40CrsiDc12zdrPebV_x7LQocIUL_98bUGWW0scwwiPH1rLaJlN2LvkNxoiT3PwDjMAEGOrKqRJBbvAXk-zaeYLR5hfYKMSF5hDpXNiXMGqVfRIEGOhC1cR2Ym3GT-WAtxc092dN4ULEcG2T6TUDuw1kDb23aQ6Zjkj3zTajMQLPhfbF-RBCppma_zjnVabgpPrHoLcSboekr0JMGCC7VyoU8ZN_ieWn3YsPA2RZvNKKGEsODSmR3Ua_7Ac_osowcxDvY9GmJw68mwyEMQYTCdYgb84KxVzIbCprt-iCN4u939rNDclsA0IBRdObSbOtrtVOFhyTkE-MTUU32sQPTsq3JKbVNsGGJdlIs-HF_ambsfQzNESz_CGZ6gZ6RLUc5oZsg8sRv968Q-pAyzgJNbIStN6J2C6o1C8AZmeCuXkrhIlxD25_CIC4aC6IOGaLsjw8sNxQQO9Dc32NWU0xCfmlX16VnxeUhH9YwO8HmDG60RV0beSxhxaD-ApF9Iv12VokqmuueosuWtnwt5LiMGLSR4HVeC-Zjqrsu8kG3OU-MZqK6NeevEGdTJVcr5VtAtq-fNBU4qxCgcn6AWusBrD6ay-Dz_tE609nqCcYNWqhf=w944-h630-s-no"
    );
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
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
    setLoading(false);
    if (newPokemon?.id) {
      history.push("/detail/" + newPokemon.id);
    }
  }, [newPokemon]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
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
          <label>Select types</label>
          <div className="types-container">
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

        <button type="submit">Create Pokemon</button>
      </form>
    </div>
  );
}

export default Form;
