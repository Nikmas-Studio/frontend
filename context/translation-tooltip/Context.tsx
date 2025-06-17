import {
  TranslationTooltipContent,
  TranslationTooltipFragmentPosition,
} from '@/types/master-english-with-sherlock-holmes/translation-tooltip';
import {
  createContext,
  Dispatch,
  MutableRefObject,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from 'react';

interface TranslationTooltipContextProps {
  isShown: boolean;
  isLoading: boolean;
  content: TranslationTooltipContent;
  fragmentPosition: TranslationTooltipFragmentPosition;
  ref: MutableRefObject<HTMLDivElement | null>;
}

interface TranslationTooltipDispatchContextProps {
  setIsShown: Dispatch<SetStateAction<boolean>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setContent: Dispatch<SetStateAction<TranslationTooltipContent>>;
  setFragmentPosition: Dispatch<
    SetStateAction<TranslationTooltipFragmentPosition>
  >;
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
  const [content, setContent] = useState<TranslationTooltipContent>({
    translation: '',
    error: false,
  });
  const [fragmentPosition, setFragmentPosition] =
    useState<TranslationTooltipFragmentPosition>({
      rect: new DOMRect(),
      scrollY: 0,
      scrollX: 0,
    });

  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <TranslationTooltipContext.Provider
      value={{
        isShown,
        isLoading,
        content,
        fragmentPosition,
        ref,
      }}
    >
      <TranslationTooltipDispatchContext.Provider
        value={{
          setIsShown,
          setIsLoading,
          setContent,
          setFragmentPosition,
        }}
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
