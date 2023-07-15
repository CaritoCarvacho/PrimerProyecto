import './cards.styles.css';
import Card from '../card/card.components';

function Cards() {
  return (
    <div className='card-list'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards;