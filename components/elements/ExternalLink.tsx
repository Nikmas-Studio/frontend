import classNames from 'classnames';
import { ReactElement, ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  className?: string;
  defaultTextLink?: boolean;
  children: ReactNode;
}

function ExternalLink({
  href,
  children,
  className,
  defaultTextLink,
}: ExternalLinkProps): ReactElement {
  const classes = classNames(
    {
      'default-underlined-link': defaultTextLink,
    },
    className,
  );

  return (
    <a href={href} target='_blank' rel='noreferrer' className={classes}>
      {children}
    </a>
  );
}

export default ExternalLink;
