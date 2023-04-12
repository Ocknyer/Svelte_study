<script>
	import ContactCard from './ContactCard.svelte';
</script>

<ContactCard>
	<span slot="name"> P. Sherman </span>

	<span slot="address">
		42 Wallaby Way<br />
		Sydney
	</span>

	<span slot="email">onkim@abc.com</span>
</ContactCard>
