import { DEFAULT_SKILL_LINKS } from "../lib/constants";

function firstChar(name) {
    const alphabetRegex = /^[A-Z]+$/i;
    if (alphabetRegex.test(name[0])) {
        return name[0]
    } else {
        return '.';
    }
}

export default function ToptalSkillLinks({ skillLinks = DEFAULT_SKILL_LINKS }) {
    const groupByAlphabet = {};

    skillLinks.forEach(skillLink => {
        groupByAlphabet[firstChar(skillLink.title)] = groupByAlphabet[firstChar(skillLink.title)] || [];
        groupByAlphabet[firstChar(skillLink.title)].push(skillLink);
    })

    console.log(groupByAlphabet);


    return <section className="py-8">
        <div className="max-w-6xl mx-auto">
            <h2 className="font-bold text-2xl text-center">
                Top skills on toptal
            </h2>

            <div className="pt-6 gap-4 columns-4 toptal-skill-links">
                {Object.keys(groupByAlphabet).map(key => {
                    return groupByAlphabet[key].map((link, index) => {
                        return <div key={link.title}>
                            <div className="h-full flex items-center pb-1">
                                <div className="first-char font-bold uppercase mr-2 w-4 text-center">
                                    {index === 0 ? key : <>&nbsp;</>}
                                </div>
                                <a className="block hover:bg-black hover:text-white text-gray-500" href={link.href || "#"}>
                                    {link.title}
                                </a>
                            </div>
                        </div>
                    })
                })}
            </div>
        </div>
    </section>
} 