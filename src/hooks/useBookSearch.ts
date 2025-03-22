import { useEffect, useState } from "react";

interface ArgTypes {
    query: string;
    pageNumber: number;
}

const useBookSearch = ({ query, pageNumber }: ArgTypes) => {
    // states
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [books, setBooks] = useState<string[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(false);

    const fetchBooks = async (query: string, pageNumber: number) => {
        setIsLoading(true);
        const URL = `https://openlibrary.org/search.json?q=${query}&page=${pageNumber}`;
        const response = await fetch(URL);
        const data = await response.json();
        setBooks(prevBooks => {
            return [...new Set([...prevBooks, ...data.docs.map((book: any) => book.title)])]
        })
        setIsLoading(false);
        setHasMore(data.docs.length > 0);
    }

    useEffect(() => {
        setBooks([]);
    }, [query])


    useEffect(() => {
        fetchBooks(query, pageNumber);
    }, [query, pageNumber])


    return { isLoading, books, hasMore };
}

export default useBookSearch;

