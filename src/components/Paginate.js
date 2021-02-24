import React from 'react';
import '../styles/Paginate.css';

const Paginate = ({ perPage, totalEntries, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalEntries / perPage); i++) {
        pageNumbers.push(i);
    }

    return (
            <div className="center">
                <ul className="pagination">
                    {pageNumbers.map(number => {
                        return (
                            <li key={number} className="page-item">
                                <a
                                    onClick={() => paginate(number)}
                                    href="#"
                                    className="page-link"
                                >
                                    {number}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
    );
};

export default Paginate;
