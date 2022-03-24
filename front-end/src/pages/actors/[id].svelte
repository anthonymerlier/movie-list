<script>
  import { onMount } from "svelte";
  import { getActor } from "../../models/actorsController";
  import _ from "lodash";
  import { params } from "@sveltech/routify";

  let actor = [];

  onMount(async () => {
    getActor($params.id).then((result) => {
      const data = result.attributes;
      actor = data;
      console.log(actor);
    });
  });
</script>

<div>
  <div class="blockActorDetail">
    <h1>{actor.first_name} {actor.last_name}</h1>
    <img
      src={"http://localhost:1337" +
        _.result(actor, "photo.data.attributes.url")}
      alt=""
    />
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
  .blockActorDetail {
    margin-top: 3rem;
    text-align: center;
  }
  .blockActorDetail > img {
    border-radius: 100px;
    width: 135px;
    height: 135px;
    object-fit: cover;
  }
</style>
