<script>
    import NewButton from "../../stories/new/NewButton.svelte";

    let count = $state(0);

    function handleClick() {
        count += 1;
    }
</script>

<svelte:options runes={true} />

<p>現在のカウント: {count}</p>
<NewButton
    primary={true}
    label="カウントを増やす"
    onClick={handleClick}
    backgroundColor="blue"
    size="large"
/>