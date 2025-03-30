import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "./homePageSlice";
import { memo, useEffect } from "react";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import CountryList from "../../components/CountryList";
import ButtonDarkMode from "../../components/ButtonDarkMode";

function HomePage() {
  const dispatch = useDispatch();

  const { isLoading, isError, errMessage, filteredData } = useSelector(
    (state) => state.homePage
  );
  useEffect(() => {
    if (!filteredData.length) {
      dispatch(getCountries());
    }
  }, [dispatch, filteredData.length]);

  if (isLoading) return <Loader />;
  if (!isLoading && isError) return <Error message={errMessage} />;
  return (
    <div>
      <ButtonDarkMode />
      <CountryList countries={filteredData} />
    </div>
  );
}

export default memo(HomePage);
