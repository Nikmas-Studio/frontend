import { MAX_TRANSLATION_FRAGMENT_LENGTH } from '@/constants/book-master-english-with-sherlock-holmes/main';
import { BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI } from '@/constants/general';
import { useTranslationLanguage } from '@/context/book-master-english-with-sherlock-holmes/translation-language/Context';
import { useBookVersion } from '@/context/book-version/Context';
import { useTranslationTooltipDispatch } from '@/context/translation-tooltip/Context';
import { getBookPartByPage } from '@/utils/book-master-english-with-sherlock-holmes/get-book-part-by-page';
import { getSelectionData } from '@/utils/get-selection-data';
import { translate } from '@/utils/translate';
import axios from 'axios';
import { useEffect, useRef } from 'react';

export function useSelectTranslation(): void {
  const bookVersion = useBookVersion();
  const lastTranslationRequestId = useRef(0);
  const { selectedLanguage } = useTranslationLanguage();
  const { setIsShown, setIsLoading, setContent, setFragmentPosition } =
    useTranslationTooltipDispatch();

  useEffect(() => {
    let selectionTimeout: NodeJS.Timeout | undefined;

    function handleSelectionChange(): void {
      clearTimeout(selectionTimeout);

      selectionTimeout = setTimeout(async () => {
        const selectionData = getSelectionData();

        if (selectionData === null) {
          return;
        }

        const currentTranslationRequestId = ++lastTranslationRequestId.current;

        if (selectionData.fragment.length > MAX_TRANSLATION_FRAGMENT_LENGTH) {
          showTranslationTooltip({
            range: selectionData.range,
          });

          setTimeout(() => {
            showTranslationTooltip({
              range: selectionData.range,
              content:
                'Selected text is too long. Please highlight a\u00A0shorter fragment.',
              error: true,
            });
          }, 700);

          return;
        }

        let bookPart = '';
        if (selectionData.pageNumber !== null) {
          bookPart = getBookPartByPage(selectionData.pageNumber) ?? '';
        }

        showTranslationTooltip({
          range: selectionData.range,
        });

        const start = Date.now();
        let translation: string;
        let error = false;
        try {
          translation = await translate({
            bookURI: BOOK_MASTER_ENGLISH_WITH_SHERLOCK_HOLMES_URI,
            targetLanguage: selectedLanguage,
            context: selectionData.context,
            fragment: selectionData.fragment,
            bookPart,
            bookVersion,
          });
        } catch (e) {
          error = true;
          if (axios.isAxiosError(e) && e.response?.status === 400) {
            translation =
              'In the demo, there is a\u00A0technical restriction on\u00A0translating certain fragments. Please select a\u00A0different fragment or\u00A0subscribe to\u00A0the\u00A0full version.\u00A0';
          } else if (axios.isAxiosError(e) && e.response?.status === 402) {
            translation =
              "You've reached your\u00A0yearly translation credit limit. Please contact team@nikmas.studio to\u00A0request an\u00A0increase.";
          } else {
            translation =
              'An\u00A0error occurred while\u00A0translating the\u00A0text. Please try again after\u00A0a\u00A0pause.';
          }
        }
        const timeElapsed = Date.now() - start;
        const timeoutDuration = Math.max(700 - timeElapsed, 0);

        setTimeout(() => {
          if (
            currentTranslationRequestId !== lastTranslationRequestId.current
          ) {
            return;
          }

          showTranslationTooltip({
            range: selectionData.range,
            content: translation,
            error,
          });
        }, timeoutDuration);

        function showTranslationTooltip({
          range,
          content,
          error = false,
        }: {
          range: Range;
          content?: string;
          error?: boolean;
        }): void {
          const rects = range.getClientRects();
          if (rects.length === 0) {
            return;
          }
          const firstLineRect = rects[0];
          const lastLineRect = rects[rects.length - 1];

          const tooltip = document.getElementById('translation-tooltip');
          if (!tooltip) return;

          if (content !== undefined) {
            setContent({
              translation: content,
              error,
            });
            setIsLoading(false);
          } else {
            setIsLoading(true);
          }

          setIsShown(true);
          setFragmentPosition({
            firstLineRect,
            lastLineRect,
            scrollX: window.scrollX,
          });
        }
      }, 500);
    }

    document.addEventListener('selectionchange', handleSelectionChange);

    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, [
    setContent,
    setIsLoading,
    setIsShown,
    setFragmentPosition,
    selectedLanguage,
    bookVersion,
  ]);
}
