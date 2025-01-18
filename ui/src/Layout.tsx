import { Outlet, Link } from "react-router";
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

const Layout = () => {
    return (
        <>
            <div className="flex w-full pt-5 pb-10 items-center justify-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                            <Link to='/'>
                                Főoldal
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                            <Link to='/transactions'>
                                Tranzakciók
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                            <Link to='/balance'>
                                Egyenleg
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <Outlet />
        </>
    )
};

export default Layout;