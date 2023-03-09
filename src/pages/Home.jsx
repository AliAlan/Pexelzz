import { useState } from "react";
import { Hero, Card } from "../components";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [searchVaue, setSearchValue] = useState("");

  const { response } = searchVaue
    ? useFetch(`v1/search?query=${searchVaue}?per_page=20`)
    : useFetch("v1/curated?per_page=20");

  return (
    <div className="container mx-auto px-4">
      <Hero setSearchValue={setSearchValue} />
      <div className="grid grid-cols-3 gap-6 items-start py-8">
        {response ? (
          response?.photos?.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              src={item.src.original}
              w={item.width}
              h={item.height}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Home;
