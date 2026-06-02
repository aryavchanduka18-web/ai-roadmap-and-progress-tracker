'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'success' | 'danger';
type Size = 'sm' | 'md';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 disabled:cursor-not-allowed disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary: 'bg-brand-500 text-zinc-950 hover:bg-brand-400',
  secondary: 'border border-zinc-800 bg-zinc-900 text-zinc-100 hover:border-zinc-700 hover:bg-zinc-800',
  ghost: 'text-zinc-300 hover:bg-zinc-800/60 hover:text-zinc-100',
  success: 'bg-emerald-500/90 text-zinc-950 hover:bg-emerald-400',
  danger: 'border border-rose-500/40 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20',
};

const sizes: Record<Size, string> = {
  sm: 'px-2.5 py-1.5 text-xs',
  md: 'px-3 py-2 text-sm',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'secondary', size = 'md', className, ...rest },
  ref
) {
  return <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...rest} />;
});
