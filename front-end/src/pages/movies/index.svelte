<script>
  import { onMount } from "svelte";
  import { getMovies } from "../../models/moviesController";
  import { url } from "@sveltech/routify";
  let allMovies = [];

  onMount(async () => {
    getMovies().then((data) => (allMovies = data));
  });
</script>

<div>
  <div class="blockTitle">
    <h1>Liste des films</h1>
  </div>
  <div class="blockActor">
    {#each allMovies as movie}
      <div class="cardMovie">
        <img
          src={"http://localhost:1337" +
            movie.attributes.image.data.attributes.url}
          alt=""
        />
        <p>
          <a href={$url("/movies/" + movie.id)}>{movie.attributes.title}</a>
        </p>
      </div>
    {/each}
  </div>
</div>

<style>
  .blockTitle {
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
  h1 {
    text-align: center;
    color: wheat;
  }
  .blockActor {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem 0;
    max-width: 1120px;
    margin: auto;
  }
  .cardMovie {
    text-align: center;
    width: calc(100% / 3);
  }
  .cardMovie p {
    color: wheat;
  }
  .cardMovie > img {
    width: 170px;
    height: 230px;
    object-fit: cover;
  }
</style>
