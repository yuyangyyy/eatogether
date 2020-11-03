import Axios from "axios";

const autoComplete = (letters, id, key) => {
  const path = `food/ingredients/autocomplete?query=${letters}&number=2&metaInformation=false`;
  const url = `https://api.spoonacular.com/${path}&apiKey=${key}`;
  const result = {
    name: [],
    id: "",
  };
  Axios(url)
    .then((res) => res.data)
    .then((data) => {
      data.forEach((x) => {
        result.name.push(x.name);
        result.id = id;
      });
      return result;
    });
  return result;
};

export default autoComplete;
