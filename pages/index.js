import clsx from 'clsx';
import React from 'react'

export default function ProfilePage() {
    return <>
        <header>
            <div className="top-bar py-8 bg-black">
            </div>

            <div className="nav-bar py-4 bg-black">

            </div>
        </header>

        <div className="max-w-6xl mx-auto">
            <div className="pt-12"></div>

            <section className="border-t border-l border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-4">
                    <div className="pb-1/1 bg-gray-300">
                        Picture
                    </div>
                    <div className="lg:col-span-3 border-b border-r border-gray-200">
                        Martin Chikilian
                        Portland, Oregon, USA
                        English, French, German
                    </div>
                    <PodWithList
                        title="Portfolio"
                        subtitle="PHP, Ruby, Javascript"
                        maxListItems={7}
                        listItemPlaceholders={{
                            name: "Project name",
                            description: "Skills used"
                        }}
                        list={[
                            {
                                name: "NavalPlan",
                                description: "PHP, Ruby"
                            },
                            {
                                name: "MyTime",
                                description: "Javascript"
                            },
                            {
                                name: "Formidable",
                                description: "PHP, Ruby"
                            }
                        ]}
                    />
                    <PodWithList title="Experience"
                        list={[]}
                        maxListItems={4}
                        listItemPlaceholders={{
                            name: "Technology",
                            description: "Years"
                        }}
                    >

                    </PodWithList>
                    <Pod
                        title="Sample code and algorithms"
                    />
                    <Pod
                        title="Availability"
                    />
                </div>
            </section>
        </div>
    </>
}

function Pod({ isEditing, children, title, subtitle }) {
    return <div className={clsx(`pb-10/9 border-r border-b border-gray-200 relative`, isEditing ? 'bg-black' : '')}>
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="py-5 px-4">
                <div className={clsx('font-bold text-xl text-center', isEditing ? 'text-white' : '')}>{title}</div>
                <div className="italic text-center text-sm">{subtitle || <>&nbsp;</>}</div>
                <div className="pt-4"></div>
                {children}
            </div>
        </div>
    </div>
}

function PodWithList({ title, subtitle, list, maxListItems = 7,
    listItemPlaceholders = {
        name: 'Name',
        description: 'Description'
    }, onSave }) {
    const [isEditing, setIsEditing] = React.useState(false);
    const [listData, setListData] = React.useState({});

    React.useEffect(() => {
        const items = {};

        new Array(maxListItems).fill('').map((e, i) => {
            items[i] = {
                name: list[i] && list[i].name || "",
                description: list[i] && list[i].description || ""
            }
        })

        setListData(items);
    }, [list, maxListItems])

    function handleClickToEdit(event) {
        event && event.preventDefault();
        setIsEditing(true);
    }

    function handleSubmitForm(event) {
        event && event.preventDefault();
        setIsEditing(false);
        onSave && onSave();
    }

    function handleInput(i, field) {
        return (event) => {
            event && event.preventDefault();

            if (field === 'name' || field === 'description') {
                console.log('handleInput', {
                    ...listData,
                    [i]: {
                        ...listData[i],
                        [field]: event.target.value
                    }
                })
                setListData({
                    ...listData,
                    [i]: {
                        ...listData[i],
                        [field]: event.target.value
                    }
                })
            }
        }
    }

    return <Pod title={title} subtitle={subtitle} isEditing={isEditing}>
        {isEditing ?
            <>
                <form onSubmit={handleSubmitForm}>
                    {Object.keys(listData).map(i => {
                        return <div key={`${title}-list-item-input-${i}`} className="flex items-center border border-gray-400">
                            <input onChange={handleInput(i, 'name')} value={listData[i].name} className="w-1/2 px-1 border-r border-gray-800" placeholder={listItemPlaceholders.name}></input>
                            <input onChange={handleInput(i, 'description')} value={listData[i].description} className="w-1/2 px-1" placeholder={listItemPlaceholders.description}></input>
                        </div>
                    })}
                    <button className="mt-2 text-green-500 fill-current hover:opacity-70 duration-200 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
                        </svg>
                        <div className="sr-only">Save {title}</div>
                    </button>
                </form>
            </> :
            <>
                {list && list.length > 0 ?
                    <ul className="list-disc px-6">
                        {Object.keys(listData).map(i => {
                            const item = listData[i];
                            if (item.name === "" || item.description === "") {
                                return <li className="list-none" key={`${title}-list-item-${i}`}></li>
                            } else {
                                return <li key={`${title}-list-item-${i}`} className="cursor-pointer" onClick={handleClickToEdit}>
                                    <span className="font-bold">{item.name}</span>
                                    ,&nbsp;<span className="">{item.description}</span>
                                </li>
                            }
                        })}
                    </ul> : <>
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="relative h-full w-full">
                                <button onClick={handleClickToEdit} className="absolute-middle hover:text-blue-500 duration transition-200">Add content...</button>
                            </div>
                        </div>
                    </>}
            </>}
    </Pod>
}