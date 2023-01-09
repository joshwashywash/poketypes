<script lang="ts">
	import poketypes from '$lib/poketypes.json';
	import type { SimulationLinkDatum, SimulationNodeDatum } from 'd3-force';
	import {
		forceX,
		forceY,
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

	type Link = SimulationLinkDatum<Node>;

	const radius = 1;
	const r = radius / 25;
	const strokeWidth = r / 2;
	const diameter = 2 * radius;
	const viewBox = [-radius, diameter].flatMap(i => [i, i]).join(' ');

	let nodes: Node[] = poketypes.map(({ name }, i) => {
		const theta = i * angle;
		const [x, y] = [Math.cos, Math.sin].map(f => f(theta));
		return { id: name, x, y };
	});

	const links: Link[] = poketypes.flatMap(({ name, twiceEffectiveAgainst }) =>
		twiceEffectiveAgainst.map(target => {
			return { source: name, target };
		})
	);

	type ForcedLink = { source: Node; target: Node; id: string };
	let linkies: ForcedLink[] = [];

	const sim = forceSimulation<Node, Link>(nodes)
		.force('x', forceX().strength(radius / 2))
		.force('y', forceY().strength(radius / 2))
		.force('charge', forceManyBody().strength(-r))
		.force(
			'links',
			forceLink<Node, Link>(links)
				.id(d => d.id)
				.distance(radius / 3)
		)
		.on('tick', () => {
			nodes = nodes;
			// d3 mutates the links by converting the source and target from a string to a Node. it also adds the id prop
			linkies = links as ForcedLink[];
		});

	const createArcPath = (source: Node, target: Node) => {
		const diffX = target.x - source.x;
		const diffY = target.y - source.y;
		const r = Math.hypot(diffX, diffY);
		return `M${source.x},${source.y} a${r},${r} 0 0,0 ${diffX},${diffY}`;
	};

	let heldNode: Node = null;
</script>

<svelte:head>
	<title>Pokemon Types</title>
</svelte:head>

<main class="flex h-screen flex-col items-center justify-around p-2">
	<h1>drag around the nodes</h1>
	<figure class="w-full max-w-xl">
		<svg
			class:cursor-grabbing={heldNode !== null}
			on:pointermove={e => {
				if (heldNode) {
					const { currentTarget, pointerId, x, y } = e;
					currentTarget.setPointerCapture(pointerId);

					const point = new DOMPoint(x, y).matrixTransform(
						currentTarget.getScreenCTM().inverse()
					);

					heldNode.fx = point.x;
					heldNode.fy = point.y;
				}
			}}
			on:pointerup={() => {
				if (heldNode) {
					heldNode.fx = null;
					heldNode.fy = null;
					heldNode = null;
					sim.alphaTarget(0);
				}
			}}
			fill="none"
			stroke-linecap="round"
			{viewBox}
			xmlns="http://www.w3.org/2000/svg"
		>
			<g stroke-width={strokeWidth}>
				{#each linkies as { source, target }}
					<path
						stroke-opacity={source.id === heldNode?.id ? 1 : 0.3}
						stroke={colors.get(source.id) ?? 'transparent'}
						d={createArcPath(source, target)}
					/>
				{/each}
			</g>
			{#each nodes as node}
				<circle
					class:cursor-grab={heldNode === null}
					on:pointerdown={() => {
						heldNode = node;
						sim.alphaTarget(0.3).restart();
					}}
					on:touchstart|preventDefault
					fill={colors.get(node.id) ?? 'transparent'}
					cx={node.x}
					cy={node.y}
					{r}
				/>
			{/each}
		</svg>
	</figure>
	<a class="underline" href="http://josho.dev">josho.dev</a>
</main>
