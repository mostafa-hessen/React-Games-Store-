//  import {axiosInstance} from "../../API/API"

// import axios from "axios";
import { axiosInstance } from "../../API/API";//https://api.rawg.io/api/

 
export const  getUrlData =  (eNum,searched,filter) =>     (dispatch) => {    axiosInstance.get(
   
       `games?key=4efadf7d35904a19996995e218e37c5a&dates=2020-09-01,2022-09-30&page_size=25&page=${eNum}&parent_platforms=${filter}&search=${searched}`//search=${searched}
      

      )
      // &platforms={filter}
      
      .then((data) => {
         //   setTimeout(() => {
            dispatch({ type: "GET-DATA", payload: data.data.results ,data:data});
         // }, 1000); 
         });
  };




 
  export const SearchedValue = (e) =>   (dispatch) => {
    
         dispatch({ type: "SEARCH-VALUE", payload:e});
       
  };


  export const FilterValue = (e) =>   (dispatch) => {
    
   dispatch({ type: "Filter-VALUE", payload:e});
 
};




export const GameDetaileFunc = (e) =>   (dispatch) => {
    
   dispatch({ type: "GET-Detailes", payload:e});
 
};


export const getFromLocalStorage = (e) =>   (dispatch) => {
    
   dispatch({ type: "GET-FromLocalSorage", payload:e});
 
};


export const rmoveFromLocalStorage = (e) =>   (dispatch) => {
    
   dispatch({ type: "remove-FromLocalSorage", payload:e});
 
};

// getFromLocalStorage
//   export const GetSearched = (searched) =>   (dispatch) => {
//    return   axiosInstance.get(
//         `games?key=4efadf7d35904a19996995e218e37c5a&dates=2020-09-01,2022-09-30&page_size=15&search=${searched}`
//       )
//       .then((data) => {
//          dispatch({ type: "SEARCH-DATA", payload: data.data.results });
//       });
//   };


  // ?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k&page=${number}
