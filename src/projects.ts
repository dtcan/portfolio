export interface Project {
    repo: string
    name: string
    tags: string[]
    body: string
    image?: string
    demo?: string
}

export const TAG_COLOURS = new Map<string, string>([
    ['js', 'orange'],
    ['ts', 'steelblue'],
    ['angular', 'red'],
    ['react', 'royalblue'],
    ['bootstrap', 'darkorchid'],
    ['haskell', 'purple'],
    ['node.js', 'green']
]);


export const PROJECTS_LIST: Project[] = [
    {
        repo: 'boids',
        name: "boids",
        tags: ['js', 'three.js'],
        body: "A 3D implementation of the Boids flocking simulation using three.js. I made this project out of a personal interest in the algorithm; it was easy " +
        "to understand and gave interesting results. My implementation uses a 3D binary tree to reduce the average time complexity when searching for nearby "     +
        "boids. If I continue to work on this project, I will futher improve the performance of the tree search.",
        demo: "https://dtcan.dev/boids"
    },
    {
        repo: 'cloud-explorer',
        name: "Cloud Explorer",
        tags: ['js', 'node.js', 'express', 'react'],
        body: "A web server that publicly exposes local directories. The server can be password-protected, and manages authentication using a JSON web token. "    +
        "I came up with this project as a solution to my own problem, where I wanted to be able to access photos and videos on my home server when I am not at "   +
        "home. My future plans for this project involve being able to view photos and videos in the app (rather than just using the browser viewer) and using a "  +
        "proper server-side rendering solution (like Next.js) instead of reading and manipulating HTML files in Node.js.",
        demo: "https://dtcan.dev/cloud-explorer"
    },
    {
        repo: 'arithmetic',
        name: "arithmetic",
        tags: ['haskell'],
        body: "An interpreter for an arithmetic language consisting of natural number, addition, and multiplication. I made this project to learn about parsing "  +
        "and evaluating a formal language. If I return to this project, I'll change the implementation to respect the order of operations."
    },
    {
        repo: 'angular-chat',
        name: "AngularChat",
        tags: ['ts', 'angular', 'bootstrap'],
        body: "An instant messaging interface that can be customized to work with your own backend. The interface supports conversation badges (ex. \"Unread\"), " +
        "text beneath messages (ex. \"Seen\"), pagination, and image messages. Additionally, the interface is responsive and intuitive on both desktop and mobile" +
        " devices. My goal for this project was to learn Angular and Bootstrap. If I return to this project, I'll improve how the interface requests updates so "  +
        "that the client can have more information about what needs to be updated and make fewer requests to the backend."
    }
];
