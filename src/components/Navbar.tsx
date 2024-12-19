import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const pathname = usePathname();

  const tabs = [
    {
      name: "Beranda",
      href: "/",
      current: pathname == "/",
    },
    {
      name: "Tentang Kami",
      href: "/about",
      current: pathname == "/about",
    },
    {
      name: "Kontak Kami",
      href: "/contact",
      current: pathname == "/contact",
    },
    {
      name: "Portofolio",
      href: "/portofolio",
      current: pathname == "/portofolio",
    },
    {
      name: "Artikel",
      href: "/article",
      current: pathname == "/article",
    },
  ];

  return (
    <nav className="bg-blue-700 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold">
          <Link href="/">
            <p>FQLabs</p>
          </Link>
        </div>
        <div className="md:hidden z-[999]" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul
          className={`absolute left-0 md:top-16 top-0 md:ml-60 ml-0 w-full z-50 bg-blue-700 p-6 space-y-4 transform transition-transform duration-300 md:static md:flex md:space-y-0 md:space-x-10 md:p-0 md:transform-none ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {tabs?.map((tab, index) => (
            <Link href={tab?.href}>
              <p
                className={`text-white duration-200 mt-2 text-lg ${
                  tab?.current ? "text-white font-bold" : "hover:text-blue-300"
                }`}
              >
                {tab?.name}
              </p>
            </Link>
          ))}
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
