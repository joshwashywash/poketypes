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

	const angle = (2 * Math.PI) / poketypes.length;

	type Node = SimulationNodeDatum & { id: string };

	let nodes: Node[] = poketypes.map(({ name }, i) => {
		const theta = i * angle;
		const [x, y] = [Math.cos, Math.sin].map(f => f(theta));
		return { id: name, x, y };
	});

	type Link = SimulationLinkDatum<Node>;

	const links: Link[] = poketypes.flatMap(({ name, twiceEffectiveAgainst }) =>
		twiceEffectiveAgainst.map(target => {
			return { source: name, target };
		})
	);

	const radius = 100;
	const r = radius / 20;
	const strokeWidth = r / 2;
	const diameter = 2 * radius;
	const viewBox = [-radius, diameter].flatMap(i => [i, i]).join(' ');

	type ForcedLink = { source: Node; target: Node; id: string };
	let linkies: ForcedLink[] = [];

	const sim = forceSimulation<Node, Link>(nodes)
		.force('center', forceCenter())
		.force('collide', forceManyBody())
		.force(
			'links',
			forceLink<Node, Link>(links).id(d => d.id)
		)
		.on('tick', () => {
			nodes = nodes;
			// d3 mutates the links by converting the source and target from a string to a Node. it also adds the id prop
			linkies = links as ForcedLink[];
		});

	const createArcPath = (link: ForcedLink) => {
		const { source, target } = link;
		const r = Math.hypot(source.x - target.x, source.y - target.y);
		return `M${source.x},${source.y} A${r},${r} 0 0,1 ${target.x},${target.y}`;
	};

	let heldNode: Node = null;
</script>

<svelte:head>
	<title>Pokemon Types</title>
</svelte:head>

<main class="flex max-h-screen flex-col items-center">
<h1>drag around the points</h1>
	<svg
		on:pointermove={e => {
			if (heldNode) {
				const { x, y, currentTarget } = e;
				const point = new DOMPoint(x, y).matrixTransform(
					currentTarget.getScreenCTM().inverse()
				);
				heldNode.fx = point.x;
				heldNode.fy = point.y;
			}
		}}
		on:pointerup={() => {
			if (heldNode) {
				heldNode = null;
				sim.alphaTarget(0);
			}
		}}
		class="w-full"
		fill="none"
		stroke-linecap="round"
		{viewBox}
		xmlns="http://www.w3.org/2000/svg"
	>
		<g stroke-width={strokeWidth}>
			{#each linkies as link}
				<path
					stroke-opacity={link.source.id === heldNode?.id ? 1 : 0.7}
					stroke={colors.get(link.source.id) ?? 'transparent'}
					d={createArcPath(link)}
				/>
			{/each}
		</g>
		{#each nodes as node}
			<circle
				class:cursor-grabbing={node.id === heldNode?.id}
				class:cursor-grab={heldNode === null}
				on:pointerdown={() => {
					heldNode = node;
					sim.alphaTarget(0.3).restart();
				}}
				fill={colors.get(node.id) ?? 'transparent'}
				cx={node.x}
				cy={node.y}
				{r}
			/>
		{/each}
	</svg>
</main>
