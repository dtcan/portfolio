<script lang="ts">
    import { WORK_LIST } from '../work';
</script>

<style>
    .work {
        margin: 3em 0;
    }

    .flex-row {
        display: flex;
        flex-direction: row;
    }

    .button {
        margin: 0 0.5em;
        padding: 0.5em;
        background-color: gray;
        border-radius: 0.2em;
        text-decoration: none;
    }

    .button:hover {
        background-color: lightgray;
    }

    #spacer {
        flex-grow: 1;
    }
</style>

<svelte:head>
    <title>Work Experience - David Canagasabey</title>
</svelte:head>

<h1>my work experience</h1>

{#each WORK_LIST as work, i}
    {#if i > 0}<hr />{/if}
    <div class="work">
        <div class="flex-row">
            <h2>{work.title}</h2>
            <div id="spacer"></div>
            <p>{work.dateRange}</p>
        </div>
        <h3><i>{work.employer}</i></h3>
        <ul>
            {#each work.bullets as bullet}
                <li>{bullet}</li>
            {/each}
        </ul>
        {#if work.website}<a class="button" target="blank" href={work.website}>Visit Website</a>{/if}
    </div>
{/each}