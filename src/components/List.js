import React, { useState } from 'react';
import Paginate from './Paginate';
import '../styles/List.css';

const List = ({ props }) => {
    const restaurantsList = props;
    const [pageNum, setPageNum] = useState(1);
    const [perPage] = useState(10);

    const indexOfLastPage = pageNum * perPage;
    const indexOfFirstPage = indexOfLastPage - perPage;
    const currentEntries = restaurantsList.slice(indexOfFirstPage, indexOfLastPage);

    const paginate = pageNumber => setPageNum(pageNumber);

    if (restaurantsList.length <= 0) {
        return (
            <>
                <h2>No results found.</h2>
            </>
        );
    } else {
        return (
            <>
                <h2>Restaurants List:</h2>
                <table>
                    <tbody>
                    <tr >
                        <td>Name</td>
                        <td>City</td>
                        <td>Phone</td>
                        <td>Genres</td>
                    </tr>
                    {currentEntries.map(restaurantsList => {
                        return (
                            <tr key={restaurantsList.telephone}>
                                <td>{restaurantsList.name}</td>
                                <td>
                                    {restaurantsList.city}, {restaurantsList.state}
                                </td>
                                <td>{restaurantsList.telephone}</td>
                                <td>{restaurantsList.genre.split(',').join(', ')}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <Paginate
                    perPage={perPage}
                    totalEntries={restaurantsList.length}
                    paginate={paginate}
                />
            </>
        );
    }
};

export default List;
