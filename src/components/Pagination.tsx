import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react';
import { Dispatch, SetStateAction } from 'react';
import './Pagination.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ currentPage, totalPages, setCurrentPage }: PaginationProps) => {
  return (
    <>
      <div className='arrows'>
        <ArrowCircleLeft size={32} onClick={() => setCurrentPage((pv) => (pv > 1 ? pv - 1 : pv))} />
        <ArrowCircleRight
          size={32}
          onClick={() => setCurrentPage((pv) => (pv < totalPages ? pv + 1 : pv))}
        />
      </div>
      <span className='pages'>
        Page {currentPage} out of {totalPages}
      </span>
    </>
  );
};

export default Pagination;
