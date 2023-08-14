import ItemList from "./ItemList";

const RestaurantCategory = ({
  data,
  showItems,
  setShowIndex,
  prevInd,
  currInd,
}) => {
  const handleClick = () => {
    if (prevInd === currInd) setShowIndex(null);
    else setShowIndex(currInd);
  };
  // console.log(data.card.card.itemCards);
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      {/* Header */}
      <div
        className="flex justify-between cursor-pointer hover:text-lg"
        onClick={handleClick}
      >
        <span>
          {data.card.card.title}({data.card.card.itemCards.length})
        </span>
        <span>{showItems ? "➡️" : "⬇️"}</span>
      </div>
      {/* listOfItem */}

      {showItems && (
        <div>
          <ItemList items={data.card.card.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
