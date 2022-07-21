import Array1D from '../renderers/Array1D';

export default {
  title: 'Renderers/Array1D',
  component: Array1D,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () => <Array1D initial={[1, 2, 3, 4]} actions={[]} />;

export const LoggedOut = Template.bind({});
