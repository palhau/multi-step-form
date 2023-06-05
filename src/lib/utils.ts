import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const FORM_STATE = {
  selectedIndex: 0,
  steps: {
    date: {
      valid: false,
      dirty: false,
      value: {
        intervals: [],
      },
    },
    valueTypes: {
      valid: false,
      dirty: false,
      value: {
        types: [],
      },
    },
    amount: {
      valid: false,
      dirty: false,
      value: {
        amounts: [],
      },
    },
  },
};