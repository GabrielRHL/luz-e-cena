import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi"
import { Button } from "../../Button"

export const HeaderActions = () => {
    return (
        <div>
            <Button variant="white">
                <HiOutlineShoppingCart />
            </Button>
            <Button variant="white">
                <HiOutlineUser />
            </Button>
        </div>
    )
}