import "./detail.styles.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemonById } from "../../redux/actions/actions";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading.components";
import DetailCard from "../../components/card/detailCard.components";

function Detail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { pokemon } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getPokemonById(id));
    setLoading(true);
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [pokemon]);

  if (loading) {
    return <Loading />;
  }

  if (!pokemon?.id) {
    return <p>Pokemon not found.</p>;
  }

  return (
    <div className="detail-container">
      {" "}
      <DetailCard pokemon={pokemon} />
    </div>
  );
}

export default Detail;
