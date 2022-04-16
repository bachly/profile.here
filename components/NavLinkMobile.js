export default function NavLinkMobile({ href = "#", children }) {
    return <a href={href} className="text-gray-300 hover:text-white font-light text-xl block py-4 border-b border-white border-opacity-20">{children}</a>
}