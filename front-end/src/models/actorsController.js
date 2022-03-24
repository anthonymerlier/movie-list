import axios from "axios";
import _ from "lodash";

export const getActors = async () => {
  const actors = await axios.get(API_HOST + "actors?populate=*", {
    headers: {
      Authorization: "Bearer " + API_BEARER,
    },
  });
  let actorsData = _.shuffle(actors.data.data);
  return actorsData;
};

export const getActor = async (id) => {
  const actor = await axios.get(API_HOST + "actors/" + id + "?populate=*", {
    headers: {
      Authorization: "Bearer " + API_BEARER,
    },
  });
  let actorData = actor.data.data;
  return actorData;
};
