import { useEffect, useState } from 'react';

type SuggestionProps = {
  recipeData: any;
};

const AutoCompleteSuggestionComponent = ({ recipeData }: SuggestionProps) => {
  return (
    <div className="w-1/3 text-left bg-gray-200 border border-black">
      {recipeData?.map((recipe) => (
        <div key={recipe?.id} className="hover:bg-gray-300 cursor-pointer">
          <p className="p-1">{recipe?.name}</p>
        </div>
      ))}
    </div>
  );
};

const AutoComplete = () => {
  const [query, setQuery] = useState<string>('');
  const [recipeData, setRecipeData] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [cahce, setCahce] = useState({});

  const fetchData = async () => {
    if (cahce[query]) {
      console.log('returned from cahce');
      setRecipeData(cahce[query]);
      return;
    }

    const URL = `https://dummyjson.com/recipes/search?q=${query}`;
    const response = await fetch(URL);
    const data = await response.json();
    setRecipeData(data?.recipes);
    setCahce((prev) => ({ ...prev, [query]: data?.recipes }));
  };

  useEffect(() => {
    const timer = setTimeout(fetchData, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <div className="w-full mt-10 flex flex-col items-center justify-center">
      <input
        onChange={(e) => setQuery(e.target.value)}
        className="w-1/3 py-2 px-4 border border-black"
        type="text"
        placeholder="Search anything.."
        value={query}
        onBlur={() => setShowSuggestions(false)}
        onFocus={() => setShowSuggestions(true)}
      />

      {showSuggestions && <AutoCompleteSuggestionComponent recipeData={recipeData.slice(0, 10)} />}
    </div>
  );
};

export default AutoComplete;
