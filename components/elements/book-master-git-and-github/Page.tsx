import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';

interface PageProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const Page = forwardRef<HTMLElement, PageProps>(function Page(
  { id, className, children }: PageProps,
  ref,
): ReactElement {
  const classes = classNames(
    'relative  z-30  min-h-screen  w-screen',
    className,
  );

  return (
    <section id={id} ref={ref} className={classes}>
      {children}
    </section>
  );
});

export default Page;
