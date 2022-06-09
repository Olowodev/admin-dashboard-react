import React from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Pagination = ({currentPage, pages, setCurrentPage, numOfData, data}) => {

    const handlePageChangenext = () => {
        if (currentPage < pages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePageChangefirst = () => {
        setCurrentPage(1)
    }

    const handlePageChangelast = () => {
        setCurrentPage(pages)
    }
    const handlePageChangeprevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
  return (
    <div className='pagination-container'>
        <div className='pagination-text'>
            <p>There are {numOfData} {data}</p>
        </div>
        <div className="pagination">
            <div onClick={handlePageChangefirst}>
                <FaAngleDoubleLeft style={{ color : currentPage === 1 ? 'gray' : 'black'}} />
            </div>
            <div onClick={handlePageChangeprevious}>
                <FaAngleLeft style={{ color : currentPage === 1 ? 'gray' : 'black'}} />
            </div>
            <div>
                {currentPage}
            </div>
            <div onClick={handlePageChangenext}>
                <FaAngleRight style={{ color : currentPage === pages ? 'gray' : 'black'}} />
            </div>
            <div onClick={handlePageChangelast}>
                <FaAngleDoubleRight style={{ color : currentPage === pages ? 'gray' : 'black'}} />
            </div>
        </div>
    </div>
  )
}

export default Pagination