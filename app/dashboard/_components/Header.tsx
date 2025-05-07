import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center shadow-sm border-b-2">
      <div className="max-w-lg p-2 flex gap-2 items-center border rounded-md">
        <Search />
        <input className="outline-none" type="text" placeholder="Search..." />
      </div>

      <div>
        <h2 className="p-2 px-3 bg-primary rounded-full text-xs text-white">
          Join Membership!
        </h2>
      </div>
    </div>
  );
};

export default Header;
