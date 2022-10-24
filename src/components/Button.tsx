import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp {...props}
            className={clsx(
                'w-full text-black text-sm font-sans font-semibold px-4 py-3 rounded bg-cyan-500 transition-colors hover:bg-cyan-300 outline-none focus:ring-2 ring-gray-100',
                className,
            )}
        >
            {children}
        </Comp>
    )
}