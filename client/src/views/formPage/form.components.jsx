//import './form.styles.css';

function Form() {
  return (
    <form>
      <label htmlFor="Name"></label>
      <input type="text"></input>

      <label htmlFor="HP"></label>
      <input type="text"></input>

      <label htmlFor="Attack"></label>
      <input type="text"></input>

      <label htmlFor="Defense"></label>
      <input type="text"></input>

      <label htmlFor="Speed"></label>
      <input type="text"></input>

      <label htmlFor="Height"></label>
      <input type="text"></input>

      <label htmlFor="Weight"></label>
      <input type="text"></input>

      <button type="submit">Create Pokemon</button>
    </form>
  );
}

export default Form;
