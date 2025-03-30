import { NavLink } from "react-router-dom";

function CountryItem({ country }) {
  const {
    name: { common },
    flags: { alt, png },
    population,
    capital,
    region,
    cca2,
  } = country;
  return (
    <NavLink
      to={`${cca2}`}
      style={{
        listStyle: "none",
        flex: "1 1 20%",
        maxWidth: "20%",
        height: "400px",
        display: "flex",
        border: "1px solid black",
        flexDirection: "column",
        textDecoration: "none",
        cursor: "pointer",
        color: "inherit",
      }}
    >
      <li>
        <div>
          <img
            src={png}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "fill",
            }}
            alt={alt}
          />
        </div>
        <div
          style={{
            display: "flex",
            padding: "1rem",
            flexDirection: "column",
            gap: "0.3rem",
          }}
        >
          <h4>{common}</h4>
          <span>
            <strong>Population: </strong>
            {population}
          </span>
          <span>
            <strong>Region: </strong>
            {region}
          </span>
          <span>
            <strong>Capital: </strong>
            {capital}
          </span>
        </div>
      </li>
    </NavLink>
  );
}

export default CountryItem;
