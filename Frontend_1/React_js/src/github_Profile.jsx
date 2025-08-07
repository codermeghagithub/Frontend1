import React, {useState,useEffect } from "react";
import Avatar from "./module/Profile/components/Avatar";
import InfoCard from "./module/Profile/components/InfoCard";

const App = () => {
  const [data,setData]=useState(null);
  useEffect(()=>{
  async  function fetchUserDetails(username){
    const res=await fetch(`https://api.github.com/users/${username}`);
    const profileData=await res.json();
    setData(profileData);
  }
  fetchUserDetails("codermeghagithub")
  },[]);

  console.log(data);

return (
  <main className="bg-zinc-900 w-full py-24 flex flex-col justify-start items-center min-h-screen h-full">
    <h1 className="text-5xl text-yellow-500 font-extrabold stroke-2">
      ♥️ Welcome Your Github Profile ♥️
    </h1>

    {!data ? (
      <p className="text-white mt-8 text-xl">Loading...</p>
    ) : (
      <>
        <Avatar imageUrl=
        {data.avatar_url}
        Name={data.name} />
        <div className="grid grid-cols-3 gap-4 w-full max-w-2xl mt-6">
          <InfoCard count={data.followers} title={"Followers"} />
          <InfoCard count={data.following} title={"Following"} />
          <InfoCard count={data.public_repos} title={"Repositories"} />
        </div>
      </>
    )}
  </main>
);
};

export default App;