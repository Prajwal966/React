import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/Prajwal966")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center m-4">
      Github Respo(s): {data.public_repos}
      <img src={data.avatar_url} alt="GitHub picture" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Prajwal966");
  return response.json();
};
