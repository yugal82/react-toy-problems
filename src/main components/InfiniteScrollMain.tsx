import { useCallback, useRef, useState } from 'react';
import useBookSearch from '../hooks/useBookSearch';

const InfiniteScrollMain = () => {
  const [query, setQuery] = useState<string>('');
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { isLoading, books, hasMore } = useBookSearch({ query, pageNumber });

  const observer = useRef<IntersectionObserver | undefined>(undefined);
  const lastBookRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasMore]
  );

  return (
    <div className="p-10">
      <input
        className="border border-black outline-none transparent"
        type="text"
        name=""
        placeholder="Enter bookname here.."
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {books?.map((book, index) => {
          if (index + 1 === books.length) {
            return (
              <div ref={lastBookRef} key={index} className="border p-2 my-2">
                {book}
              </div>
            );
          } else {
            return (
              <div key={index} className="border p-2 my-2">
                {book}
              </div>
            );
          }
        })}
      </div>
      <div>{isLoading && 'Loading...'}</div>
    </div>
  );
};

export default InfiniteScrollMain;
