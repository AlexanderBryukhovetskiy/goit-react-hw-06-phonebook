import React from "react";
import css from "./Filter.module.css";
import { filterChange } from "redux/filterSlice";
import { useDispatch } from "react-redux";


const Filter = () => {

  const dispatch = useDispatch();

  return (
    <div className={css.searchInput}>
      <label>Find contact by name
        <input
        type="text"
        onChange={dispatch(filterChange)}
        />
      </label>
    </div>
  )
}

// Filter.propTypes = {
//   valueFilter: PropTypes.string.isRequired,
//   onChangeFilter: PropTypes.func.isRequired
// };

export default Filter;


