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
		return { id: name, x: Math.cos(theta), y: Math.sin(theta) };
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

	const createLoopPath = (x: number, y: number, diameter: number) => {
		const l = Math.hypot(x, y);
		const [tx, ty] = [x, y].map(s => (diameter * s) / l);

		const r = Math.max(tx, ty) / 2;

		const prefix = `${r},${r} 0 0,0`;
		const firstHalf = `a${prefix} ${tx},${ty}`;
		const secondHalf = `${prefix} ${-tx},${-ty}`;

		return `M${x},${y} ${firstHalf} ${secondHalf}`;
	};

	const createArcPath = (sx: number, sy: number, dx: number, dy: number) => {
		const diffX = dx - sx;
		const diffY = dy - sy;
		const r = Math.hypot(diffX, diffY);
		return `M${sx},${sy} a${r},${r} 0 0,0 ${diffX},${diffY}`;
	};

	let heldNode: Node = null;
</script>

<svelte:head>
	<title>Pokemon Types</title>
</svelte:head>

<main class="flex h-screen flex-col items-center justify-around p-2">
	{#if heldNode}
		{@const { name } = poketypes[heldNode.index]}
		<p>
			you're holding
			<span style:color={colors.get(name) ?? 'transparent'}>{name}</span>
		</p>
	{:else}
		<p>drag around the nodes</p>
	{/if}
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
					{@const { x: sx, y: sy, id: sID } = source}
					{@const { x: tx, y: ty, id: tID } = target}
					{@const d =
						sID === tID
							? createLoopPath(sx, sy, 2 * r)
							: createArcPath(sx, sy, tx, ty)}
					<path
						stroke-opacity={sID === heldNode?.id ? 1 : 0.3}
						stroke={colors.get(sID) ?? 'transparent'}
						{d}
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
