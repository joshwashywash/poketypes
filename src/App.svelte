<script lang="ts">
	import types from '$lib/types.json';

	const width = 100;
	const height = 100;
	const nodeRadius = 2;

	const map = new Map(Object.entries(types));

	const radius = width / 3;
	const angle = (2 * Math.PI) / map.size;

	const positions = new Map();

	let i = 0;
	for (const name of map.keys()) {
		positions.set(name, {
			x: radius * Math.cos(i * angle),
			y: radius * Math.sin(i * angle),
		});
		i += 1;
	}

	type Point = {
		x: number;
		y: number;
	};

	const createOffset = (width: number, height: number) => (point: Point) => {
		return {
			x: point.x + width / 2,
			y: point.y + height / 2,
		};
	};

	const offset = createOffset(width, height);
</script>

<title>Pokemon Types</title>
<main class="flex max-h-screen">
	<svg viewBox={`0 0 ${width} ${height}`}>
		<g stroke-linecap="round">
			{#each [...map.entries()] as [from, { twiceEffectiveAgainst }]}
				{@const { x: x1, y: y1 } = offset(positions.get(from))}
				{#each twiceEffectiveAgainst as to}
					{@const { x: x2, y: y2 } = offset(positions.get(to))}
					{@const stroke = map.get(from).color ?? 'white'}
					<line {stroke} {x1} {y1} {x2} {y2} />
				{/each}
			{/each}
		</g>
		<g>
			{#each [...positions.entries()] as [name, { x, y }]}
				{@const { x: cx, y: cy } = offset({ x, y })}
				{@const fill = map.get(name).color ?? 'white'}
				<circle {fill} {cx} {cy} r={nodeRadius} />
			{/each}
		</g>
	</svg>
</main>
