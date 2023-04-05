import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface maintenanceProps {
  image?: StaticImageData | string;
}
export interface Children {
  children?: ReactNode;
  id: string;
}

interface Card {
  title: string;
  image: string;
  description: string;
  demo: string;
  repo: string;
  completed: boolean;
  isMobile: boolean;
}

export interface Cards {
  [key: string]: Card;
}
