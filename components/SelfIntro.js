import PodWithImage from "./PodWithImage";
import PodWithNote from "./PodWithNote";

export default function SelfIntro() {
    return <section className="py-12">
        <div className="max-w-6xl mx-auto">
            <h2 className="font-light text-4xl text-center text-gray-500">Let me introduce myself...</h2>

            <div className="pt-8"></div>

            <div className="grid grid-cols-4 border-t border-l border-gray-300">
                <PodWithImage imageSrc="/img/kayak.jpeg" alt=" I love kayaking on the weekends.">
                    I love kayaking on the weekends.
                </PodWithImage>
                <PodWithImage imageSrc="/img/university.jpeg" alt=" Graduated from Princeton univesity in 2011.">
                    Graduated from Princeton univesity in 2011.
                </PodWithImage>
                <PodWithNote title="The most amazing ..."
                    author={"Martin"}
                    description="...software I have built is the system used at the ABC University. It is a software that has transformed the productivity of both lecturers and students. To date, there are 2000 users in the system." />
                <PodWithImage imageSrc="/img/portland.jpeg" alt="I live in the city of Portland, Oregon, U.S.A">
                    I live in the city of Portland, Oregon, U.S.A <a className="text-gray-400 hover:text-white" href="#">(see map)</a>
                </PodWithImage>
            </div>

            <div className="bg-black border border-gray-300 py-6 relative">
                <div className="max-w-3xl mx-auto flex items-center justify-center">
                    <div className="text-gray-300 text-xl">
                        To hire Martin join us as a
                    </div>
                    <a href="#" className="bg-white py-2 px-8 rounded-full font-extrabold uppercase tracking-wide text-sm ml-2">Client</a>
                </div>
            </div>
        </div>
    </section>
} 