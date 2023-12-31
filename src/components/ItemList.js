import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items[0].card.info.name);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //dispatch the action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div>
              <h2 className="font-bold">{item.card.info.name}</h2>
              <span>- ₹ {item.card.info.price / 100} </span>
              <p className="font-light ">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-4">
            <div>
              <button
                className="a text-white bottom-10 bg-black"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
              <div>
                <img
                  className="w-full"
                  src={CDN_URL + item.card.info.imageId}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
