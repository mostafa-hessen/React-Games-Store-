const intialState = {
  Games: [],
};

export  function GetDataReducer (state = intialState, action)  {
  // console.log("=>",action.payload);
  switch (action.type) {
    case "GET-DATA":
      return { ...state, Games: action.payload,data:action.data };
      case "SEARCH-VALUE":
        return { ...state, searchValue: action.payload };
      case "Filter-VALUE":
        return { ...state, filterValue: action.payload };
    default:
      return state;
  }
};

const intialState1 = {
  GameDetailes:{}
};


export  function GetElementDetailes (state = intialState1, action)  {
  // console.log("=>",action.payload);
  switch (action.type) {
    case "GET-Detailes":
      return { ...state, GameDetailes: action.payload };
      
    default:
      return state;
  }
};

const intialState2 = {
  FavouriteGames:{}
};

export  function GetFavourit (state = intialState2, action)  {
  // console.log("=>",action.payload);
  switch (action.type) {
    case "GET-FromLocalSorage":
      return { ...state, favoriteGames: action.payload };
      
    default:
      return state;
  }
};


// export  function removeFromFavourite (state = intialState2, action)  {
//   // console.log("=>",action.payload);
//   switch (action.type) {
//     case "remove-FromLocalSorage":
//       return { state.filter };
      
//     default:
//       return state;
//   }
// };
