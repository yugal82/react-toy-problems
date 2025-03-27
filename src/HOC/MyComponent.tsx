type Props = {
  data: any;
  isLoading: boolean;
  error: Error;
};

const MyComponent = ({ data, isLoading, error }: Props) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
