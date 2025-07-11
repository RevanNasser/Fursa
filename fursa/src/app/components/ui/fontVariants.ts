import { cva } from 'class-variance-authority';

export const fontVariants = cva('', {
  variants: {
    font: {
      naskh: 'font-naskh',
      naskhBold: 'font-naskhBold',
      lifta: 'font-lifta',
    },
  },
  defaultVariants: {
    font: 'naskh',
  },
}); 