import { useEffect, useState } from 'react';

const withDataFetching = (WrappedComponent, url: string) => {
  return () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error while fetching data');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    return <WrappedComponent data={data} isLoading={isLoading} error={error} />;
  };
};

export default withDataFetching;
