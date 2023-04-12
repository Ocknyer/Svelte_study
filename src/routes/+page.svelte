<script>
	import Nested from './Nested.svelte';
	import SpreadProps from './Spread/SpreadProps.svelte';
	import IfBlocks from './IfBlocks/IfBlocks.svelte';
	import EachBlocks from './EachBlocks/EachBlocks.svelte';
	import KeyedEachBlocks from './KeyedEachBlocks/KeyedEachBlocks.svelte';
	import AwaitBlocks from './AwaitBlocks/AwaitBlocks.svelte';
	import ComponentEvents from './ComponentEvents/ComponentEvents.svelte';
	import DomEvents from './DOMEvents/DOMEvents.svelte';
	import EventForwarding from './EventForwarding/EventForwarding.svelte';
	import DomEventForwarding from './DomEventForwarding/DomEventForwarding.svelte';
	import TextInputs from './Inputs/TextInputs.svelte';
	import NumericInputs from './Inputs/NumericInputs.svelte';
	import CheckboxInputs from './Inputs/CheckboxInputs.svelte';
	import GroupInputs from './Inputs/GroupInputs.svelte';
	import TextareaInputs from './Inputs/TextareaInputs.svelte';
	import Select from './Inputs/Select.svelte';
	import Multiple from './Inputs/Multiple.svelte';
	import ContenteditableBindings from './Bindings/ContenteditableBindings.svelte';
	import EachBlockBindings from './Bindings/EachBlockBindings.svelte';
	import OnMount from './Lifecycle/OnMount.svelte';
	import OnDestroy from './Lifecycle/OnDestroy.svelte';
	import BeforeAndAfterUpdate from './Lifecycle/BeforeAndAfterUpdate.svelte';
	import Tick from './Lifecycle/Tick.svelte';
	import WritableStores from './Store/WritableStores/WritableStores.svelte';
	import ReadableStores from './Store/ReadableStores/ReadableStores.svelte';
	import DerivedStores from './Store/DerivedStores/DerivedStores.svelte';
	import CustomStores from './Store/CustomStores/CustomStores.svelte';
	import StoreBindings from './Store/StoreBindings/StoreBindings.svelte';
	import NamedSlots from './Slot/NamedSlots/NamedSlots.svelte';
	import SlotProps from './Slot/SlotProps/SlotProps.svelte';

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

<AwaitBlocks />

<DomEvents />

<ComponentEvents />

<EventForwarding />

<DomEventForwarding />

<TextInputs />

<NumericInputs />

<CheckboxInputs />

<GroupInputs />

<TextareaInputs />

<Select />

<Multiple />

<ContenteditableBindings />

<EachBlockBindings />

<!-- 라이프 사이클 함수 -->
<OnMount />

<OnDestroy />

<BeforeAndAfterUpdate />

<Tick />

<!-- Stores -->
<WritableStores />

<ReadableStores />

<DerivedStores />

<CustomStores />

<StoreBindings />

<!-- Slots -->
<NamedSlots />

<SlotProps />
