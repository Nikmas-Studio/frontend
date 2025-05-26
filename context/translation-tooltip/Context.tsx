import {
  TranslationTooltipContent,
  TranslationTooltipPosition,
} from '@/types/master-english-with-sherlock-holmes/translation-tooltip';
import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface TranslationTooltipContextProps {
  isShown: boolean;
  isLoading: boolean;
  content: TranslationTooltipContent;
  position: TranslationTooltipPosition;
}

interface TranslationTooltipDispatchContextProps {
  setIsShown: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setContent: Dispatch<SetStateAction<TranslationTooltipContent>>;
  setPosition: Dispatch<SetStateAction<TranslationTooltipPosition>>;
}

const TranslationTooltipContext =
  createContext<TranslationTooltipContextProps | null>(null);

const TranslationTooltipDispatchContext =
  createContext<TranslationTooltipDispatchContextProps | null>(null);

export function TranslationTooltipProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [isShown, setIsShown] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [content, setContent] = useState<TranslationTooltipContent>('');
  const [position, setPosition] = useState<TranslationTooltipPosition>({
    top: 0,
    left: 0,
  });

  return (
    <TranslationTooltipContext.Provider
      value={{
        isShown,
        isLoading,
        content,
        position,
      }}
    >
      <TranslationTooltipDispatchContext.Provider
        value={{ setIsShown, setIsLoading, setContent, setPosition }}
      >
        {children}
      </TranslationTooltipDispatchContext.Provider>
    </TranslationTooltipContext.Provider>
  );
}

export function useTranslationTooltip(): TranslationTooltipContextProps {
  const context = useContext(TranslationTooltipContext);

  if (!context) {
    throw new Error(
      'TranslationTooltipContext must be used within a TranslationTooltipContextProvider',
    );
  }

  return context;
}

export function useTranslationTooltipDispatch(): TranslationTooltipDispatchContextProps {
  const context = useContext(TranslationTooltipDispatchContext);

  if (!context) {
    throw new Error(
      'TranslationTooltipDispatchContext must be used within a TranslationTooltipDispatchContextProvider',
    );
  }

  return context;
}
