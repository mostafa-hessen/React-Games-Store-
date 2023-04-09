
import { axiosInstance } from "../../API/API";//https://api.rawg.io/api/

 
export const  getUrlData =  (eNum,searched,filter) =>     (dispatch) => {    axiosInstance.get(
   
       `games?key=4efadf7d35904a19996995e218e37c5a&dates=2020-09-01,2022-09-30&page_size=25&page=${eNum}&parent_platforms=${filter}&search=${searched}`//search=${searched}
      

      )
      
      .then((data) => {
             dispatch({ type: "GET-DATA", payload: data.data.results ,data:data});
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

 