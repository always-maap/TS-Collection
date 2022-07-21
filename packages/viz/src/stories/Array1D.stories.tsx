import Array1D from '../renderers/Array1D';

export default {
  title: 'Renderers/Array1D',
  component: Array1D,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = () => <Array1D />;

export const LoggedOut = Template.bind({});
