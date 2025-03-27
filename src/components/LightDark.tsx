import { useTheme } from '../context/useLightDarkContext';

const LightDark = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className="w-full py-6 px-10">
      <nav className="w-full flex items-center justify-between">
        <p>Light-Dark Mode Problem</p>
        <ul className="flex items-center justify-center gap-x-4">
          <li className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-500">Home</li>
          <li className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-500">About</li>
          <li className="cursor-pointer hover:scale-110 transition-all ease-in-out duration-500">Settings</li>
        </ul>
        <button
          className={`py-2 px-4  ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'} rounded-2xl`}
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </nav>
    </div>
  );
};

export default LightDark;
