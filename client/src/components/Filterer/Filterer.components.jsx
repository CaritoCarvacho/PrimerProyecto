import "./Filterer.styles.css";

function Filterer({
  types,
  typeFilter,
  originFilter,
  onChangeTypeFilter,
  onChangeOriginFilter,
}) {
  return (
    <div className="order-container">
      <select
        value={typeFilter}
        onChange={(e) => onChangeTypeFilter(e.target.value)}
      >
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <select
        value={originFilter}
        onChange={(e) => onChangeOriginFilter(e.target.value)}
      >
        <option key={"all"} value={"all"}>
          All
        </option>
        <option key={"api"} value={"api"}>
          API
        </option>
        <option key={"db"} value={"db"}>
          Database
        </option>
      </select>
    </div>
  );
}

export default Filterer;
