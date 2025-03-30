import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import styles from "./CountryPage.module.css";
import ButtonDarkMode from "../../components/ButtonDarkMode";

function CountryPage() {
  const { id } = useParams();
  const { countries } = useSelector((state) => state.homePage);
  const navigate = useNavigate();

  if (!countries || countries.length === 0) {
    return <Navigate to="/app" replace={true} />;
  }

  const {
    name: { common, nativeName },
    flags: { alt, png },
    population,
    capital,
    region,
    subregion,
    borders,
    currencies,
    languages,
  } = countries.find((country) => country.cca2 === id);

  return (
    <>
      <ButtonDarkMode />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          border: "1px solid black",
        }}
      >
        <div>
          <button className={styles.btn} onClick={() => navigate("/app")}>
            &larr; back
          </button>
        </div>
        <div
          style={{
            display: "flex",
            padding: "5rem",
            gap: "5rem",
            justifyContent: "center",
          }}
        >
          <img src={png} alt={alt} />
          <div
            style={{ display: "flex", gap: "10px", flexDirection: "column" }}
          >
            <h3>{common}</h3>
            <span>
              <strong>Native Name: </strong>
              {(nativeName && nativeName.eng && nativeName.eng.common) ||
                (nativeName && nativeName.fra && nativeName.fra.common)}
            </span>
            <span>
              <strong>Population: </strong>
              {population}
            </span>
            <span>
              <strong>Region: </strong>
              {region}
            </span>
            <span>
              <strong>Sub-region: </strong>
              {subregion}
            </span>
            <span>
              <strong> Capital: </strong>
              {capital && capital.join(",")}
            </span>
            <span>
              <strong> Borders: </strong>
              {borders?.length && borders.join(",")}
            </span>
            <span>
              <strong> Currencies: </strong>
              {currencies &&
                Object.values(currencies)
                  .map((currency) => currency.name)
                  .join(",")}
            </span>
            <span>
              <strong> Languages: </strong>
              {languages &&
                Object.values(languages)
                  .map((language) => language)
                  .join(",")}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryPage;
