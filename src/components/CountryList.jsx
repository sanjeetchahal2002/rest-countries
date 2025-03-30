import CountryItem from "./CountryItem";
import Filters from "./Filters";

function CountryList({ countries }) {
  return (
    <div>
      <Filters />
      <ul
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexWrap: "wrap",
          gap: "4rem",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "1rem",
          cursor: "pointer",
        }}
      >
        {countries.map((country) => {
          return <CountryItem country={country} key={country.cca2} />;
        })}
      </ul>
    </div>
  );
}

export default CountryList;
