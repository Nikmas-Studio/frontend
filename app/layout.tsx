import { Metadata } from 'next';
import { ReactElement, ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nikmas Studio',
  description:
    'Next-gen publishing studio that specializes in creating interactive web books.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactElement {
  return <>{children}</>;
}
