import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) return <div></div>;

  const { itemCards } = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
  const categoriesItems =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (item) =>
        item.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  return (
    <div className="text-center">
      <h1>{name}</h1>
      <h2>{costForTwoMessage}</h2>
      {categoriesItems.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category}
          showItems={index === showIndex ? true : false}
          setShowIndex={(index) => setShowIndex(index)}
          prevInd={showIndex}
          currInd={index}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
