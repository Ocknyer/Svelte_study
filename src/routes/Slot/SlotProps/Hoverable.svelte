<script>
	let hovering;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
	<!-- 상위로 전달할 변수명 === 상위로 전달할 변수이므로 축약 가능 -->
	<!-- <slot hovering={hovering} /> -->
	<slot {hovering} />
</div>
