import { Splide, SplideSlide } from "@splidejs/react-splide";
import PodWithImage from "./PodWithImage";
import PodWithNote from "./PodWithNote";

export default function SelfIntro() {
    return <section className="py-12">
        <div className="max-w-6xl mx-auto">
            <h2 className="font-light text-4xl text-center text-gray-500">Let me introduce myself...</h2>

            <div className="pt-8"></div>

            <div className="border-t border-l border-gray-300">
                <Splide options={{
                    perPage: '4',
                    pagination: false,
                    breakpoints: {
                        1024: {
                            perPage: '2'
                        },
                        768: {
                            perPage: '1'
                        }
                    }
                }}>
                    <SplideSlide>
                        <PodWithImage imageSrc="/img/kayak.jpeg" alt=" I love kayaking on the weekends.">
                            I love kayaking on the weekends.
                        </PodWithImage>
                    </SplideSlide>
                    <SplideSlide>
                        <PodWithImage imageSrc="/img/university.jpeg" alt=" Graduated from Princeton univesity in 2011.">
                            Graduated from Princeton univesity in 2011.
                        </PodWithImage>
                    </SplideSlide>
                    <SplideSlide>
                        <PodWithNote title="The most amazing ..."
                            author={"Martin"}
                            description="...software I have built is the system used at the ABC University. It is a software that has transformed the productivity of both lecturers and students. To date, there are 2000 users in the system." />
                    </SplideSlide>
                    <SplideSlide>
                        <PodWithImage imageSrc="/img/portland.jpeg" alt="I live in the city of Portland, Oregon, U.S.A">
                            I live in the city of Portland, Oregon, U.S.A <a className="text-gray-400 hover:text-white" href="#">(see map)</a>
                        </PodWithImage>
                    </SplideSlide>
                </Splide>
            </div>

            <div className="bg-black border border-gray-300 py-8 relative">
                <div className="max-w-3xl mx-auto flex items-center justify-center">
                    <div className="text-gray-300 text-xl lg:text-2xl">
                        To hire Martin join us as a
                    </div>
                    <a href="#" className="bg-white py-3 px-12 rounded-full font-bold uppercase tracking-wide ml-2">Client</a>
                </div>
                <div className="hidden lg:block lg:absolute vertically-centered right-10 top-0">
                    <a href="#" className="text-gray-300 text-sm font-semibold flex items-center justify-center hover:text-white group">
                        <span>or as a developer</span>
                        <span className="ml-2 fill-current">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" /></svg>
                        </span>
                    </a>
                </div>
                <div className="mt-2 block lg:hidden">
                    <a href="#" className="text-gray-300 text-sm font-semibold flex items-center justify-center hover:text-white group">
                        <span>or as a developer</span>
                        <span className="ml-2 fill-current">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" /></svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
} 