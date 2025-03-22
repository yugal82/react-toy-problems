import React from 'react';

interface Props {
  postsPerPage: number;
  totalPosts: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }: Props) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  const paginate = (number: number) => {
    setCurrentPage(number);
  };

  return (
    <div>
      <ul className="flex justify-center">
        {pageNumber?.map((number) => (
          <li key={number} className="border border-black p-2">
            <button onClick={() => paginate(number)} className="text-blue-500 cursor-pointer">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
