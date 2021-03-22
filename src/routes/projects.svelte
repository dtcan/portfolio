<script lang="ts">
    import { PROJECTS_LIST, TAG_COLOURS } from '../projects';

    const REPO_LINK_PREFIX = "https://github.com/dtcan/";
</script>

<style>
    .project {
        display: flex;
        flex-direction: column;
        margin: 3em 0;
    }

    @media(min-width: 768px) {
        .project {
            flex-direction: row;
        }
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

    .tag {
        display: block;
        font-size: small;
        font-weight: bold;
        margin: 0.1em;
        padding: 0.2em;
        border-radius: 0.2em;
    }
</style>

<svelte:head>
    <title>Projects - David Canagasabey</title>
</svelte:head>

<h1>my projects</h1>

{#each PROJECTS_LIST as project, i}
    {#if i > 0}<hr />{/if}
    <div id={project.repo} class="project">
        {#if project.image}<div>image</div>{/if}
        <div>
            <h2>{project.name}</h2>
            <div class="flex-row">
                {#each project.tags as tag}
                    <span class="tag" style={"background-color: "+(TAG_COLOURS.get(tag) || 'gray')}>{tag}</span>
                {/each}
            </div>
            <p>{project.body}</p>
            <div class="flex-row">
                <a class="button" target="blank" href={REPO_LINK_PREFIX + project.repo}>View Code</a>
                {#if project.demo}<a class="button" target="blank" href={project.demo}>View Demo</a>{/if}
            </div>
        </div>
    </div>
{/each}