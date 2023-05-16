import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { searchByCountry } from "../config";
import { Button } from "../components/Button";
import Info from "../components/Info";
const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const [country, setCountry] = useState(null);
  console.log(country);
  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);
  return (
    <div>
      {" "}
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>{" "}
      {country && <Info navigate={navigate} {...country} />}
    </div>
  );
};

export default Details;
