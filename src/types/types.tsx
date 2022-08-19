import { StaticImageData } from 'next/image';
import { LinkProps as NextLinkProps } from 'next/link';
import React, { ReactNode } from 'react';

export interface maintenanceProps {
  image?: StaticImageData | string;
}
export interface Props {
  children?: ReactNode;
}
