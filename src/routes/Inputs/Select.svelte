<script>
  const list = [
    { id: 1, text: 'A' },
    { id: 2, text: 'B' },
    { id: 3, text: 'C' },
  ]

  let selected;
</script>

<select bind:value={selected}>
  {#each list as item (item.id)}
    <option value={item}>{item.text}</option>
  {/each}
</select>

<span>선택함 : {selected ? selected.id : '선택 대기 중...'}</span>

<style>
  select {
    margin-top: 20px;
  }
</style>