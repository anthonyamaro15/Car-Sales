import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => ({
    ...state,
  }));
  const { additionalPrice, car, additionalFeatures } = reducer.carReducer;

  const removeFeature = (item) => {
    // dispatch an action here to remove an item
  };

  const buyItem = (item) => {
    // dipsatch an action here to add an item
    dispatch({ type: "ADD_FEATURE", payload: item });
  };
  console.log(reducer.carReducer);

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={additionalFeatures}
          buyItem={buyItem}
        />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

export default App;
