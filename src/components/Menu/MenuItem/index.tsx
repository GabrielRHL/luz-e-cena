import { Link } from "../../Link"

interface MenuitemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    href?: string;
}

export const MenuItem = ({children, href = '#'}: MenuitemProps) => {
    return (
        <li>
            <Link href={href}>{children}</Link>
        </li>
    )
}