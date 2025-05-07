import { UserProfile } from "@clerk/nextjs";

const Settings = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <UserProfile routing="hash" />
      </div>
    </>
  );
};

export default Settings;
