"use client"
import Image from "next/image";
import sidebarLogo from "@/public/assets/logo/sidebar-logo.png"
import { MenuItem } from "@/types/dashboard/manu-type"
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight, LayoutDashboard, IdCardLanyard } from "lucide-react";

export default function SidebarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({});

    const toggleMenu = (index: number) => {
        setOpenMenus((prev) => ({ [index]: !prev[index] }));
    };

    return (
        <div className="flex flex-row min-h-screen">
            <div className="max-w-72 h-full bg-gray-200 min-h-screen p-5 rounded-2xl">
                <Image src={sidebarLogo} alt="First HRM" />
                <div>
                    <ul className="space-y-2">
                        {data.map((item, index) => (
                            <li key={index}>
                                {item.children ? (
                                    <div>
                                        <button
                                            onClick={() => toggleMenu(index)}
                                            className="flex items-center justify-between w-full px-2 py-2 rounded hover:bg-gray-200 font-medium"
                                        >
                                            <div className="flex items-center gap-2">
                                                {item.icon}
                                                {item.title}
                                            </div>
                                            {openMenus[index] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                        </button>
                                        {openMenus[index] && (
                                            <ul className="ml-6 mt-1 space-y-1 text-sm">
                                                {item.children.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            href={subItem.path!}
                                                            className="block px-2 py-1 rounded hover:bg-gray-200"
                                                        >
                                                            {subItem.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={item.path!}
                                        className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-200 font-medium"
                                    >
                                        {item.icon}
                                        {item.title}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-1 bg-white p-5">{children}</div>
        </div>
    );
};

const data: MenuItem[] = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <LayoutDashboard size={16} />
    },
    {
        title: "Employees",
        icon: <IdCardLanyard size={16} />,
        children: [
            {
                title: "All Employees",
                path: "/employees"
            },
            {
                title: "Add New",
                path: "/employees/add"
            }
        ]
    },
    {
        title: "Reports",
        icon: <h1>A</h1>,
        children: [
            {
                title: "Attendance Report",
                path: "/reports/attendance"
            },
            {
                title: "Salary Report",
                path: "/reports/salary"
            }
        ]
    },
    {
        title: "Settings",
        path: "/settings",
        icon: <h1>A</h1>
    }
];

