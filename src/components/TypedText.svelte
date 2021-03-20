<script lang="ts">
    import { onMount } from "svelte";

    export let text: string;
    export let startDelay: number = 0.3;
    export let typeDelay: number = 0.1;
    export let cursorDelay: number = 0.3;
    export let blinkCount: number = 7;

    let displayText: string = "";
    let cursor: boolean = true;
    let numBlinks: number = 0;

    function type() {
        if(displayText.length < text.length) {
            displayText += text[displayText.length];
            setTimeout(type, typeDelay * 1000);
        }else {
            cursor = !cursor;
            if(cursor) {
                numBlinks++;
            }
            if(numBlinks < blinkCount) {
                setTimeout(type, cursorDelay * 1000);
            }
        }
    }

    onMount(() => setTimeout(type, startDelay * 1000));
</script>

<span>{displayText}</span><span>{cursor ? "_" : String.fromCharCode(0x2003)}</span>