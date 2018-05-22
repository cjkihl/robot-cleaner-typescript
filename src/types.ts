export type Position = {
  x: number;
  y: number;
};

export type Boundingbox = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};

export type Instructions = {
  iterations: number;
  initialPos: Position;
  movements: Movement[];
};

export type Movement = {
  dir: 'N' | 'E' | 'S' | 'W';
  steps: number;
};
