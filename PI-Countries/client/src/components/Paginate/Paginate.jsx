import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage, handleNumber } from "../../redux/actions/actions";

export default function Paginate({cantPages}) {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state);

  function next () {
    dispatch(nextPage());
  };
  function prev () {
    dispatch(prevPage());
  };
  // function handleNumberPage (n) {
  //   dispatch(handleNumber(n));
  // };

  return (
    <div>
      {
        currentPage > 1 ? (
            <div>
                <button onClick={prev}>Prev</button>
                <p>{ currentPage-1 }</p>
            </div>
        ) : null
    }
    <h3>{currentPage}</h3>
    {
        currentPage < cantPages ? (
            <div>
                <p>{ currentPage+1 }</p>
                <button onClick={next}>Next</button>
            </div>
        ) : null
    }
    </div>
    ); 
}

    