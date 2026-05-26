type TextEditorProps = {
    placeholder: string
    className: string
    value: string
}

export function TextEditor({
                               placeholder,
                               className,
                               value,
                           }: TextEditorProps) {
    return (
        <textarea
            placeholder={placeholder}
            className={className}
            value={value}
        />
    )
}

