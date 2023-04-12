<script>
  const list = [
    { id: 1, text: 'A' },
    { id: 2, text: 'B' },
    { id: 3, text: 'C' },
  ]

  let selected = [];
</script>

<div>
  <select multiple bind:value={selected}>
    {#each list as item (item.id)}
      <option value={item}>{item.text}</option>
    {/each}
  </select>
  
  <span>선택함: {selected ? selected.map(x => x.id).join(', ') : '선택 대기 중...'}</span>
</div>

<style>
  div {
    margin-top: 20px;
  }
</style>