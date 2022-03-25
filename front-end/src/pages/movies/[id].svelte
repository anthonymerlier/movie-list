<script>
  import { onMount } from "svelte";
  import { getMovie } from "../../models/moviesController";
  import _ from "lodash";
  import { url, params } from "@sveltech/routify";

  const id = $params.id;
  let movie = {
    data: {},
    actors: [],
  };

  onMount(async () => {
    getMovie(id).then((result) => {
      const movieInfo = result.attributes;
      movie.data = movieInfo;
      _.result(movie.data, "actors.data").map((actor) => {
        let actorNames = {
          id: actor.id,
          fullName:
            actor.attributes.first_name + " " + actor.attributes.last_name,
        };
        movie.actors.push(actorNames);
      });
    });
    console.log(movie);
  });
</script>

<div>
  <div class="blockMovieDetail">
    <h1>{movie.data.title}</h1>
    <img
      src={"http://localhost:1337" +
        _.result(movie.data, "image.data.attributes.url")}
      alt=""
    />
    <div>
      <h4>Actors :</h4>
      <ul style="list-style: none; margin: 0; padding: 0">
        {#each movie.actors as actor}
          <li><a href={$url("/actors/" + actor.id)}>{actor.fullName}</a></li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>
  h1 {
    text-align: center;
    color: wheat;
  }
  /* .blockActor {
        display: flex;
        flex-wrap: wrap;
        gap: 4rem 0;
        max-width: 1120px;
        margin: auto;
      } */
  .blockMovieDetail {
    margin-top: 3rem;
    text-align: center;
  }
  .blockMovieDetail > img {
    width: 175px;
    height: 250px;
    object-fit: cover;
  }
</style>
