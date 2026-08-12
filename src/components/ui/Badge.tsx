import { forwardRef } from 'react'
import clsx from 'clsx'

type BadgeVariant =
  | 'default'
  | 'primary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-ark-card-hover text-ark-text-secondary',
  primary: 'bg-ark-primary-light text-ark-primary',
  accent: 'bg-ark-accent-light text-ark-accent',
  success: 'bg-ark-success-light text-ark-success',
  warning: 'bg-ark-warning-light text-ark-warning',
  danger: 'bg-ark-danger-light text-ark-danger',
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={clsx(
          'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium',
          variantClasses[variant],
          className,
        )}
        {...props}
      />
    )
  },
)

Badge.displayName = 'Badge'
