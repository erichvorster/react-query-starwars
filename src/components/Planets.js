import React, { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async (page) => {
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);

  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status, isPreviousData } = useQuery({
    queryKey: ["planets", page],
    queryFn: () => fetchPlanets(page),
    keepPreviousData: true,
  });
  console.log(page);

  return (
    <div>
      <h1>Planets</h1>
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 1}
      >
        Previous Page
      </button>
      <span>Current Page : {page + 1}</span>
      <button
        onClick={() => {
          if (!isPreviousData && data.next) {
            setPage((old) => old + 1);
          }
        }}
        // disabled={isPreviousData || !data?.hasMore}
      >
        Next Page
      </button>

      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;
