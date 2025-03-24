import GridLights from '../components/GridLights';

const GridLightsMain = () => {
  const gridConfig = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  return (
    <div>
      <GridLights gridConfig={gridConfig} />
    </div>
  );
};

export default GridLightsMain;
