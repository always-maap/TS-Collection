import cn from 'classnames';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/okaidia';
import { FC } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { useClipboard } from '../../hooks/useClipboard';

type Props = {
  children: string;
  className?: string;
};

const Code: FC<Props> = (props) => {
  const { children } = props;
  const [hasCopy, copy] = useClipboard(children);

  return (
    <Highlight {...defaultProps} code={children.trim()} language="typescript" theme={theme}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <div className="relative overflow-hidden rounded-2xl">
          <pre className={cn(className, 'py-4 bg-gray-900 overflow-auto')}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {tokens.length > 1 ? (
                  <span
                    aria-hidden="true"
                    className="select-none text-gray-300 text-right w-5 inline-block mx-2"
                  >
                    {i + 1}
                  </span>
                ) : (
                  <span className="mx-2 w-5" />
                )}{' '}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
            <button className="p-2 absolute" onClick={copy} style={{ top: 10, right: 10 }}>
              {hasCopy ? <FiCheck /> : <FiCopy />}
            </button>
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default Code;
