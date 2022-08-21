<script lang="ts">
	import type { Point } from '$lib/math';
	import types from '$lib/types.json';
	import { draw } from 'svelte/transition';

	const width = 100;
	const height = 100;
	const nodeRadius = 2;
	const loopRadius = 2 * nodeRadius;

	const map = new Map(Object.entries(types));

	const radius = width / 3;

	const positions = new Map<string, Point>();

	let i = 0;
	const angle = (2 * Math.PI) / map.size;
	for (const name of map.keys()) {
		const rotation = i * angle;
		const position = ([Math.cos(rotation), Math.sin(rotation)] as Point).map(
			theta => theta * radius
		);
		positions.set(name, position as Point);
		i += 1;
	}

	const createOffset =
		(width: number, height: number) =>
		(point: Point): Point => {
			const [x, y] = point;
			return [x + width / 2, y + height / 2];
		};

	const offset = createOffset(width, height);
	const ps = ['quadratic', 'line'];

	let [path] = ps;
</script>

<svelte:head>
	<title>Pokemon Types</title>
</svelte:head>

<main class="flex max-h-screen flex-col items-center pt-2">
	{#each ps as value}
		<label class="flex">
			<span class="pr-2">{value}</span>
			<input type="radio" bind:group={path} {value} />
		</label>
	{/each}
	<svg viewBox={`0 0 ${width} ${height}`}>
		<g stroke-linecap="round" fill="none">
			{#each [...map.entries()] as [from, { twiceEffectiveAgainst }], i}
				{@const [x1, y1] = offset(positions.get(from))}
				{@const _draw = { delay: 100 * i }}
				{#each twiceEffectiveAgainst as to}
					{@const [x2, y2] = offset(positions.get(to))}
					{@const stroke = map.get(from).color}
					{#if from === to}
						{@const x = (radius + loopRadius) * Math.cos(i * angle)}
						{@const y = (radius + loopRadius) * Math.sin(i * angle)}
						{@const [cx, cy] = offset([x, y])}
						<circle in:draw={_draw} {stroke} {cx} {cy} r={loopRadius} />
					{:else if path === 'line'}
						<line in:draw={_draw} {stroke} {x1} {y1} {x2} {y2} />
					{:else}
						<path
							{stroke}
							in:draw={_draw}
							d={`M ${x1}, ${y1} Q ${width / 2}, ${height / 2} ${x2}, ${y2}`}
						/>
					{/if}
				{/each}
			{/each}
		</g>
		<g>
			{#each [...positions.entries()] as [name, p]}
				{@const [cx, cy] = offset(p)}
				{@const fill = map.get(name).color}
				<circle {fill} {cx} {cy} r={nodeRadius} />
			{/each}
		</g>
	</svg>
</main>
