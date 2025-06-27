"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ListCollapse, Home, Users, ChevronDown, CircleDollarSign } from "lucide-react";
import sidebarLogo from "@/public/assets/logo/sidebar-logo.png";

export default function SidebarLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const SIDEBAR_EXPANDED = 250;
    const SIDEBAR_COLLAPSED = 80;

    const [sidebarWidth, setSidebarWidth] = useState<number>(SIDEBAR_EXPANDED);
    const [activeMenu, setActiveMenu] = useState<number>(1);
    const [activeSubMenu, setActiveSubMenu] = useState<number>(0)

    const toggleSidebar = () => {
        setSidebarWidth((prevWidth) =>
            prevWidth === SIDEBAR_COLLAPSED ? SIDEBAR_EXPANDED : SIDEBAR_COLLAPSED
        );
    };

    const useActiveMenu = (menu: number, subMenu: number) => {
        setActiveMenu(menu)
        setActiveSubMenu(subMenu == 0 ? activeSubMenu : subMenu);
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            <aside
                className="p-4 m-2 rounded-2xl transition-all duration-300 h-full overflow-hidden"
                style={{ width: `${sidebarWidth}px` }}
            >
                <div className={`flex justify-between items-center ${sidebarWidth === SIDEBAR_COLLAPSED && "justify-center"}`}>
                    {sidebarWidth === SIDEBAR_EXPANDED && (
                        <Image
                            src={sidebarLogo}
                            alt="First HRM"
                            className="w-8/12 drop-shadow-2xl"
                        />
                    )}
                    <button
                        onClick={toggleSidebar}
                        className="p-2 bg-gray-200 rounded-md shadow-sm hover:scale-105 transition"
                    >
                        <ListCollapse size={18} color="black" />
                    </button>
                </div>

                <hr className="opacity-5 my-5" />

                <nav className="space-y-5 text-sm text-gray-700 px-2 mt-7">
                    {/* Dashboard button */}
                    <Link
                        href="#"
                        className={`sidebar-button-main ${activeMenu === 1 && "sidebar-button-active"}`}
                        onClick={() => useActiveMenu(1, 1111)}
                    >
                        <Home size={activeMenu === 1 ? 22 : 18} color="black" />
                        {sidebarWidth === SIDEBAR_EXPANDED && <h1>Dashboard</h1>}
                    </Link>

                    {/* Employee button */}
                    <div className="csb-container">
                        <button
                            onClick={() => useActiveMenu(2, 0)}
                            className={`csb-button ${activeMenu === 2 && "scale-105"}`}
                        >
                            <span className="csb-text-container">
                                <Users size={activeMenu === 2 ? 22 : 18} />
                                {sidebarWidth === SIDEBAR_EXPANDED && <h1>Teams</h1>}
                            </span>
                            {sidebarWidth === SIDEBAR_EXPANDED &&
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform ${activeMenu === 2 ? "rotate-180" : ""}`}
                                />}
                        </button>
                        {activeMenu === 2 && sidebarWidth === SIDEBAR_EXPANDED && (
                            <div className="-space-y-2">
                                <Link href="#" onClick={() => setActiveSubMenu(2.1)} className={`block p-1 rounded ${activeMenu === 2 && "csb-active-sub"}`}>
                                    <span className={`w-0.5 h-8 bg-gray-200 rounded-t-full ${activeSubMenu === 2.1 && "bg-gray-950"}`} />
                                    <h1 className={`text-xs hover:scale-105 ${activeSubMenu === 2.1 && "font-black"}`}>Employee</h1>
                                </Link>
                                <Link href="#" onClick={() => setActiveSubMenu(2.2)} className={`block p-1 rounded ${activeMenu === 2 && "csb-active-sub"}`}>
                                    <span className={`w-0.5 h-8 bg-gray-200 rounded-t-full ${activeSubMenu === 2.2 && "bg-gray-950"}`} />
                                    <h1 className={`text-xs hover:scale-105 ${activeSubMenu === 2.2 && "font-black"}`}>Attendance</h1>
                                </Link>
                                <Link href="#" onClick={() => setActiveSubMenu(2.3)} className={`block p-1 rounded ${activeMenu === 2 && "csb-active-sub"}`}>
                                    <span className={`w-0.5 h-8 bg-gray-200 rounded-t-full ${activeSubMenu === 2.3 && "bg-gray-950"}`} />
                                    <h1 className={`text-xs hover:scale-105 ${activeSubMenu === 2.3 && "font-black"}`}>Checklist</h1>
                                </Link>
                                <Link href="#" onClick={() => setActiveSubMenu(2.4)} className={`block p-1 rounded ${activeMenu === 2 && "csb-active-sub"}`}>
                                    <span className={`w-0.5 h-8 bg-gray-200 rounded-t-full ${activeSubMenu === 2.4 && "bg-gray-950"}`} />
                                    <h1 className={`text-xs hover:scale-105 ${activeSubMenu === 2.4 && "font-black"}`}>Time Off</h1>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Finance button */}
                    <div className="csb-container">
                        <button
                            onClick={() => useActiveMenu(3, 0)}
                            className={`csb-button ${activeMenu === 2 && "scale-105"}`}
                        >
                            <span className="csb-text-container">
                                <CircleDollarSign size={activeMenu === 3 ? 22 : 18} />
                                {sidebarWidth === SIDEBAR_EXPANDED && <h1>Finance</h1>}
                            </span>
                            {sidebarWidth === SIDEBAR_EXPANDED &&
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform ${activeMenu === 3 ? "rotate-180" : ""}`}
                                />}
                        </button>
                        {activeMenu === 3 && sidebarWidth === SIDEBAR_EXPANDED && (
                            <div className="-space-y-2">
                                <Link href="#" onClick={() => setActiveSubMenu(3.1)} className={`block p-1 rounded ${activeMenu === 3 && "csb-active-sub"}`}>
                                    <span className={`w-0.5 h-8 bg-gray-200 rounded-t-full ${activeSubMenu === 3.1 && "bg-gray-950"}`} />
                                    <h1 className={`text-xs hover:scale-105 ${activeSubMenu === 3.1 && "font-black"}`}>Payroll</h1>
                                </Link>
                                <Link href="#" onClick={() => setActiveSubMenu(3.2)} className={`block p-1 rounded ${activeMenu === 3 && "csb-active-sub"}`}>
                                    <span className={`w-0.5 h-8 bg-gray-200 rounded-t-full ${activeSubMenu === 3.2 && "bg-gray-950"}`} />
                                    <h1 className={`text-xs hover:scale-105 ${activeSubMenu === 3.2 && "font-black"}`}>Expenses</h1>
                                </Link>
                                <Link href="#" onClick={() => setActiveSubMenu(3.3)} className={`block p-1 rounded ${activeMenu === 3 && "csb-active-sub"}`}>
                                    <span className={`w-0.5 h-8 bg-gray-200 rounded-t-full ${activeSubMenu === 3.3 && "bg-gray-950"}`} />
                                    <h1 className={`text-xs hover:scale-105 ${activeSubMenu === 3.3 && "font-black"}`}>Incentive</h1>
                                </Link>
                                <Link href="#" onClick={() => setActiveSubMenu(3.4)} className={`block p-1 rounded ${activeMenu === 3 && "csb-active-sub"}`}>
                                    <span className={`w-0.5 h-8 bg-gray-200 rounded-t-full ${activeSubMenu === 3.4 && "bg-gray-950"}`} />
                                    <h1 className={`text-xs hover:scale-105 ${activeSubMenu === 3.4 && "font-black"}`}>Payment Information</h1>
                                </Link>
                            </div>
                        )}
                    </div>




                </nav>
            </aside>

            <main className="flex-1 bg-white p-5 mt-2 rounded-ss-lg shadow-md">
                {children}
            </main>
        </div>
    );
}
