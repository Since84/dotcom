import clsx from 'clsx';
import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

const base =
  'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring disabled:opacity-50 disabled:cursor-not-allowed transition-colors';

const variants: Record<string, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:ring-blue-500',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-400',
  ghost: 'hover:bg-gray-100 text-gray-800',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className, ...props }, ref) => (
    <button ref={ref} className={clsx(base, variants[variant], className)} {...props} />
  ),
);
Button.displayName = 'Button';
