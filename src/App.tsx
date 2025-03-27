import './App.css';
import { ThemeProvider, useTheme } from './context/useLightDarkContext';
import LightDarkMain from './main components/LightDarkMain';
// import TabFormMain from './main components/TabFormMain';
// import OtpLoginMain from './main components/OtpLoginMain';
// import AutoCompleteMain from './main components/AutoCompleteMain';
// import FileExplorerMain from './main components/FileExplorerMain';
// import GridLightsMain from './main components/GridLightsMain';
// import ProgressBarMain from './main components/ProgressBarMain';
// import ImageSliderMain from './main components/ImageSliderMain';
// import InfiniteScrollMain from './main components/InfiniteScrollMain';
// import PaginationMain from './main components/PaginationMain';

// Higher Order Component
// import MyComponent from './HOC/MyComponent';
// import withDataFetching from './HOC/withDataFetching';

// const EnhancedComponent = withDataFetching(MyComponent, 'https://jsonplaceholder.typicode.com/posts');

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} min-h-screen`}>
      {/* <PaginationMain /> */}
      {/* <InfiniteScrollMain /> */}
      {/* <ImageSliderMain /> */}
      {/* <ProgressBarMain /> */}
      {/* <GridLightsMain /> */}
      {/* <FileExplorerMain /> */}
      {/* <AutoCompleteMain /> */}
      {/* <OtpLoginMain /> */}
      {/* <TabFormMain /> */}
      <LightDarkMain />

      {/* Higher Order Component */}
      {/* <EnhancedComponent /> */}
    </div>
  );
};

export default App;
