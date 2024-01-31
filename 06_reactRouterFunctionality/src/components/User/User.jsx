import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div className='w-full h-screen flex justify-center items-center text-4xl'>
      User : {id}
    </div>
  );
};

export default User;
