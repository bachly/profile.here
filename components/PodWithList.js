import React from 'react'
import ButtonTick from './ButtonTick';
import Pod from './Pod';

export default function PodWithList({ title, subtitle, list = [], maxListItems = 7,
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
        const listDataToArray = Object.keys(listData).map(key => listData[key]);
        onSave && onSave(listDataToArray);
    }

    function handleInput(key, field) {
        return (event) => {
            event && event.preventDefault();

            if (field === 'name' || field === 'description') {
                setListData({
                    ...listData,
                    [key]: {
                        ...listData[key],
                        [field]: event.target.value
                    }
                })
            }
        }
    }

    function hasData() {
        return listData && Object.keys(listData).length > 0 && Object.keys(listData).filter(key => !!listData[key] && !!listData[key].name).length > 0;;
    }

    return <Pod title={title} subtitle={subtitle} isEditing={isEditing}>
        {isEditing ?
            <>
                <form onSubmit={handleSubmitForm}>
                    {Object.keys(listData).map((key, index) => {
                        return <div key={`${title}-list-item-input-${key}`} className="flex items-center border border-gray-400">
                            <input autoFocus={index === 0} onChange={handleInput(key, 'name')} value={listData[key].name} className="w-1/2 px-1 border-r border-gray-800" placeholder={listItemPlaceholders.name}></input>
                            <input onChange={handleInput(key, 'description')} value={listData[key].description} className="w-1/2 px-1" placeholder={listItemPlaceholders.description}></input>
                        </div>
                    })}
                    <div className="mt-1">
                        <ButtonTick text={`Save portfoio`} />
                    </div>
                </form>
            </> :
            <>
                {hasData() ?
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