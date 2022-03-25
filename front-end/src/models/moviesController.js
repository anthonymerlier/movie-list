import axios from "axios";
import _ from "lodash";

export const getMovies = async () => {
  const response = await axios.get(API_HOST + "movies?populate=*", {
    headers: {
      Authorization: "Bearer " + API_BEARER,
    },
  });
  let moviesData = _.shuffle(response.data.data);
  return moviesData;
};

export const getMovie = async (id) => {
  const response = await axios.get(API_HOST + "movies/" + id + "?populate=*", {
    headers: {
      Authorization: "Bearer " + API_BEARER,
    },
  });
  let movieData = response.data.data;
  return movieData;
};
