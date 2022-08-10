import { StaticImageData } from 'next/image';
import { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';

export interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Omit<NextLinkProps, 'href' | 'as'> {
  to: NextLinkProps['href'];
  linkAs?: NextLinkProps['as'];
  href?: NextLinkProps['href'];
}

export interface maintenanceProps {
  image?: StaticImageData | string;
}
