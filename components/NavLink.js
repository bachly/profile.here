export default function NavLink({ href = "#", children }) {
    return <a href={href} className="text-gray-300 hover:text-white font-light text-xl mr-4">{children}</a>
}