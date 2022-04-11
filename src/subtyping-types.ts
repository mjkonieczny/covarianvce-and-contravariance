import { IsSubtypeOf } from "../helpers";

type check = IsSubtypeOf<vector3D, vector2D>;

type vector2D = { x: number, y: number };
type vector3D = vector2D & { z: number };

const draw = ({ x, y }: vector2D): void => console.log(x + ", " + y);
// const draw = <T extends vector2D>({ x, y }: T): void => console.log(x + ", " + y);

draw({ x: 1, y: 2 } as { x: number, y: number} );