
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import Avatar from "./module/Profile/components/Avatar";
import InfoCard from "./module/Profile/components/InfoCard";
import EmptyState from "./module/Profile/components/EmptyState";
const App = () => {
  const [username, setUsername] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsPending(true);
      const res = await fetch(`https://api.github.com/users/${username}`);

      if (!res.ok) {
        toast.error("User not found");
        setData(null);
        return;
      }

      const userData = await res.json();
      setData(userData);
      toast.success("User found");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsPending(false);
    }
  };

console.log(data);

  return (
    <div className="bg-amber-50 dark:bg-zinc-900 w-full py-24 flex flex-col justify-start items-center min-h-screen h-full">
      <Toaster />

      <h1 className="text-5xl text-yellow-500 font-extrabold stoke-2">
        Welcome to Your Github Profile
      </h1>

      <div className="flex flex-row gap-3 justify-center items-center py-24 w-full">
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-row gap-3 justify-center items-center"
        >
          <input
            type="text"
            placeholder="Enter Your Github Username"
            className="px-4 py-4 rounded-md border border-zinc-500 bg-black/90 text-white max-w-3xl w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            disabled={isPending}
            type="submit"
            className="px-4 py-4 rounded-md bg-indigo-400 hover:bg-indigo-500 font-semibold text-white"
          >
            {isPending ? "Searching..." : "Search"}
          </button>
        </form>
      </div>

      {isPending && (
        <div className="flex flex-row gap-3 justify-center items-center py-24 w-full">
          <BeatLoader color="#ffd700" size={10} />
        </div>
      )}

      {/* {data && (
    <div className="text-center">
        <Avatar imageUrl={data.avatar_url} Name={data.name} />
        <div className="grid grid-cols-3 gap-4 w-full max-w-2xl mt-6">
          <InfoCard count={data.followers} title={"Followers"} />
          <InfoCard count={data.following} title={"Following"} />
          <InfoCard count={data.public_repos} title={"Repositories"} />
        </div>
        </div>
      )} */}

      {
        data===null ? (<EmptyState imageSrc={"/undraw_remote.svg"}
        title={"No user Found"}
        description={"Please enter a valid username"}/>):
        (
<div className="text-center">
        <Avatar imageUrl={data.avatar_url} Name={data.name} />
        <div className="grid grid-cols-3 gap-4 w-full max-w-2xl mt-6">
          <InfoCard count={data.followers} title={"Followers"} />
          <InfoCard count={data.following} title={"Following"} />
          <InfoCard count={data.public_repos} title={"Repositories"} />
        </div>
        </div>
        )}
        </div>
        );
      }
    
export default App;
