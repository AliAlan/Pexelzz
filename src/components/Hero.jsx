import { useState } from "react";
const Hero = ({ setSearchValue, isVideo, setSearchVideo }) => {
  const [search, setSearch] = useState("");
  function submitHandler(e) {
    e.preventDefault();

    isVideo ? setSearchVideo(search) : setSearchValue(search);
  }
  return (
    <div className="hero">
      <form
        onSubmit={submitHandler}
        className="w-full h-full flex items-center justify-center"
      >
        <input
          type="search"
          placeholder={isVideo ? "Search any videos" : "Search any photos"}
          name="search"
          id="search"
          className="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </form>
    </div>
  );
};

export default Hero;
