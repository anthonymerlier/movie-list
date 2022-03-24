<script>
  import { onMount } from "svelte";
  import { getActors } from "../../models/actorsController";
  import { url } from "@sveltech/routify";
  let allActors = [];

  onMount(async () => {
    getActors().then((data) => (allActors = data));
  });
</script>

<div>
  <div class="blockTitle">
    <h1>Liste des acteurs</h1>
  </div>
  <div class="blockActor">
    {#each allActors as actor}
      <div class="cardActor">
        <img
          src={"http://localhost:1337" +
            actor.attributes.photo.data.attributes.url}
          alt=""
        />
        <p>
          <a href={$url("/actors/" + actor.id)}
            >{actor.attributes.first_name} {actor.attributes.last_name}</a
          >
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
  .cardActor {
    text-align: center;
    width: calc(100% / 3);
  }
  .cardActor p {
    color: wheat;
  }
  .cardActor > img {
    border-radius: 100px;
    width: 135px;
    height: 135px;
    object-fit: cover;
  }
</style>
