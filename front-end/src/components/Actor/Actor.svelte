<script>
  export let actor;
  export let nbPerLine;
  $: nbPerLine = nbPerLine;
</script>

<div class="cardActor" style="width: calc(100% / {nbPerLine})">
  <img
    src={"http://localhost:1337" + actor.attributes.photo.data.attributes.url}
    alt=""
  />
  <p>{actor.attributes.first_name} {actor.attributes.last_name}</p>
</div>

<style>
  .cardActor {
    text-align: center;
  }
  .cardActor p {
    color: wheat;
  }
  img {
    border-radius: 120px;
    width: 145px;
    height: 145px;
    object-fit: cover;
    border: 2px solid wheat;
  }
</style>
