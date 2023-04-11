<script>
	import Nested from './Nested.svelte';
	import SpreadProps from './Spread/SpreadProps.svelte';
	import IfBlocks from './IfBlocks/IfBlocks.svelte';
	import EachBlocks from './EachBlocks/EachBlocks.svelte';
	import KeyedEachBlocks from './KeyedEachBlocks/KeyedEachBlocks.svelte';

	let count = 0;
	// 반응형 선언
	$: doubled = count * 2;

	// 반응형 선언에 조건문을 추가할 수 있다.
	$: if (count >= 10) {
		alert('count is dangerously high!');
		count = 9;
	}

	function handleClick() {
		count += 1;
	}

	// 배열과 객체의 업데이트
	let numbers = [1, 2, 3];

	function addNumber() {
		numbers = [...numbers, numbers.length + 1];
	}

	$: sum = numbers.reduce((a, c) => a + c, 0);
</script>

<p>This is a paragraph.</p>

<!-- props 전달 -->
<Nested answer={50} />
<Nested />

<button on:click={handleClick}>
	Clicked {count}
	{!count || count === 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>

<button on:click={addNumber}> Add a number </button>
<p>{numbers.join(' + ')} = {sum}</p>

<SpreadProps />

<IfBlocks />

<EachBlocks />

<KeyedEachBlocks />