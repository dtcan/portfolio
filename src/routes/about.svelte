<script lang="ts">
	const GREETINGS = ["Hello", "Hello there", "Hi", "Hi there", "Hiya", "Hey there"];
	let greeting: string = GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
</script>

<svelte:head>
	<title>About - David Canagasabey</title>
</svelte:head>

<h1>about me</h1>

<p>{greeting}! My name is David Canagasabey. Thanks for taking the time to visit my portfolio.</p>
<p>I been interested in computers since a very young age, and I'm very comfortable behind a keyboard. I have my parents to thank for this, since they're the ones who even let me use the family computer at that age, at the risk of damaging it. I enjoyed playing Flash games online, and eventually I grew an interest in making computer games.</p>
<p>Java was my first programming language, which I picked up in late elementary school. My inital training in software development came from YouTube tutorials. My first formal training in programming was from high school computer science courses, which taught how computers work, basic sorting algorithms, and a simplified introduction to big-O analysis.</p>
<p>After high school, I was accepted into the computer science program at the University of Toronto St. George campus. At UofT, I developed an interest in mathematics, and so I joined that program as well. I am especially interested in linear algebra, and luckily for me this field of mathematics comes up often in computer science (especially now with machine learning's rise in popularity). I've listed some of the courses I took <a href="/education">here</a>.</p>
<p>In my spare time, I like to learn new things using whatever resources are available online (mostly <a target="blank" href="https://youtube.com/playlist?list=PLqYmG7hTraZBKeNJ-JE_eyJHZ7XgBoAyb">lectures uploaded to YouTube</a> and Medium articles). I enjoy developing software to solve problems in my own life (like my <a href="/projects#cloud-explorer">Cloud Explorer project</a>). I also like learning to set up and administrate different kinds of networking software (like setting up my own mail server).</p>
<p>I volunteer at <a target="blank" href="https://rhpc.ca">my church</a> in a few areas: I help lead a youth group on Friday nights, I play bass guitar for worship service at least once a month, and I help set up and operate the audio & video equipment.</p>
<p>Some of my interests outside of software development include music (<a target="blank" href="https://youtu.be/nvHq4siXbPo">System of a Down</a> is awesome!) and video games (love to play <a target="blank" href="https://beammp.com/">BeamMP</a> with my friends).</p>