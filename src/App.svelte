<script lang="ts">
	import type { Point } from '$lib/math';
	import types from '$lib/types.json';
	import { draw } from 'svelte/transition';

	const width = 100;
	const height = 100;
	const nodeRadius = 2;
	const loopRadius = 2 * nodeRadius;

	const radius = width / 3;

	const angle = (2 * Math.PI) / types.length;
	const map = new Map<
		string,
		{ position: Point } & Omit<typeof types[number], 'name'>
	>();
	types.forEach(({ name, ...info }, i) => {
		const position: = [Math.cos, Math.sin].map(
			op => radius * op(i * angle)
		) as Point;
		map.set(name, { ...info, position });
	});

	const createOffset =
		(width: number, height: number) =>
		(point: Point): Point => {
			const [x, y] = point;
			return [x + width / 2, y + height / 2];
		};

	const offset = createOffset(width, height);
	const ps = ['quadratic', 'line'];

	let [path] = ps;

	let selectedType = types[types.length - 1].name;
	let g: SVGGElement;

	$: if (g) {
		const h = g.querySelector(`g[data-type=${selectedType}]`);
		h.parentNode.appendChild(h);
	}

	const entries = [...map.entries()];
</script>

<svelte:head>
	<title>Pokemon Types</title>
</svelte:head>

<main class="flex max-h-screen flex-col items-center">
	<div>
		{#each ps as value}
			<label class="flex items-center">
				<span class="pr-2">{value}</span>
				<input type="radio" bind:group={path} {value} />
			</label>
		{/each}
	</div>
	<svg
		class="w-full"
		fill="none"
		stroke-linecap="round"
		viewBox={`0 0 ${width} ${height}`}
		xmlns="http://www.w3.org/2000/svg"
	>
		<g bind:this={g}>
			{#each entries as [from, { color, position, twiceEffectiveAgainst }], i}
				{@const [x1, y1] = offset(position)}
				{@const _draw = { delay: 100 * i, duration: 750 }}
				<g
					data-type={from}
					stroke={color}
					opacity={from === selectedType ? 1 : 0.25}
				>
					{#each twiceEffectiveAgainst as to}
						{@const [x2, y2] = offset(map.get(to).position)}
						{#if from === to}
							{@const x = (radius + 2 * loopRadius) * Math.cos(i * angle)}
							{@const y = (radius + 2 * loopRadius) * Math.sin(i * angle)}
							{@const [cx, cy] = offset([x, y])}
							{#key path}
								<path
									in:draw={_draw}
									d={`M ${x1},${y1} A ${loopRadius},${loopRadius} 0 0 1 ${cx},${cy} A ${loopRadius},${loopRadius} 0 0 1 ${x1},${y1}`}
								/>
							{/key}
						{:else if path === 'line'}
							<line in:draw={_draw} {x1} {y1} {x2} {y2} />
						{:else}
							<path
								in:draw={_draw}
								d={`M ${x1}, ${y1} Q ${width / 2}, ${height / 2} ${x2}, ${y2}`}
							/>
						{/if}
					{/each}
				</g>
			{/each}
		</g>
		{#each entries as [type, { color, position }]}
			{@const [cx, cy] = offset(position)}
			<circle
				class="cursor-pointer"
				fill={color}
				{cx}
				{cy}
				r={nodeRadius}
				on:click={() => {
					selectedType = type;
				}}
			/>
		{/each}
	</svg>
</main>
