import './Sorter.styles.css';

function Sorter({sortBy, sortOrder, onChangeBy, onChangeOrder}) {
  return (
    <div className='order-container'>
      <select value={sortBy} onChange={(e) => onChangeBy(e.target.value)}>
        <option key={'name'} value={'name'}>Name</option>
        <option key={'attack'} value={'attack'}>Attack</option>
      </select>
      <select value={sortOrder} onChange={(e) => onChangeOrder(e.target.value)}>
        <option key={'asc'} value={'asc'}>Ascendent</option>
        <option key={'desc'} value={'desc'}>Descendent</option>
      </select>
    </div>
  );
}

export default Sorter;