import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/iamomsingh")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className=' m-4 bg-gray-600 h-screen text-white p-4 text-3xl flex justify-center items-center flex-col'>
      <div className=''>
        <img src={data.avatar_url} alt='Git picture' width={300} />
      </div>
      <div className='m-10 text-center space-y-4'>
        <div>UserId : {data.id}</div>
        <div>UserName : {data.name}</div>
        <div>Github-followers : {data.followers}</div>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  try {
    const response = await fetch("https://api.github.com/users/iamomsingh");
    return await response.json();
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};
