import clsx from 'clsx';
import React from 'react'
import Pod from '../components/Pod';
import PodWithList from '../components/PodWithList';
import PodWithMap from '../components/PodWithMap';
import ProfileImage from '../components/ProfileImage';
import ProfileLanguages from '../components/ProfileLanguage';
import ProfileLocation from '../components/ProfileLocation';
import ProfileName from '../components/ProfileName';
import ProfilePortfolio from '../components/ProfilePortfolio';
import ProfileExperience from '../components/ProfileExperience';
import SkillList from '../components/SkillList';
import { UserProfileContext } from '../lib/reactContexts';
import NavLink from '../components/NavLink';
import SelfIntro from '../components/SelfIntro';
import ToptalSkillLinks from '../components/ToptalSkillLinks';

export default function ProfilePage() {
    const [userProfile, setUserProfile] = React.useState({});

    return <>
        <header>
            <div className="top-bar py-8 bg-black">
                <div className="max-w-6xl mx-auto">
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

            <div className="nav-bar pb-5 bg-black">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
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
                </div>
            </div>
        </header>

        <div className="max-w-6xl mx-auto">
            <div className="pt-12"></div>

            <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
                <section className="border-t border-l border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-4">
                        <div className="col-span-1">
                            <ProfileImage />
                        </div>
                        <div className="lg:col-span-3 border-b border-r border-gray-200 bg-gray-100">
                            <div className="flex items-start">
                                <div className="flex-1 py-6 pl-10 pr-2">
                                    <ProfileName></ProfileName>
                                    <div className="pt-1"></div>
                                    <ProfileLocation />
                                    <ProfileLanguages></ProfileLanguages>
                                    <div className="pt-4"></div>
                                    <SkillList />
                                </div>
                                <div className="py-6 pr-6 pl-2">
                                    <div className="flex items-center">
                                        <button className="bg-black text-white py-2 px-4 text-xs font-semibold tracking-wide uppercase rounded-full mr-1">Save Profile</button>
                                        <button className="bg-gray-300 text-white py-2 px-4 text-xs font-semibold tracking-wide uppercase rounded-full">Publish Profile</button>
                                    </div>
                                    <div className="mt-2">
                                        <div className="text-sm text-gray-300">(You can only publish a completed profile)</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ProfilePortfolio />
                        <ProfileExperience />

                        <Pod
                            title="Sample code and algorithms"
                        />
                        <Pod
                            title="Availability"
                        />
                        <Pod
                            title="The most amazing..."
                        />
                        <Pod
                            title="In clients I look for..."
                        />
                        <PodWithMap
                            mapImageSrc={userProfile?.location?.mapImageSrc}
                            description={`Martin lives in ${userProfile?.location?.validatedLocation}`}
                        />
                        <Pod
                            title="Note"
                        />
                    </div>
                </section>
            </UserProfileContext.Provider>
        </div>

        <SelfIntro></SelfIntro>

        <ToptalSkillLinks></ToptalSkillLinks>

        <div className="mt-8 bg-black pt-6 pb-8">
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-cetner">
                    <h2>
                        <span className="text-xl text-gray-500">Join the toptal community.&nbsp;</span>
                        <span className="text-xl text-gray-300">Apply to work with us as a</span>
                        <a href="#" className="bg-white py-3 px-6 rounded-full font-bold uppercase tracking-wide text-sm ml-2">Developer</a>
                        <span className="text-gray-600 text-2xl italic ml-2 text-light">or</span>
                        <a href="#" className="bg-white py-3 px-6 rounded-full font-bold uppercase tracking-wide text-sm ml-2">Client</a>
                    </h2>
                </div>
            </div>
        </div>

        <footer className="bg-gray-300 pt-6 pb-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-start">
                    <div className="w-1/2">
                        <h2 className="font-bold tracking-tight cursor-default">About Toptal</h2>
                        <div className="pt-2 pr-20 cursor-default">
                            TopTal connects start-ups, businesses, and organization to a growing network of the best developers in the world.
                            Our engineers are available full- or part-time and are able to seemlessly integrate into your team.
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div className="flex items-start">
                            <div className="w-1/2">
                                <h2 className="font-bold tracking-tight cursor-default">FAQ</h2>
                                <nav className="pt-2">
                                    <a href="#" className="block pb-1 hover:underline">How can I join toptal?</a>
                                    <a href="#" className="block pb-1 hover:underline">What requirements I have to meet?</a>
                                    <a href="#" className="block pb-1 hover:underline">How do you pay me?</a>
                                    <a href="#" className="block pb-1 hover:underline">When can I start working?</a>
                                    <a href="#" className="block pb-1 hover:underline">How many hours can I work?</a>
                                </nav>
                            </div>
                            <div className="w-1/2">
                                <div className="flex items-start">
                                    <div className="w-1/3">
                                        <nav>
                                            <a href="#" className="block pb-1 font-bold hover:underline">What</a>
                                            <a href="#" className="block pb-1 font-bold hover:underline">Why</a>
                                            <a href="#" className="block pb-1 font-bold hover:underline">How</a>
                                            <a href="#" className="block pb-1 font-bold hover:underline">Clients</a>
                                            <a href="#" className="block pb-1 font-bold hover:underline">Team</a>
                                            <a href="#" className="block pb-1 font-bold hover:underline">Lab</a>
                                        </nav>
                                    </div>
                                    <div className="w-2/3">
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
            <div className="max-w-6xl mx-auto cursor-default">
                <div className="flex items-center justify-between">
                    <div className="text-xs">Copyright {new Date().getFullYear()} Toptal Development Inc.</div>
                    <div className="">
                        <nav>
                            <a href="#" className="text-xs hover:underline">Privacy Policy</a>
                            <a href="#" className="text-xs ml-2 hoverunderline">Terms of use</a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    </>
}