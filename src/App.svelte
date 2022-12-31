<script lang="ts">
	import { pointToString, type Point } from '$lib/math';
	import types from '$lib/types.json';
	import { draw } from 'svelte/transition';

	const width = 100;
	const height = 100;
	const center: Point = { x: width / 2, y: height / 2 };
	const nodeRadius = 2;
	const loopRadius = 2 * nodeRadius;
	const radius = width / 3;
	const loopScale = radius + 2 * loopRadius;

	const angle = (2 * Math.PI) / types.length;

	type V = { position: Point } & Omit<typeof types[number], 'name'>;
	const t: [string, V][] = types.map(({ name, ...info }, i) => {
		const position: Point = {
			x: radius * Math.cos(i * angle),
			y: radius * Math.sin(i * angle),
		};
		return [name, { ...info, position }];
	});

	const map = new Map<string, V>(t);

	const createOffset =
		(width: number, height: number) =>
		(p: Point = { x: 0, y: 0 }): Point => {
			return { x: p.x + width / 2, y: p.y + height / 2 };
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

	const createLoopPath = (a: Point, b: Point) => {
		const [s, t] = [a, b].map(p => pointToString(p));
		return `M ${s} A 1,1 0 0 1 ${t} A 1,1 0 0 1 ${s}`;
	};
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
				{@const s = offset(position)}
				{@const _draw = { delay: 100 * i, duration: 750 }}
				<g
					data-type={from}
					stroke={color}
					opacity={from === selectedType ? 1 : 0.15}
				>
					{#each twiceEffectiveAgainst as to}
						{#if from === to}
							{@const o = offset({
								x: loopScale * Math.cos(i * angle),
								y: loopScale * Math.sin(i * angle),
							})}
							{#key path}
								<path in:draw={_draw} d={createLoopPath(s, o)} />
							{/key}
						{:else}
							{@const e = offset(map.get(to).position)}
							{#if path === 'line'}
								<line in:draw={_draw} x1={s.x} y1={s.y} x2={e.x} y2={e.y} />
							{:else}
								<path
									in:draw={_draw}
									d={`M ${pointToString(s)} Q ${pointToString(
										center
									)} ${pointToString(e)}`}
								/>
							{/if}
						{/if}
					{/each}
				</g>
			{/each}
		</g>
		{#each entries as [type, { color, position }]}
			{@const { x: cx, y: cy } = offset(position)}
			<circle
				tabIndex={0}
				class="cursor-pointer focus-visible:outline-none"
				fill={color}
				{cx}
				{cy}
				r={nodeRadius}
				on:click={() => {
					selectedType = type;
				}}
				on:keydown={() => {
					selectedType = type;
				}}
			/>
		{/each}
	</svg>
</main>
