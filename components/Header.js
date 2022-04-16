import clsx from 'clsx';
import React from 'react';
import NavLink from "./NavLink";
import NavLinkMobile from './NavLinkMobile';

export default function Header() {
    const [isMenuOpened, setIsMenuOpened] = React.useState(false);

    function toggleMenu(event) {
        event && event.preventDefault();

        if (isMenuOpened) {
            setIsMenuOpened(false);
            document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
        } else {
            setIsMenuOpened(true);
            document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
        }
    }

    return <header>
        <div className="hidden lg:block">
            <div className="top-bar py-8 bg-black">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <img className="w-32" src="/img/toptal-logo-inverse.png"></img>
                            <div className="ml-3 text-white text-xl font-bold italic text-gray-400">
                                Exclusive access to top developers
                            </div>
                        </div>
                        <div className="flex items-center justify-end">
                            <div className="text-white text-gray-300">
                                Join toptal as
                            </div>
                            <a className="bg-white rounded-sm text-black py-1 px-3 font-semibold uppercase tracking-wide ml-4" href="#">Developer</a>
                            <a className="bg-white rounded-sm text-black py-1 px-3 font-semibold uppercase tracking-wide ml-2" href="">Company</a>

                            <a className="bg-gray-500 rounded-sm text-white py-1 px-3 font-semibold uppercase tracking-wide ml-8" href="">Login</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav-bar pb-4 bg-black">
                <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
                    <nav>
                        <NavLink>what</NavLink>
                        <NavLink>why</NavLink>
                        <NavLink>how</NavLink>
                        <NavLink>clients</NavLink>
                        <NavLink>team</NavLink>
                        <NavLink>labs</NavLink>
                        <NavLink>faq</NavLink>
                        <NavLink>contact</NavLink>
                    </nav>
                    <div className="text-white">
                        Call us: <a href="tel:888.323.4422">888.323.4422</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="block lg:hidden">
            <div className="mobile-top-bar py-6 bg-black">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button onClick={toggleMenu} className="text-white fill-current p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg>
                                <div className="sr-only">Open menu</div>
                            </button>
                            <img className="w-32 ml-4" src="/img/toptal-logo-inverse.png"></img>
                            <div className="hidden sm:block ml-3 text-white text-lg font-bold italic text-gray-400">
                                Exclusive access to top developers
                            </div>
                        </div>
                        <div className="flex items-center justify-end">
                            <a className="bg-gray-500 rounded-sm text-white py-1 px-3 font-semibold uppercase tracking-wide ml-8" href="">Login</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={clsx('mobile-nav-bar', isMenuOpened ? 'block' : 'hidden')} >
                <div onClick={toggleMenu} className="overlay fixed top-0 left-0 w-screen h-screen z-40 bg-black bg-opacity-80"></div>
                <div className="fixed top-0 left-0 w-full h-screen z-50 bg-black z-40 shadow-2xl" style={{ width: '90%', maxWidth: '320px' }}>
                    <div className="relative">
                        <div className="px-4 py-6 absolute top-0 -right-20 rounded-full">
                            <button onClick={toggleMenu} className="text-white fill-current p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg>
                                <div className="sr-only">Close menu</div>
                            </button>
                        </div>
                        <div className="overflow-y-auto">
                            <div className="text-white text-xl p-6 bg-gray-100 bg-opacity-20">
                                Call us: <a href="tel:888.323.4422">888.323.4422</a>
                            </div>

                            <nav className="mt-8 px-6">
                                <NavLinkMobile>what</NavLinkMobile>
                                <NavLinkMobile>why</NavLinkMobile>
                                <NavLinkMobile>how</NavLinkMobile>
                                <NavLinkMobile>clients</NavLinkMobile>
                                <NavLinkMobile>team</NavLinkMobile>
                                <NavLinkMobile>labs</NavLinkMobile>
                                <NavLinkMobile>faq</NavLinkMobile>
                                <NavLinkMobile>contact</NavLinkMobile>
                            </nav>

                            <div className="mt-24 bg-gray-200 bg-opacity-10 text-white text-xl p-6 border border-white border-opacity-10 m-6">
                                <div className="text-white text-gray-300 text-center">
                                    Join toptal as
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <a className="bg-gray-300 rounded-sm text-black py-1 px-3 font-semibold uppercase tracking-wide mt-2" href="#">Developer</a>
                                    <div className="text-2xl font-light text-gray-500 italic">or</div>
                                    <a className="bg-gray-300 rounded-sm text-black py-1 px-3 font-semibold uppercase tracking-wide mt-2" href="">Company</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
}