import { forwardRef } from 'react'
import clsx from 'clsx'

type Variant = 'primary' | 'accent' | 'outline' | 'ghost' | 'danger' | 'success'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-ark-primary text-ark-bg hover:bg-ark-primary-hover shadow-sm font-medium',
  accent:
    'bg-ark-accent text-white hover:bg-ark-accent-hover shadow-sm font-medium',
  outline:
    'border border-ark-border-strong text-ark-text hover:bg-ark-card-hover',
  ghost: 'text-ark-text-secondary hover:bg-ark-card-hover hover:text-ark-text',
  danger:
    'bg-ark-danger text-white hover:opacity-90 shadow-sm font-medium',
  success:
    'bg-ark-success text-white hover:opacity-90 shadow-sm font-medium',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-5 py-2.5 text-sm rounded-lg',
  lg: 'px-7 py-3 text-base rounded-lg',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center gap-2 transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-ark-primary focus:ring-offset-2 focus:ring-offset-transparent',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'active:scale-[0.97]',
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'
