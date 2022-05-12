import axios from "../utils/axios";

export const fetchCharacters = (limit, offset, searchString) => {
  return new Promise(async (resolve, reject) => {
    try {
      let url = !searchString
        ? `characters?limit=${limit}&offset=${offset}`
        : `characters?limit=${limit}&offset=${offset}&nameStartsWith=${searchString}`;
      const result = await axios.get(url);
      if (result.status >= 200) {
        resolve(result.data.data);
      } else {
        reject("Error Occured");
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const fetchCharacterDetails = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let url = `characters/${id}`;
      const result = await axios.get(url);
      if (result.status >= 200) {
        resolve(result.data.data);
      } else {
        reject("Error Occured");
      }
    } catch (error) {
      reject(error);
    }
  });
};
