import React, { InputHTMLAttributes } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface TextInputRootProps {
    children: React.ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
    return (
        <div className="flex items-center gap-3 w-full h-12 px-4 py-3 bg-gray-800 rounded focus-within:ring-2 ring-cyan-300">
            {children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
    children: React.ReactNode;
}

function TextInputIcon({children}: TextInputIconProps) {
    return (
        <Slot className="w-6 h-6 text-gray-400">
            {children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

function TextInputInput(props: TextInputInputProps) {
    return (
        <input {...props}
            className="bg-transparent flex-1 font-sans text-gray-100 text-xs placeholder:text-gray-400 outline-none"
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}