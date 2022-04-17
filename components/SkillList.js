import React from "react";
import ButtonTick from "./ButtonTick";

const SKILL_STRENGTHS = {
    STRONG: "Strong",
    INTERMEDIATE: "Intermediate",
    NEWBIE: "Newbie"
}

export default function SkillList({ list = [] }) {
    const [isAdding, setIsAdding] = React.useState(false);
    const [listData, setListData] = React.useState({});
    const [newSkillName, setNewSkillName] = React.useState("");
    const [newSkillStrength, setNewSkillStrength] = React.useState(SKILL_STRENGTHS.STRONG)

    React.useEffect(() => {
        const items = {};
        if (list.length > 0) {
            list.map((e, i) => {
                const item = list[i];
                items[item.skillName] = list;
            })
            setListData(items);
        }
    }, [list])

    function handleClickToEdit(event) {
        event && event.preventDefault();
        setIsAdding(true);
    }

    function handleInputNewSkill(event) {
        event && event.preventDefault();
        setNewSkillName(event.target.value);
    }

    function handleSelectSkillStrength(event) {
        event && event.preventDefault();
        setNewSkillStrength(event.target.value);
    }

    function handleSubmitNewSkill(event) {
        event && event.preventDefault();

        if (!!newSkillName) {
            setListData({
                ...listData,
                [newSkillName]: {
                    skillName: newSkillName,
                    skillStrength: newSkillStrength
                }
            });
        }

        setIsAdding(false);
        setNewSkillName("");
        setNewSkillStrength(SKILL_STRENGTHS.STRONG);
    }

    function handleRemoveSkillListItem(skillName) {
        delete listData[skillName];
        setListData(Object.assign({}, listData));
    }

    function isFormValid() {
        return !!newSkillName;
    }

    return <div className="max-w-lg">
        {listData && Object.keys(listData).length > 0 ?
            <div className="inline-block mb-2">
                {Object.keys(listData).map(i => {
                    const item = listData[i];
                    if (item.skillName === "") {
                        return <div className="list-none" key={`skill-list-item-${i}`}></div>
                    } else {
                        return <SkillListItem key={`skill-list-item-${i}`}
                            skillName={item.skillName}
                            skillStrength={item.skillStrength}
                            onRemove={handleRemoveSkillListItem}
                        ></SkillListItem>
                    }
                })}
            </div> : <></>}

        {isAdding ?
            <>
                <form onSubmit={handleSubmitNewSkill} className="inline-block" id="new-skill-form">
                    <div className="border border-gray-400 rounded-sm bg-white py-1 px-1">
                        <div className="flex items-center justify-between">
                            <input type="text" autoFocus className="w-32 px-1" placeholder="Skill" defaultValue={newSkillName} onChange={handleInputNewSkill}></input>
                            <select onChange={handleSelectSkillStrength} className="mx-1 bg-gray-200 rounded-md px-1 text-sm">
                                <option value={SKILL_STRENGTHS.STRONG}>Strong</option>
                                <option value={SKILL_STRENGTHS.INTERMEDIATE}>Intermediate</option>
                                <option value={SKILL_STRENGTHS.NEWBIE}>Newbie</option>
                            </select>
                            <ButtonTick text="Save skill" success={isFormValid()} />
                        </div>
                    </div>
                </form>
            </> : <></>}

        {!isAdding ?
            <button onClick={handleClickToEdit}
                className="block duration transition-200 border border-transparent hover:border hover:border-gray-300 px-2 -ml-2 cursor-default group">
                <div className="flex items-center">
                    Add skill
                    <span className="ml-1 hidden group-hover:block text-gray-400 fill-current">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg>
                    </span>
                </div>
            </button> : <></>}
    </div>
}

function SkillListItem({ skillName, skillStrength, onRemove, onSave }) {
    let bgColor = '';

    switch (skillStrength) {
        case SKILL_STRENGTHS.NEWBIE:
            bgColor = 'bg-gray-400';
            break;
        case SKILL_STRENGTHS.INTERMEDIATE:
            bgColor = 'bg-gray-600';
            break;
        case SKILL_STRENGTHS.STRONG:
        default:
            bgColor = 'bg-gray-900'
            break;
    }

    function handleClickToRemove(skillName) {
        return (event) => {
            event && event.preventDefault();
            onRemove && onRemove(skillName);
        }
    }

    return <>{
        <div className={`inline-block ${bgColor} text-white rounded-md py-1 px-3 mr-2 cursor-default group relative`}>
            <span>{skillName}</span>
            <div className="absolute right-1 top-0 h-full hidden group-hover:block text-red-500 fill-current">
                <button onClick={handleClickToRemove(skillName)} className="h-full flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="10" fill="white" />
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
                    </svg>
                    <div className="sr-only">Remove {skillName}</div>
                </button>
            </div>
        </div>
    }</>
}