import React, { useState } from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeople = async (page) => {
  const res = await fetch(`http://swapi.dev/api/people/?page=${page}`);
  return res.json();
};

const People = () => {
  const [page, setPage] = useState(1);
  const { data, status, isPreviousData } = useQuery({
    queryKey: ["planets", page],
    queryFn: () => fetchPeople(page),
    keepPreviousData: true,
  });
  console.log(data);

  return (
    <div className="px-36">
      <div className="py-8 pl-12">
        <h1 className="text-4xl font-bold text-gray-300">People</h1>
        <div className="pt-8">
          <button
            className="inline-flex items-center justify-center h-10 px-10 py-0 text-md font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            onClick={() => setPage((old) => Math.max(old - 1, 0))}
            disabled={page === 1}
          >
            Previous Page
          </button>
          <span className="mx-8 text-gray-200 border-bottom">
            Current Page : {page + 1}
          </span>
          <button
            className="inline-flex items-center justify-center h-10 px-14 py-0 text-md font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
            onClick={() => {
              if (!isPreviousData && data.next) {
                setPage((old) => old + 1);
              }
            }}
            // disabled={isPreviousData || !data?.hasMore}
          >
            Next Page
          </button>
        </div>
      </div>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
