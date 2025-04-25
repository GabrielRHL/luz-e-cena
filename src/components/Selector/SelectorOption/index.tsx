interface SelectorOption extends React.OptionHTMLAttributes<HTMLOptionElement> {
    label: string;
    value: string;
}

export const SelectorOption = ({label, value, ...rest}: SelectorOption) => {
    return (
        <option value={value} {...rest}>
            {label}
        </option>
    )
}