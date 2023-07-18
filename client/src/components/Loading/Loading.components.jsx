import './Loading.styles.css';
import loading from '../../assets/loading.gif';

function Loading() {
  return (
    <div>
      <img width={100} src={loading}></img>
    </div>
  );
}

export default Loading;