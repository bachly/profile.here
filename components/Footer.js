export default function Footer() {
    return <footer className="bg-gray-300 pt-6 pb-4">
        <div className="max-w-md sm:max-w-2xl lg:max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap items-start">
                <div className="w-full sm:w-1/2">
                    <h2 className="font-bold tracking-tight cursor-default">About DevMarket</h2>
                    <div className="pt-2 sm:pr-20 cursor-default">
                        DevMarket connects start-ups, businesses, and organization to a growing network of the best developers in the world.
                        Our engineers are available full- or part-time and are able to seemlessly integrate into your team.
                    </div>
                </div>
                <div className="w-full sm:w-1/2">
                    <div className="flex flex-wrap items-start">
                        <div className="w-full lg:w-1/2 pt-6 sm:pt-0">
                            <h2 className="font-bold tracking-tight cursor-default">FAQ</h2>
                            <nav className="pt-2">
                                <a href="#" className="block pb-1 hover:underline">How can I join DevMarket?</a>
                                <a href="#" className="block pb-1 hover:underline">What requirements I have to meet?</a>
                                <a href="#" className="block pb-1 hover:underline">How do you pay me?</a>
                                <a href="#" className="block pb-1 hover:underline">When can I start working?</a>
                                <a href="#" className="block pb-1 hover:underline">How many hours can I work?</a>
                            </nav>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="flex flex-wrap items-start">
                                <div className="w-full sm:w-1/3 pt-6 lg:pt-0">
                                    <nav>
                                        <a href="#" className="block pb-1 font-bold hover:underline">What</a>
                                        <a href="#" className="block pb-1 font-bold hover:underline">Why</a>
                                        <a href="#" className="block pb-1 font-bold hover:underline">How</a>
                                        <a href="#" className="block pb-1 font-bold hover:underline">Clients</a>
                                        <a href="#" className="block pb-1 font-bold hover:underline">Team</a>
                                        <a href="#" className="block pb-1 font-bold hover:underline">Lab</a>
                                    </nav>
                                </div>
                                <div className="w-ful sm:w-2/3 pt-6 lg:pt-0">
                                    <h2 className="font-bold tracking-tight cursor-default">Contact</h2>
                                    <nav className="pt-2">
                                        <a href="#" className="block pb-1">Join us</a>
                                        <a href="#" className="block pb-1">Send us an e-mail</a>
                                        <a href="#" className="block pb-1">Follow us on Twitter</a>
                                        <a href="#" className="block pb-1">Call 888.323.4422</a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-md sm:max-w-2xl lg:max-w-6xl mx-auto px-4 pt-6 cursor-default">
            <div className="flex flex-wrap items-center justify-between">
                <div className="w-full sm:w-auto text-xs pt-6 sm:pt-0">Copyright {new Date().getFullYear()} DevMarket Inc.</div>
                <div className="w-full sm:w-auto pt-2 sm:pt-0">
                    <nav>
                        <a href="#" className="text-xs hover:underline">Privacy Policy</a>
                        <a href="#" className="text-xs ml-2 hoverunderline">Terms of use</a>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
}