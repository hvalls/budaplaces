// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "OPEN_RESTAURANTS":
      return {
        ...state,
        isRestaurant: true,
      };
    case "OPEN_CAFES":
      return {
        ...state,
        isRestaurant: false,
      };
      case "OPEN_ADD_NEW":
        return {
          ...state,
          isAddNew: true,
        };
        case "CLOSE_ADD_NEW":
          return {
            ...state,
            isAddNew: false,
          };
        case "FILTER_PLACES":
          return {
            ...state,
            filteredPlaces: [action.payload],
          };
    default:
      return state;
  }
};
