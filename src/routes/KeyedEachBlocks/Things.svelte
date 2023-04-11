<script>
  import { onDestroy } from "svelte";

  const emojis = {
        apple: "🍎",
        banana: "🍌",
        carrot: "🥕",
        doughnut: "🍩",
        egg: "🥚"
	}

  export let current;

  const initial = current;

  onDestroy(() => {
    console.log('thing destroyed: ' + current)
  });
</script>

<p>
  <span style="background-color: {initial};">initial</span>
  <span style="background-color: {current};">current</span>
</p>

<style>
  p {
    margin: 0.8em 0;
  }

  span {
    display: inline-block;
    padding: 0.2em 0.5em;
    margin: 0 0.2em 0.2em 0;
    width: 4em;
    text-align: center;
    border-radius: 0.2em;
    color: white;
  }
</style>