import { Array1DAction } from '@ts-collection/protocol';

type Props = {
  initial: number[];
  actions: Array1DAction[];
};

export default function Array1D(props: Props) {
  const { initial, actions } = props;
  return (
    <div className="flex">
      {initial.map((value, index) => {
        return <div key={index}>{value}</div>;
      })}
    </div>
  );
}
