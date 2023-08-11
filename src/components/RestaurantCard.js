import RES_IMG, { CDN_URL } from "../utils/constants.js";

const RestauaantCard = ({ data }) => {
  const { cloudinaryImageId, name, avgRating, cuisines } = data?.info;
  // console.log(data);
  // console.log(name);

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{avgRating}</h4>

      <span>{cuisines.join(",")} </span>
    </div>
  );
};

export default RestauaantCard;
