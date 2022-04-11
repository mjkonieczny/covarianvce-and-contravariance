import { IsSubtypeOf } from "../helpers";

type check = IsSubtypeOf<typeof draw3D, typeof draw2D>;

type vector2D = { x: number, y: number };
type vector3D = vector2D & { z: number };

const draw2D = ({ x, y }: vector2D): void => console.log(x + ", " + y);
const draw3D = ({ x, y, z }: vector3D): void => console.log(x + ", " + y + ", " + z);

const drawPoints = (
  draw: (_: vector3D) => void, // contravariant
  ...vectors: vector3D[] // covariant
): void => vectors.forEach(draw);

drawPoints(draw2D, { x: 1, y: 2, z: 3 });
