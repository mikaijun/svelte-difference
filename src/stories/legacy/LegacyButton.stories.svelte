<script lang="ts" context="module">
	import Button from './LegacyButton.svelte';
	import { fn } from '@storybook/test';
	import { Story, Template } from '@storybook/addon-svelte-csf';

	export const meta = {
		title: 'Example/LegacyButton',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			backgroundColor: { control: 'color' },
			size: {
				control: { type: 'select' },
				options: ['small', 'medium', 'large']
			}
		},
		args: {
			onClick: fn()
		}
	};
</script>

<Template let:args>
	<Button {...args} />
</Template>

<Story name="Primary" args={{ primary: true, label: 'Button' }} />

<Story name="Secondary" args={{ label: 'Button' }} />

<Story name="Large" args={{ size: 'large', label: 'Button' }} />

<Story name="Small" args={{ size: 'small', label: 'Button' }} />
