//import './home.styles.css';
import { useEffect, useState } from "react";
import CardsContainer from "../../components/cardsContainer/cardsContainer.components";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../redux/actions/actions";
import Loading from "../../components/Loading/Loading.components";
import Paginator from "../../components/Paginator/Paginator.components";
import Sorter from "../../components/Sorter/Sorter.components";
import Filterer from "../../components/Filterer/Filterer.components";

function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { pokemons, types } = useSelector((state) => state);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [typeFilter, setTypeFilter] = useState("all");
  const [originFilter, setOriginFilter] = useState("all");

  useEffect(() => {
    setLoading(false);
  }, [pokemons]);

  useEffect(() => {
    setLoading(true);
    dispatch(getTypes());
  }, []);

  useEffect(() => {
    dispatch(
      getPokemons({ currentPage, sortBy, sortOrder, typeFilter, originFilter })
    );
    setLoading(true);
    setCurrentPage(0);
  }, [currentPage, sortBy, sortOrder, typeFilter, originFilter]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <p>Home Page</p>
      <Sorter
        sortBy={sortBy}
        sortOrder={sortOrder}
        onChangeBy={setSortBy}
        onChangeOrder={setSortOrder}
      />
      <Filterer
        types={types}
        typeFilter={typeFilter}
        originFilter={originFilter}
        onChangeTypeFilter={setTypeFilter}
        onChangeOriginFilter={setOriginFilter}
      ></Filterer>
      <Paginator
        totalPages={pokemons.totalPages}
        onClick={(page) => setCurrentPage(page)}
      ></Paginator>
      <CardsContainer pokemons={pokemons} index={0} />
      <Paginator
        totalPages={pokemons.totalPages}
        onClick={(page) => setCurrentPage(page)}
      ></Paginator>
    </div>
  );
}

export default Home;
