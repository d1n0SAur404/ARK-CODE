import { forwardRef } from 'react'
import clsx from 'clsx'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid = false, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          'ark-input w-full text-sm',
          invalid && 'border-ark-danger focus:border-ark-danger',
          className,
        )}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input'
