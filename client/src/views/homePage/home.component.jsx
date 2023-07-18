//import './home.styles.css';
import { useEffect, useState } from "react";
import CardsContainer from "../../components/cardsContainer/cardsContainer.components";
import {useSelector, useDispatch} from "react-redux";
import { getPokemons } from "../../redux/actions/actions";
import Loading from "../../components/Loading/Loading.components";
import Paginator from "../../components/Paginator/Paginator.components";
import Sorter from "../../components/Sorter/Sorter.components";

function Home() {
  const dispatch = useDispatch();
  const [ loading, setLoading ] = useState(false);
  const { pokemons, types } = useSelector((state) => state);
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ sortBy, setSortBy ] = useState('name');
  const [ sortOrder, setSortOrder ] = useState('asc');

  useEffect(() => {
    setLoading(false);
  }, [pokemons]);

  useEffect(() => {
    dispatch(getPokemons({currentPage, sortBy, sortOrder}));
    setLoading(true);
  }, [currentPage, sortBy, sortOrder]);

  if (loading) {
    return (<Loading/>)
  }

  return (
    <div>
      <p>Home Page</p>
        <Sorter sortBy={sortBy} sortOrder={sortOrder} onChangeBy={setSortBy} onChangeOrder={setSortOrder} />
        <Paginator totalPages={pokemons.totalPages} onClick={(page) => setCurrentPage(page)}></Paginator>
        <CardsContainer pokemons={pokemons} index={0} />
        <Paginator totalPages={pokemons.totalPages} onClick={(page) => setCurrentPage(page)}></Paginator>
    </div>
  );
}

export default Home;
