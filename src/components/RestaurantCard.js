import RES_IMG, { CDN_URL } from "../utils/constants.js";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestauaantCard = ({ data }) => {
  const { cloudinaryImageId, name, avgRating, cuisines } = data?.info;
  // console.log(data);
  // console.log(name);

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>

      <span>{cuisines.join(",")} </span>
    </div>
  );
};

export default RestauaantCard;
