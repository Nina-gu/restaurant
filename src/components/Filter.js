import React from 'react';
import '../styles/Filter.css';

const Filter = props => {
    const opts = props.opts;
    const filterName = props.name;

    return (
        <form className="filter">
            <label>Filter by {filterName}</label>
            <select name={filterName} onChange={props.selectHandler}>
                <option value="" defaultValue="">
                    All
                </option>
                {opts.map(item => {
                    return (
                        <option key={item.id} value={item.name}>
                            {item.name}
                        </option>
                    );
                })}
            </select>
        </form>
    );
};

export default Filter;