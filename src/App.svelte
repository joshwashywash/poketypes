<script lang="ts">
	import { pointToString, type Point } from '$lib/math';
	import types from '$lib/types.json';
	import { draw } from 'svelte/transition';
	import { Pane } from 'tweakpane';

	const width = 100;
	const height = 100;
	const center: Point = { x: width / 2, y: height / 2 };
	const nodeRadius = 2;
	const loopRadius = 2 * nodeRadius;
	const radius = width / 3;
	const loopScale = radius + 2 * loopRadius;

	const angle = (2 * Math.PI) / types.length;

	const positions: Map<string, Point> = types.reduce((m, type, i) => {
		const [x, y] = [Math.cos, Math.sin].map(f => radius * f(i * angle));
		return m.set(type.name, { x, y });
	}, new Map());

	const createOffset =
		(o: Point) =>
		(p: Point = { x: 0, y: 0 }): Point => {
			return { x: p.x + o.x, y: p.y + o.y };
		};

	const offset = createOffset(center);

	let selectedType = types[0].name;

	let g: SVGGElement;
	$: if (g) {
		const h = g.querySelector(`g[data-type=${selectedType}]`);
		h.parentNode.appendChild(h);
	}

	const createLoopPath = (a: Point, b: Point): string => {
		const [s, t] = [a, b].map(p => pointToString(p));
		const p = [s, t, s].flatMap(e => ['A 1,1 0 0 1', e]).slice(1);
		return `M ${p.join('')}`;
	};

	const createBezierPath = (s: Point, c: Point, e: Point): string =>
		`M ${pointToString(s)} Q ${pointToString(c)} ${pointToString(e)}`;

	const interpolations = ['line', 'quadratic'];
	const params = {
		interpolation: interpolations[0],
	};

	const pane = new Pane({ title: 'options' });
	const interpolation = pane.addInput(params, 'interpolation', {
		options: Object.fromEntries(interpolations.map(i => [i, i])),
	});

	interpolation.on('change', ({ value }) => {
		params.interpolation = value;
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
		viewBox={`0 0 ${width} ${height}`}
		xmlns="http://www.w3.org/2000/svg"
	>
		<g bind:this={g}>
			{#each types as {name, color, twiceEffectiveAgainst}, i}
				{@const s = offset(positions.get(name))}
				{@const _draw = { delay: 100 * i, duration: 750 }}
				<g
					data-type={name}
					stroke={color}
					opacity={name === selectedType ? 1 : 0.15}
				>
					{#each twiceEffectiveAgainst as to}
						{#if name === to}
							{@const o = offset({
								x: loopScale * Math.cos(i * angle),
								y: loopScale * Math.sin(i * angle),
							})}
							<path in:draw={_draw} d={createLoopPath(s, o)} />
						{:else}
							{@const e = offset(positions.get(to))}
							{#if params.interpolation === 'line'}
								<line in:draw={_draw} x1={s.x} y1={s.y} x2={e.x} y2={e.y} />
							{:else}
								<path in:draw={_draw} d={createBezierPath(s, center, e)} />
							{/if}
						{/if}
					{/each}
				</g>
			{/each}
		</g>
		{#each types as { name, color }}
			{@const { x: cx, y: cy } = offset(positions.get(name))}
			{@const switchType = () => {
				selectedType = name;
			}}
			<circle
				tabIndex={0}
				class="cursor-pointer focus-visible:outline-none"
				fill={color}
				{cx}
				{cy}
				r={nodeRadius}
				on:click={switchType}
				on:keydown={switchType}
			/>
		{/each}
	</svg>
</main>
