<script>
	import { onDestroy } from 'svelte';
	import Dec from './Dec.svelte';
	import Inc from './Inc.svelte';
	import Reset from './Reset.svelte';
	import { count } from './stores';

	// let count_value;

	// const unsubscribe = count.subscribe((value) => {
	// 	count_value = value;
	// });

	// onDestroy(unsubscribe);
</script>

<!-- $표시 하나로 자동 구독을 할 수 있음 -->
<h1>The count is {$count}</h1>

<Dec />
<Inc />
<Reset />
