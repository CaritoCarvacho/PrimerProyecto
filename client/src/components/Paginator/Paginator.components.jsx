import './Paginator.styles.css';

function Paginator({totalPages, onClick}) {
  const buttons = Array.from({length: totalPages}, (_, page) => {
    return <button key={"paginator-" + page } onClick={() => onClick(page)}>{page + 1}</button>
  });

  return (
    <div className='paginator-container'>
      {buttons}
    </div>
  );
}

export default Paginator;