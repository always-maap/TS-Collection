const ExternalLink = (props: any) => {
  return <a {...props} rel="noopener" target={props.target || '_blank'} />;
};

export default ExternalLink;
