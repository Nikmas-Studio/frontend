import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface TextListProps {
  className?: string;
  children?: ReactNode;
}

const TextUl = forwardRef<HTMLUListElement, TextListProps>(function TextUl(
  { className, children }: TextListProps,
  ref,
): ReactElement {
  const classes = classNames(
    `-mt-5  mb-2  list-disc  pl-7  
     marker:text-git-black  marker:text-2xl  dark:marker:text-git-white`,
    className,
  );

  return (
    <ul ref={ref} className={classes}>
      {children}
    </ul>
  );
});

export default TextUl;
