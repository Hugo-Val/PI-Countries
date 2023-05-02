import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage, handleNumber } from "../../redux/actions/actions";

export default function Paginate({cantPages}) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state);

  function next () {
    dispatch(nextPage());
  };
  function prev () {
    dispatch(prevPage());
  };
  function handleNumberPage (n) {
    dispatch(handleNumber(n));
  };

  return (
    <div>
      {
        page > 1 ? (
            <div>
                <button onClick={prev}>Prev</button>
                <p>{ page-1 }</p>
            </div>
        ) : null
    }
    <h3>{page}</h3>
    {
        page < cantPages ? (
            <div>
                <p>{ page+1 }</p>
                <button onClick={next}>Next</button>
            </div>
        ) : null
    }
    </div>
    ); 
}

    