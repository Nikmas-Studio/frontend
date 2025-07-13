import { TranslationLanguage } from '@/types/translation-laguage';
import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface TranslationLanguageContextProps {
  selectedLanguage: TranslationLanguage;
}

interface TranslationLanguageDispatchContextProps {
  setSelectedTranslationLanguage: (
    newTranslationLanguage: TranslationLanguage,
  ) => void;
}

const TranslationLanguageContext =
  createContext<TranslationLanguageContextProps | null>(null);

const TranslationLanguageDispatchContext =
  createContext<TranslationLanguageDispatchContextProps | null>(null);

export function TranslationLanguageProvider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [selectedTranslationLanguage, setSelectedTranslationLanguage] =
    useState(TranslationLanguage.FRENCH);

  useEffect(() => {
    const savedTranslationLanguage = localStorage.getItem(
      'book-master-english-with-sherlock-holmes/translation-language',
    );

    const languageToSet = Object.values(TranslationLanguage).includes(
      savedTranslationLanguage as TranslationLanguage,
    )
      ? (savedTranslationLanguage as TranslationLanguage)
      : TranslationLanguage.FRENCH;

    setSelectedTranslationLanguage(languageToSet);
  }, []);

  function handleSetSelectedTranslationLanguage(
    newTranslationLanguage: TranslationLanguage,
  ): void {
    localStorage.setItem(
      'book-master-english-with-sherlock-holmes/translation-language',
      newTranslationLanguage,
    );

    setSelectedTranslationLanguage(newTranslationLanguage);
  }

  return (
    <TranslationLanguageContext.Provider
      value={{
        selectedLanguage: selectedTranslationLanguage,
      }}
    >
      <TranslationLanguageDispatchContext.Provider
        value={{
          setSelectedTranslationLanguage: handleSetSelectedTranslationLanguage,
        }}
      >
        {children}
      </TranslationLanguageDispatchContext.Provider>
    </TranslationLanguageContext.Provider>
  );
}

export function useTranslationLanguage(): TranslationLanguageContextProps {
  const context = useContext(TranslationLanguageContext);

  if (!context) {
    throw new Error(
      'TranslationLanguageContext must be used within a TranslationLanguageContextProvider',
    );
  }

  return context;
}

export function useTranslationLanguageDispatch(): TranslationLanguageDispatchContextProps {
  const context = useContext(TranslationLanguageDispatchContext);

  if (!context) {
    throw new Error(
      'TranslationLanguageDispatchContext must be used within a TranslationLanguageDispatchContextProvider',
    );
  }

  return context;
}
