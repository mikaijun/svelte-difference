<script lang="ts">
	import '../button.css';

	/** Is this the principal call to action on the page? */
	export let primary: boolean = false;

	/** What background color to use */
	export let backgroundColor: string;

	/** How large should the button be? */
	export let size: 'small' | 'medium' | 'large' = 'medium';

	/** Button contents */
	export let label: string;

	/** The onclick event handler */
	export let onClick: () => void;
</script>

<button
	type="button"
	class={['storybook-button', `storybook-button--${size}`].join(' ')}
	class:storybook-button--primary={primary}
	class:storybook-button--secondary={!primary}
	style:background-color={backgroundColor}
	on:click={onClick}
>
	{label}
</button>
