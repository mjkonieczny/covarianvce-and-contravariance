import { IsSubtypeOf } from "../helpers";

type check = IsSubtypeOf<vector3D, vector2D>;

interface vector2D { x: number, y: number };
interface vector3D extends vector2D { z: number };

const draw = ({ x, y }: vector2D): void => console.log(x + ", " + y);

draw({ x: 1, y: 2, z: 3 } as vector3D);
