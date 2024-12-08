import { useState } from 'react';

interface IPagination {
    records: number;
    recordsPerPage: number;
    callback: (page: number) => void;
}

const Pagintaion = ({ records, recordsPerPage, callback }: IPagination) => {
    const [page, setPage] = useState(1);
    const pages = Math.ceil(records / recordsPerPage);

    const incrementPage = () => {
        if (page === pages) return;
        setPage(page + 1);
        callback(page + 1);
    };

    const decrementPage = () => {
        if (page === 1) return;
        setPage(page - 1);
        callback(page - 1);
    }

    return (
        <div>
            <button onClick={decrementPage}>Previous</button>
            <button onClick={incrementPage}>Next</button>
            <p>Records: {records}</p>
            <p>Page {page} of {pages}</p>
        </div>
    )
}

export default Pagintaion;