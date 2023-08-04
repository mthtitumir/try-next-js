import NavLink from "@/components/NavLink";
import Link from "next/link";

const sideLinks = [
    {
        path: '/dashboard',
        title: 'Dashboard',
    },
    {
        path: '/dashboard/add-product',
        title: 'Add Product',
    },
    {
        path: '/dashboard/manage-products',
        title: 'Manage Products',
    },
    {
        path: '/',
        title: 'Home',
    },
]
const Sidebar = () => {
    return (
        <aside className="mr-10">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            <ul>
                {
                    sideLinks.map(({path, title})=> <li key={path} className="my-2"><NavLink exact activeClassName="text-blue-500" href={path}>{title}</NavLink></li>)
                }
            </ul>
        </aside>
    );
};

export default Sidebar;