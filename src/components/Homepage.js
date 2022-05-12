import React from "react";
import Pagination from "./Pagination";
import CharacterCard from "./CharacterCard";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./Loading";
import { TextField } from "@mui/material";
import { fetchCharacters } from "../services/characters";
import useDebounce from "../hooks/useDebounce";
import { transition } from "../utils/functions";
import { motion } from "framer-motion";
const Home = () => {
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
  });
  const [searchString, setSearchString] = useState("");
  const debouncedValue = useDebounce(searchString, 800);
  useEffect(() => {
    getCharacters(1);
    return () => {};
  }, []);

  const handleChange = (event) => {
    setCharacters();
    setPagination({ current: 1 });
    if (event.target.value) {
      setSearchString(event.target.value);
    } else {
      setSearchString();
    }
  };

  useEffect(() => {
    getCharacters(1, searchString);
  }, [debouncedValue]);

  const getCharacters = async (page, search) => {
    setLoading(true);
    if (!characters || !characters[page] || searchString) {
      const data = await fetchCharacters(
        20,
        page > 1 ? page * 20 - 20 : 0,
        search
      ).then((res) => {
        if (!pagination.totalPages || search) {
          let num = res.total / 20;
          if (num % 1 !== 0) {
            num = Math.floor(num);
          }
          setPagination({
            ...pagination,
            totalPages: num ? num : 1,
            current: page,
          });
        }
        return res.results;
      });

      setCharacters({ ...characters, [page]: data });
    }
    setLoading(false);
  };
  return (
    <div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        className="flex pb-5"
      >
        <TextField
          transition={transition}
          required
          id="outlined-required"
          placeholder="Search your Marvel Character"
          sx={{ color: "#fff", flex: 1, marginRight: 1 }}
          onChange={handleChange}
        />
        {/* <Button variant="contained">Search</Button> */}
      </motion.div>

      {loading || !characters || !characters[pagination.current] ? (
        <Loading />
      ) : (
        <>
          <Pagination
            count={pagination.totalPages ? pagination.totalPages : 10}
            onChange={(e, number) => {
              setPagination({ ...pagination, current: number });
              getCharacters(number, searchString);
            }}
            page={pagination.current}
          />
          <div className=" grid xs:grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {characters[pagination.current].map((mc) => {
              return (
                <CharacterCard
                  key={mc.id}
                  img={`${mc.thumbnail.path}.${mc.thumbnail.extension}`}
                  name={mc.name}
                  id={mc.id}
                />
              );
            })}
          </div>
          <Pagination
            count={pagination.totalPages ? pagination.totalPages : 10}
            onChange={(e, number) => {
              setPagination({ ...pagination, current: number });
              getCharacters(number, searchString);
            }}
            page={pagination.current}
          />
        </>
      )}
    </div>
  );
};

export default Home;
