import React, { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("planets");
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="mx-auto container ">
          <h1 className=" text-yellow-400 text-4xl font-bold mt-12 text-center">
            Star Wars Info
          </h1>
          <Navbar setPage={setPage} />
          {page === "planets" ? <Planets /> : <People />}
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
