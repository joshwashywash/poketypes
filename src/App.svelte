<script lang="ts">
	import poketypes from '$lib/poketypes.json';
	import type { SimulationLinkDatum, SimulationNodeDatum } from 'd3-force';
	import {
		forceCenter,
		forceLink,
		forceManyBody,
		forceSimulation,
	} from 'd3-force';

	const colors = poketypes.reduce(
		(map, { name, color }) => map.set(name, color),
		new Map<string, string>()
	);

	console.log(colors);

	const angle = (2 * Math.PI) / poketypes.length;

	type Node = SimulationNodeDatum & { id: string };

	const nodes: Node[] = poketypes.map(({ name }, i) => {
		const theta = i * angle;
		const [x, y] = [Math.cos, Math.sin].map(f => f(theta));
		return { id: name, x, y };
	});

	const links = poketypes.flatMap(({ name, twiceEffectiveAgainst }) =>
		twiceEffectiveAgainst.map(target => {
			return { source: name, target };
		})
	);

	type Link = SimulationLinkDatum<Node>;
	let linkies: Link[] = [];

	const radius = 100;
	const r = radius / 20;
	const strokeWidth = r / 2;
	const diameter = 2 * radius;
	const viewBox = [-radius, diameter].flatMap(i => [i, i]).join(' ');

	let nodies: Node[] = [];

	forceSimulation(nodes)
		.force('center', forceCenter())
		.force('many', forceManyBody())
		.force(
			'links',
			forceLink<Node, Link>(links).id(d => d.id)
		)
		.on('tick', () => {
			nodies = [...nodes];
			linkies = [...links];
		});
</script>

<svelte:head>
	<title>Pokemon Types</title>
</svelte:head>

<main class="flex max-h-screen flex-col items-center">
	<svg
		class="w-full"
		fill="none"
		stroke-linecap="round"
		{viewBox}
		xmlns="http://www.w3.org/2000/svg"
	>
		<g stroke-width={strokeWidth}>
			{#each linkies as { source, target }}
				<line stroke={colors.get(source.id) ?? 'transparent'} x1={source.x} y1={source.y} x2={target.x} y2={target.y} />
			{/each}
		</g>
		{#each nodies as { x, y, id }}
			<circle fill={colors.get(id) ?? 'transparent'} cx={x} cy={y} {r} />
		{/each}
	</svg>
</main>
