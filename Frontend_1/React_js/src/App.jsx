import React, {useState,useEffect } from "react";
import Avatar from "./module/Profile/components/Avatar";
import InfoCard from "./module/Profile/components/InfoCard";

const App = () => {
  const [MArks,setMarks]=useState(0);
  

  let Marks=99;
onIncrement=()=>{}
onDecrement=()=>{}
return (
  <main className="bg-zinc-900 w-full py-24 flex flex-col justify-start items-center min-h-screen h-full">
    <h1 className="text-5xl text-yellow-500 font-extrabold stroke-2">
      ♥️ Welcome Your Github Profile ♥️
    </h1>


<div className="flex flex-row gap-3 justify-center items-center py-24"> 
<button onClick={()=>{Marks=Marks+1}} className="px-4 py-2 bg-emerald-400 text-white text-3xl rounded-md">+</button>
<span className="px-4 py-2 bg-zink-900 text-white text-3xl">{Marks}</span>
{Marks}
<button onClick={()=>{Marks=Marks+1}} className="px-5 py-2 bg-red-500 text-white text-3xl rounded-md">-</button>
</div>

    {/* {!data ? (
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
    )} */}

  </main>
);
};

export default App;













// import Card from "./Card";
// import H1 from "./H1";

// function App() {
//   return (
//     <div className="app">
//       <Card
//         imageUrl="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/artificial-intelligence-075957488-16x9.jpeg?VersionId=bQ7a3uGrXAFwbtKU1mQPt6cwZPB.l_Zo&size=690:388"
//         title="60% say artificial intelligence will replace jobs in future: MOTN poll"
//         description="The survey revealed that 60 per cent of those polled believed that AI would eventually end up disrupting the job market while 30% felt that AI will not replace jobs, according to the January edition of the India Today-CVoter Mood of the Nation opinion poll.Despite assurances of artificial intelligence (AI) only adding to human conductivity, wariness over AI replacing jobs continues among the public, India Today-CVoter Mood of the Nation opinion poll finds.The India Today-CVoter Mood of the Nation (MOTN) poll was conducted between January 2 and February 9, 2025, surveying 1,25,123 voters across all Lok Sabha segments. The survey included fresh interviews as well as long-term tracking data."
//       />

//       <Card
//         imageUrl="https://images.indianexpress.com/2025/08/Truecaller-iPhone-app-recording.png?w=640"
//         title="Truecaller call recording on iPhones to stop from September 30: Here’s how to save them now"
//         description="Truecaller, the popular caller ID and spam blocking app, has announced that the call recording feature on iPhones will be discontinued starting September 30. In a statement to TechCrunch, Truecaller’s head of iOS, Nakul Kabra, said that the company took the decision to do away with call recording on iOS as it wants to focus more on other features like Live Caller ID and automatic spam call blocking."
//       />
//     </div>
//   );
// }

// export default App;
