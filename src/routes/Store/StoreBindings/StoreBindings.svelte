<script>
	import { name, greeting } from './stores.js';
</script>

<h1>{$greeting}</h1>
<input bind:value={$name} />

<button on:click={() => ($name += '!')}> Add exclamation mark! </button>

<!-- stores.js를 살펴보면 writable store 인 name과 derived store 인 greeting 2개의 store가 있습니다. greeting는 name이 관찰하는 값에 약간의 문구를 추가한 store입니다.
App.svelte는 2가지 방법을 사용하여 name store의 값을 변경시킵니다. name store의 자동 구독 방법을 사용하면 일반 변수처럼 사용할 수 있습니다.
<input>: <input bind:value={$name}>로 <input> 태그의 value 속성에 $name을 바인딩 하였습니다. <input> 태그의 입력 값이 들어오면 $name에 반영됩니다.
<button>: <button> 태그에 click이벤트가 발생하면 $name에 ! 문자를 추가합니다. -->
