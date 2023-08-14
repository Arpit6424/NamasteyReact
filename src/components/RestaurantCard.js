import RES_IMG, { CDN_URL } from "../utils/constants.js";

const RestauaantCard = ({ data }) => {
  const { cloudinaryImageId, name, avgRating, cuisines } = data?.info;
  // console.log(data);
  // console.log(name);

  return (
    <div className="m-4 p-4 w-[250px] h-96 rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{avgRating}</h4>

      <span className="break-words ...">{cuisines.join(",")} </span>
    </div>
  );
};

export default RestauaantCard;

//Higher order Component
//Input - RestaurantCard => RestaurantCardPromoted

export const withPromtedLabel = (RestauaantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          {props?.data.info?.aggregatedDiscountInfoV3?.header +
            " " +
            props?.data?.info?.aggregatedDiscountInfoV3?.subHeader}
        </label>
        <RestauaantCard {...props} />
      </div>
    );
  };
};
