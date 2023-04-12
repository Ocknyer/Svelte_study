<script>
  let html = '<p>텍스트를 적어 보세요!</p>;'
</script>

<div contenteditable="true" bind:innerHTML={html}></div>

<pre>{html}</pre>

<style>
  [contenteditable] {
    padding: 0.5em;
    margin-top: 20px;
    border: 1px solid #eee;
    border-radius: 4px;
  }
</style>