import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const FORM_STATE = {
  date: {
    valid: false,
    value: {
      intervals: [{start: '', end: ''}],
    },
  },
  valueTypes: {
    valid: false,
    value: {
      types: [''],
    },
  },
  amount: {
    valid: false,
    value: {
      amounts: [''],
    },
  },
};
