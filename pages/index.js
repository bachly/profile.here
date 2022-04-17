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
import PodWithNoteEditable from '../components/PodWithNoteEditable';
import ProfileMostAmazing from '../components/ProfileMostAmazing';
import ProfileClientRequirements from '../components/ProfileClientRequirements';
import ProfileNote from '../components/ProfileNote';
import PodWithImage from '../components/PodWithImage';
import ProfileLocationMap from '../components/ProfileLocationMap';
import Footer from '../components/Footer';

export default function ProfilePage() {
    const [userProfile, setUserProfile] = React.useState({});

    return <>
        <Header />
        <div className="sm:max-w-lg md:max-w-3xl lg:max-w-6xl mx-auto px-4">
            <div className="pt-4 lg:pt-10"></div>

            <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
                <section className="border-t border-l border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                        <div className="col-span-1 sm:col-span-1 lg:col-span-1 border-r border-b border-gray-200 bg-gray-300">
                            <div className="mx-auto">
                                <ProfileImage />
                            </div>
                        </div>
                        <div className="col-span-1 sm:col-span-2 lg:col-span-3 border-b border-r border-gray-200 bg-gray-100">
                            <div className="flex flex-wrap items-start">
                                <div className="w-full md:w-3/5 flex-1 pt-6 pr-2 pb-4 pl-4 lg:pb-6 lg:pl-10">
                                    <div className="sm:max-w-lg mx-auto">
                                        <ProfileName></ProfileName>
                                        <div className="pt-1"></div>
                                        <ProfileLocation />
                                        <ProfileLanguages></ProfileLanguages>
                                        <div className="pt-4"></div>
                                        <SkillList />
                                    </div>
                                </div>
                                <div className="w-full md:w-2/5 pb-4 pt-6 pr-4 pl-4 lg:pb-6 lg:pl-4">
                                    <div className="flex flex-wrap items-center justify-center">
                                        <button className="bg-black text-white py-2 px-4 text-xs font-semibold tracking-wide uppercase rounded-full mr-1 mb-2">Save Profile</button>
                                        <button className="bg-gray-300 text-white py-2 px-4 text-xs font-semibold tracking-wide uppercase rounded-full mb-2">Publish Profile</button>
                                    </div>
                                    <div className="text-sm text-gray-300 text-center">(You can only publish a completed profile)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        <ProfilePortfolio />
                        <ProfileExperience />
                        <PodWithImage title="Sample code and algorithms" imageSrc="/img/code.png" />
                        <Pod title="Availability">
                            <div className="font-bold text-4xl text-center">Full-time</div>
                            <div className="border-t border-gray-200 mt-8 pt-6"></div>
                            <div className="font-bold text-center text-lg">Preferred environment</div>
                            <div className="pt-4 px-6 text-center">Mac OSX, VSCode, Git, GitHub, NodeJS</div>
                        </Pod>
                        <ProfileMostAmazing />
                        <ProfileClientRequirements />
                        <ProfileLocationMap />
                        <ProfileNote />
                    </div>
                </section>

                <SelfIntro />
            </UserProfileContext.Provider>
        </div>

        <ToptalSkillLinks></ToptalSkillLinks>

        <div className="mt-8 bg-black pt-6 pb-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-wrap items-center justify-cetner">
                    <h2 className="w-full lg:w-auto text-center mb-2 lg:mb-0">
                        <span className="text-xl lg:text-2xl text-gray-500">Join the toptal community.&nbsp;</span>
                        <div className="block sm:hidden" />
                        <span className="text-xl lg:text-2xl text-gray-300">Apply to work with us as a</span>
                    </h2>
                    <div className="w-full lg:w-auto hidden sm:block">
                        <div className="w-full flex items-center justify-center">
                            <a href="#" className="bg-white py-3 px-6 rounded-full font-bold uppercase tracking-wide text-sm ml-2">Developer</a>
                            <span className="text-gray-600 text-2xl italic ml-2 text-light">or</span>
                            <a href="#" className="bg-white py-3 px-6 rounded-full font-bold uppercase tracking-wide text-sm ml-2">Client</a>
                        </div>
                    </div>
                    <div className="mt-2 block sm:hidden flex flex-col justify-center w-full">
                        <div className="text-center">
                            <a href="#" className="bg-white py-3 px-6 rounded-full font-bold uppercase tracking-wide text-sm">Developer</a>
                        </div>
                        <div className="text-gray-600 text-2xl italic text-light text-center mt-2 mb-3">or</div>
                        <div className="text-center">
                            <a href="#" className="bg-white py-3 px-6 rounded-full font-bold uppercase tracking-wide text-sm">Client</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <Footer />
    </>
}