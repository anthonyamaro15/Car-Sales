const initialValue = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const carReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_FEATURE":
      return {
        ...state,
        car: {
          ...state.car,
          price: state.car.price + action.payload.price,
          features: [...state.car.features, action.payload],
        },
      };
    case "REMOVE_FEATURE":
      const filtererd = state.car.features.filter(
        (item) => item.id !== action.payload.id
      );
      const removePrice = state.car.features.find(
        (item) => item.price === action.payload.price
      );
      return {
        ...state,
        car: {
          ...state.car,
          price: state.car.price - removePrice.price,
          features: filtererd,
        },
      };
    default:
      return state;
  }
};
