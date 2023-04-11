<script>
  let name = 'world';
</script>

<input bind:value={name}>

<h1>Hello {name}!</h1>

<style>
  input {
    display: block;
    margin-top: 50px;
  }
</style>