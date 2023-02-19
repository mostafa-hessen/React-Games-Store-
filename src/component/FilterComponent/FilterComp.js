import React ,{ useEffect,useState }from "react";
import "./FilterComp.css";

import { useDispatch, useSelector } from "react-redux";
import { FilterValue } from "../../redux/actions/index";

function FilterComp() {
  const dispatch = useDispatch();
  const numberOFFilterd = useSelector((state) => state.data); // array of Games => 15 array

  let [Filtervalue,setFiltervalue]=useState(7)
  useEffect(() => {
   dispatch(FilterValue(Filtervalue))
     
  }, [Filtervalue])

  
  return (
    <div className="Filter__container text-capitalize ">
      <h6 className="mb-4">filter</h6>

      <ul className="unstyle-list m-0 p-0">


       

      <li className="list-group-item d-flex justify-content-between align-items-center mb-3">
            <div>

                <input className="form-check-input" type="radio" name="flexRadioDefault"  value={1} onClick={(e)=>setFiltervalue(e.target.value)} id="flexRadioDefault0"/>
                <label className="form-check-label ms-2" htmlFor="flexRadioDefault0">
                Trending
                </label>
            </div>
          <span className="badge bg-danger rounded-pill">20312</span>
        </li>

      <li className="list-group-item d-flex justify-content-between align-items-center mb-3">
            <div>

                <input className="form-check-input" type="radio" name="flexRadioDefault" value={4} onClick={(e)=>setFiltervalue(e.target.value)} id="flexRadioDefault1"/>
                <label className="form-check-label ms-2" htmlFor="flexRadioDefault1">
                    Popular
                </label>
            </div>
          <span className="badge btn-orange rounded-pill">3400</span>
        </li>

        <li className="list-group-item d-flex justify-content-between align-items-center mb-3" >
            <div>

                <input className="form-check-input" type="radio"  name="flexRadioDefault" value={5} onClick={(e)=>setFiltervalue(e.target.value)} id="flexRadioDefault2"/>
                <label className="form-check-label ms-2" htmlFor="flexRadioDefault2">
                    Top Rated
                </label>
            </div>
          <span className="badge btn-gold rounded-pill">1100</span>
        </li>

      </ul>
    </div>
  );
}

export default FilterComp;
