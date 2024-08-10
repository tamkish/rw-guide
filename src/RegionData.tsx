import Color, {
  ColorConstructor,
  ColorObject,
  ColorTypes,
  PlainColorObject,
} from "colorjs.io";

export type RegionData = {
  id: string;
  name: string;
  color: PlainColorObject;

  x: number;
  y: number;

  parts: RegionPart[];
  // label: { x?: number | undefined; y?: number | undefined; text: string };
};
export type RegionPart = {
  name?: string | undefined;

  x?: number | undefined;
  y?: number | undefined;

  w: number;
  h: number;
};
