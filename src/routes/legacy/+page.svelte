<script>
    import LegacyButton from "../../stories/legacy/LegacyButton.svelte";
    let count = 0;

    function increment() {
        count += 1;
    }
</script>

<p>現在のカウント: {count}</p>
<LegacyButton
    label={`カウント: ${count}`}
    onClick={increment}
    backgroundColor="red"
    size="medium"
/>