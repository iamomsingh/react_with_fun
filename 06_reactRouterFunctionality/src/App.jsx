import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='bg-green-500 p-4 text-center text-red-500'>Hello</h1>
    </>
  );
}

export default App;
