type PolarVector = { theta: number; r: number };
export type PolarPoint = PolarVector;

type CartesianVector = { x: number; y: number };
type CartesianPoint = CartesianVector;

export const polarToCartesian = (p: PolarPoint): CartesianPoint => {
	const { r, theta } = p;
	const [x, y] = [Math.cos, Math.sin].map(f => r * f(theta));
	return { x, y };
};
