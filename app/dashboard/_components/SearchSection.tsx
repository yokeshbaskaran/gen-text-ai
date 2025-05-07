import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchProps {
  onSearchInput: (value: string) => void;
}

const SearchSection = ({ onSearchInput }: SearchProps) => {
  const [inputValue, setInputValue] = useState("");

  //de-bouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchInput(inputValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <div>
      <div className="p-5 text-white bg-gradient-to-br from-purple-400 via-purple-600 to-blue-500 flex flex-col justify-center items-center gap-3">
        <h2 className="text-2xl font-bold"> Browse all templates</h2>
        <p>What would like to create Today?</p>

        <div className="w-full flex justify-center">
          <div className="w-1/2 my-3 p-2 flex gap-2 items-center border rounded-md bg-white">
            <Search className="text-primary" />
            <input
              className="bg-transparent text-black outline-none"
              type="text"
              placeholder="Search.."
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
