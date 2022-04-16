import clsx from 'clsx';
import React from 'react'
import Pod from '../components/Pod';
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
import Header from '../components/Header';

export default function ProfilePage() {
    const [userProfile, setUserProfile] = React.useState({});

    return <>
        <Header />
        <div className="max-w-6xl mx-auto px-4">
            <div className="pt-4 lg:pt-10"></div>

            <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
                <section className="border-t border-l border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                        <div className="col-span-1 sm:col-span-1 lg:col-span-1">
                            <ProfileImage />
                        </div>
                        <div className="col-span-1 sm:col-span-2 lg:col-span-3 border-b border-r border-gray-200 bg-gray-100">
                            <div className="flex flex-wrap items-start">
                                <div className="w-full md:w-3/5 flex-1 pt-6 pb-4 lg:pb-6 pl-10 pr-2">
                                    <ProfileName></ProfileName>
                                    <div className="pt-1"></div>
                                    <ProfileLocation />
                                    <ProfileLanguages></ProfileLanguages>
                                    <div className="pt-4"></div>
                                    <SkillList />
                                </div>
                                <div className="w-full md:w-2/5 pb-4 pt-6 lg:pb-6 pl-10 lg:pl-4 pr-4">
                                    <div className="flex flex-wrap items-center">
                                        <button className="bg-black text-white py-2 px-4 text-xs font-semibold tracking-wide uppercase rounded-full mr-1 mb-2">Save Profile</button>
                                        <button className="bg-gray-300 text-white py-2 px-4 text-xs font-semibold tracking-wide uppercase rounded-full mb-2">Publish Profile</button>
                                    </div>
                                    <div className="text-sm text-gray-300">(You can only publish a completed profile)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-wrap items-center justify-cetner">
                    <h2 className="w-full lg:w-auto text-center mb-2">
                        <span className="text-xl text-gray-500">Join the toptal community.&nbsp;</span>
                        <div className="block sm:hidden"/>
                        <span className="text-xl text-gray-300">Apply to work with us as a</span>
                    </h2>
                    <div className="w-full lg:w-auto flex items-center justify-center">
                        <a href="#" className="bg-white py-3 px-6 rounded-full font-bold uppercase tracking-wide text-sm ml-2">Developer</a>
                        <span className="text-gray-600 text-2xl italic ml-2 text-light">or</span>
                        <a href="#" className="bg-white py-3 px-6 rounded-full font-bold uppercase tracking-wide text-sm ml-2">Client</a>
                    </div>
                </div>
            </div>
        </div>

        <footer className="bg-gray-300 pt-6 pb-4">
            <div className="max-w-md sm:max-w-2xl lg:max-w-6xl mx-auto px-4">
                <div className="flex flex-wrap items-start">
                    <div className="w-full sm:w-1/2">
                        <h2 className="font-bold tracking-tight cursor-default">About Toptal</h2>
                        <div className="pt-2 sm:pr-20 cursor-default">
                            TopTal connects start-ups, businesses, and organization to a growing network of the best developers in the world.
                            Our engineers are available full- or part-time and are able to seemlessly integrate into your team.
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2">
                        <div className="flex flex-wrap items-start">
                            <div className="w-full lg:w-1/2 pt-6 sm:pt-0">
                                <h2 className="font-bold tracking-tight cursor-default">FAQ</h2>
                                <nav className="pt-2">
                                    <a href="#" className="block pb-1 hover:underline">How can I join toptal?</a>
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
            <div className="max-w-md sm:max-w-2xl lg:max-w-6xl mx-auto px-4 cursor-default">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full sm:w-auto text-xs pt-6 sm:pt-0">Copyright {new Date().getFullYear()} Toptal Development Inc.</div>
                    <div className="w-full sm:w-auto pt-2 sm:pt-0">
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