import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const Pagination = ({ totalUsers, currentUsers, userPerPages, currentPage, setCurrentPage }) => {
    //GET PAGES NUMBER BY FOR LOOP
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalUsers / userPerPages); i++) {
        pages.push(i)
    }
    //PREVIOUS PAGE FUCTION
    const previousPage = () => {
        if (currentPage === 1) {
            toast.error("there is no previous page")
        } else {
            setCurrentPage(currentPage - 1)
        }
    }
    //NEXT PAGE FUCTION
    const NextPage = () => {
        //FIND MAX PAGE NUM
        let maxPage = Math.ceil(totalUsers / userPerPages);
        if (currentPage === maxPage) {
            toast.error("there is no next page")
        } else {
            setCurrentPage(currentPage + 1)
        }
    }


    return (
        <div>
            <div className="flex justify-center space-x-1 dark:text-gray-100">
                {/* PREVIOUS PAGE BUTTON */}
                <button
                    onClick={previousPage}
                    title="previous" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                {
                    pages.map((page, index) => {
                        return <button
                            key={index}
                            onClick={() => setCurrentPage(page)}
                            type="button"
                            className={` ${page === currentPage ? "text-red-500 " : ""}inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md`}>{page}</button>
                    })
                }
                {/* NEXT PAGES BUTTON */}
                <button
                    onClick={NextPage}
                    title="next" type="button" className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800">
                    <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
                <Toaster />

            </div>
        </div>
    );
};

export default Pagination;