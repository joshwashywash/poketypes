export type Point = [number, number];

export const midpoint = (p1: Point, p2: Point): Point => {
	const [x1, y1] = p1;
	const [x2, y2] = p2;
	return [(x1 + x2) / 2, (y1 + y2) / 2];
};
