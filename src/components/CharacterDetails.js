import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacterDetails } from "../services/characters";
import { motion } from "framer-motion";
import Loading from "./Loading";
import { transition } from "../utils/functions";

const CharacterDetails = () => {
  const [character, setCharacter] = useState();
  let params = useParams();
  useEffect(() => {
    fetchCharacterDetails(params.charactedId).then((res) => {
      if (res.results.length > 0) {
        setCharacter(res.results[0]);
      }
    });
    return () => {};
  }, []);

  const checkImageExist = (url) => {
    const urlSplit = url.split("/");
    if (urlSplit[urlSplit.length - 1] === "image_not_available") return false;
    return true;
  };

  return character ? (
    <div className="py-4">
      <div className=" ">
        <motion.section
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={transition}
          className=""
        >
          <div className="bg-black text-white text-8xl font-[Koulen] font-extrabold text-center py-12">
            <div>{character.name}</div>
          </div>
          {character.description && (
            <div className="bg-white px-4 text-3xl font-[Koulen] font-extrabold text-center py-12">
              <div>{character.description}</div>
            </div>
          )}
          <div className={` bg-white mb-4`}>
            {checkImageExist(character.thumbnail.path) && (
              <div className=" flex justify-center ">
                <motion.img
                  initial={{ scale: 1.4 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className=" rounded-xl object-contain object-left-top  h-[750px]"
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={character.name}
                />
              </div>
            )}
            <div className=" px-4">
              {character.series.available > 0 && (
                <div className="py-5">
                  <div className="font-bold text-3xl border-b-2 border-[#cecee]">
                    Series
                  </div>
                  {character.series.items.map((srs) => (
                    <div className="text-xl font-bold">{srs.name}</div>
                  ))}
                </div>
              )}
              {character.stories.available > 0 && (
                <div className="py-5">
                  <div className="font-bold text-3xl border-b-2 border-[#cecee]">
                    Stories
                  </div>
                  {character.stories.items.map((srs) => (
                    <div className="text-xl font-bold">{srs.name}</div>
                  ))}
                </div>
              )}
              {character.events.available > 0 && (
                <div className="py-5">
                  <div className="font-bold text-3xl border-b-2 border-[#cecee]">
                    Events
                  </div>
                  {character.events.items.map((srs) => (
                    <div className="text-xl font-bold">{srs.name}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default CharacterDetails;
