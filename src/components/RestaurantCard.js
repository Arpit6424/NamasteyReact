import RES_IMG from "../utils/constants.js";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestauaantCard = ({ data }) => {
  const { name, avgRating, cuisines } = data?.info;
  // console.log(data);
  // console.log(name);

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={RES_IMG} alt="" />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>

      <span>{cuisines.join(",")} </span>
    </div>
  );
};

export default RestauaantCard;
