export interface Array1D<TData> {
  name: string;
  version: 1;
  renderer: 'Array1D';
  code: {
    language: string;
    source: string;
  };
  initial: TData[];
  actions: Array1DAction[];
}

export type Array1DAction =
  | {
      type: 'point';
      data: number[];
    }
  | {
      type: 'swap';
      data: [number, number];
    };
