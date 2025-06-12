import { CONNECTING_WORDS } from "@/constants/connecting-words";
import { ReactNode } from "react";

function wrapTextWithNbsp(text: string): string {
  return text.replace(
    new RegExp(`\\b(${CONNECTING_WORDS.join('|')}) `, 'gi'),
    (_, word) => `${word}\u00A0`,
  );
}

export function processChildren(children: ReactNode): ReactNode {
  if (typeof children === 'string') {
    return wrapTextWithNbsp(children);
  }

  if (Array.isArray(children)) {
    return children.map((child) => processChildren(child));
  }

  if (
    typeof children === 'object' &&
    children !== null &&
    'type' in children &&
    'props' in children
  ) {
    return {
      ...children,
      props: {
        ...children.props,
        children: processChildren(children.props.children),
      },
    };
  }

  return children;
}
