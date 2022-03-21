<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import Actor from "./Actor.svelte";

  let allActors = [];

  onMount(async () => {
    const getActors = await axios.get(
      "http://localhost:1337/api/actors/?populate=photo",
      {
        headers: {
          Authorization:
            "Bearer 6ac4778ce40981b85aef6acc5404a5a963624062448270d5a3d6817c4d02aea7f9e7239253fdaee375e78f9250f05d13bb7b8a08b6ae8c87da3dbc31493a7de75967d946e72c8eabcea712b2126db6a07c141d58a13a312bc3102900ce546782d4ad3bc329bd8862b6874cfc9249c699cb99a8208d281001e06cfcc4d332cbfd",
        },
      }
    );
    allActors = getActors.data.data;
  });
</script>

<div>
  <div class="blockTitle">
    <h1>Liste des acteurs</h1>
  </div>
  <div class="blockActor">
    {#each allActors as actor}
      <Actor {actor} nbPerLine={3} />
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
  }
</style>
