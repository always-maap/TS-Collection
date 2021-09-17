import copy from 'copy-to-clipboard';
import { useCallback, useEffect, useState } from 'react';

export function useClipboard(text: string, timeout = 1500) {
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = useCallback(() => {
    const didCopy = copy(text);
    setHasCopied(didCopy);
  }, [text]);

  useEffect(() => {
    if (hasCopied) {
      const id = setTimeout(() => {
        setHasCopied(false);
      }, timeout);

      return () => clearTimeout(id);
    }
  }, [timeout, hasCopied]);

  return [hasCopied, onCopy] as const;
}
