import { useDispatch, useSelector } from "react-redux";
import styles from "./Filter.module.css";
import { useEffect, useState } from "react";
import { filteredData } from "../pages/Home/homePageSlice";

function Filters() {
  const [searchByName, setSearchByName] = useState("");
  const [region, setRegion] = useState("");
  const [subRegion, setSubRegion] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [orderBy, setOrerBy] = useState("asc");
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.homePage);

  useEffect(() => {
    let filterData = countries.filter((country) => {
      let isRequired = true;
      if (
        searchByName &&
        !(
          country.name.common
            .toLowerCase()
            .startsWith(searchByName.toLowerCase()) ||
          country.name.official
            .toLowerCase()
            .startsWith(searchByName.toLowerCase())
        )
      ) {
        isRequired = false;
      }
      if (region && country.region !== region) {
        isRequired = false;
      }
      if (subRegion && country.subregion !== subRegion) {
        isRequired = false;
      }
      return isRequired;
    });
    if (sortBy === "area") {
      filterData = [...filterData].sort((a, b) =>
        orderBy === "asc" ? a.area - b.area : b.area - a.area
      );
    } else if (sortBy === "population") {
      filterData = [...filterData].sort((a, b) =>
        orderBy === "asc"
          ? a.population - b.population
          : b.population - a.population
      );
    }
    dispatch(filteredData(filterData));
  }, [searchByName, region, subRegion, sortBy, orderBy, countries, dispatch]);

  function handleClearFilters() {
    setRegion("");
    setSubRegion("");
    setSortBy("");
    setOrerBy("asc");
    setSearchByName("");
  }
  const regions = countries.reduce((acc, country) => {
    if (country.region && !acc.includes(country.region)) {
      acc.push(country.region);
    }
    return acc;
  }, []);
  const subregions = countries.reduce((acc, country) => {
    if (
      country.region === region &&
      country.subregion &&
      !acc.includes(country.subregion)
    ) {
      acc.push(country.subregion);
    }
    return acc;
  }, []);
  return (
    <div
      style={{
        display: "flex",
        padding: "2rem",
        gap: "2rem",
        justifyContent: "flex-end",
      }}
    >
      <input
        type="text"
        placeholder="🔎 Search a country..."
        className={styles.select}
        value={searchByName}
        onChange={(e) => setSearchByName(e.target.value)}
      />
      <select
        name="Regions"
        id=""
        onChange={(e) => setRegion(e.target.value)}
        className={styles.select}
      >
        {regions.map((region) => {
          return (
            <option value={region} key={region}>
              {region}
            </option>
          );
        })}
      </select>
      <select
        name="Subregions"
        id=""
        className={styles.select}
        onChange={(e) => setSubRegion(e.target.value)}
      >
        {subregions.length ? (
          subregions.map((region) => {
            return (
              <option value={region} key={region}>
                {region}
              </option>
            );
          })
        ) : (
          <option>none</option>
        )}
      </select>
      <select
        name="Sortby"
        id=""
        className={styles.select}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="area">Area</option>
        <option value="population">Population</option>
      </select>
      <select
        name="orderby"
        id=""
        className={styles.select}
        onChange={(e) => setOrerBy(e.target.value)}
      >
        <option value="asc">ASC</option>
        <option value="dsc">DSC</option>
      </select>
      <button onClick={handleClearFilters}>Clear Filters</button>
    </div>
  );
}

export default Filters;
