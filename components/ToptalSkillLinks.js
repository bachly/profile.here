import { DEFAULT_SKILL_LINKS } from "../lib/constants";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

function getFirstChar(name) {
    const alphabetRegex = /^[A-Z]+$/i;
    if (alphabetRegex.test(name[0])) {
        return name[0]
    } else {
        return '.';
    }
}

function addAlphabetGroup(skillLinks) {
    let currentAlphabet = '';

    skillLinks.forEach(skillLink => {
        const firstChar = getFirstChar(skillLink.title);
        if (firstChar != currentAlphabet) {
            skillLink['group'] = firstChar;
            currentAlphabet = firstChar;
        }
    })

    return skillLinks
}

export default function ToptalSkillLinks({ skillLinks = DEFAULT_SKILL_LINKS }) {
    const skillLinksWithGroup = addAlphabetGroup(skillLinks);
    const mobileNumLinksPerPage = 20;
    const mobileNumPages = parseInt(skillLinks.length / mobileNumLinksPerPage + 1);

    console.log(mobileNumLinksPerPage, mobileNumPages)

    return <section className="pt-8 pb-20">
        <div className="max-w-6xl mx-auto lg:px-4">
            <h2 className="font-bold text-2xl text-center">
                Top skills on toptal
            </h2>

            <div className="hidden lg:block pt-6 gap-4 columns-4">
                {skillLinksWithGroup.map((link, index) => {
                    return <div key={link.title}>
                        <div className="h-full flex items-center pb-1">
                            <div className="first-char font-bold uppercase mr-2 w-4 text-center">
                                {link.group || <>&nbsp;</>}
                            </div>
                            <a className="block hover:bg-black hover:text-white text-gray-500" href={link.href || "#"}>
                                {link.title}
                            </a>
                        </div>
                    </div>
                })}
            </div>

            <div className="max-w-md mx-auto sm:max-w-2xl md:max-w-3xl block lg:hidden pt-6">
                <Splide options={{
                    perPage: '2',
                    padding: '6rem',
                    gap: '6rem',
                    breakpoints: {
                        640: {
                            perPage: '1',
                            padding: '4rem',
                            gap: '4rem',
                        },
                        480: {
                            perPage: '1',
                            padding: '3rem',
                            gap: '3rem',
                        }
                    }
                }}>
                    {new Array(mobileNumPages).fill("").map((key1, index1) => {
                        return <SplideSlide key={`page-${index1+1}`}>
                            {new Array(mobileNumLinksPerPage).fill("").map((key2, index2) => {
                                const index = index1 * mobileNumLinksPerPage + index2;
                                const link = skillLinksWithGroup[index];
                                if (link) {
                                    return <div key={index} className="gap-4 columns-1" data-index={index1 * mobileNumLinksPerPage + index2}>
                                        <div className="h-full flex items-start pb-1">
                                            <div className="first-char font-bold uppercase mr-2 w-4 text-center">
                                                {link.group || <>&nbsp;</>}
                                            </div>
                                            <a className="block hover:bg-black hover:text-white text-gray-500" href={link.href || "#"}>
                                                {link.title}
                                            </a>
                                        </div>
                                    </div>
                                } else {
                                    return <div key={index} data-index={index1 * mobileNumLinksPerPage + index2}></div>
                                }
                            })}
                        </SplideSlide>
                    })}
                </Splide>
            </div>
        </div>
    </section >
} 