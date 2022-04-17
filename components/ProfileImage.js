import clsx from 'clsx';
import React from 'react'
import ButtonTick from './ButtonTick';

export default function PodWithProfileImage() {
    const [isEditing, setIsEditing] = React.useState(false);
    const [profileImageSrc, setProfileImageSrc] = React.useState();
    const [profileImageName, setProfileImageName] = React.useState();

    function handleClickToOpenImageForm(event) {
        event && event.preventDefault();
        setIsEditing(true);
    }

    function handleChangeProfileImageInput(event) {
        event && event.preventDefault();
        setProfileImageName(event.target.value);
        const file = event.target.files[0];
        setProfileImageSrc(URL.createObjectURL(file));
    }

    function handleSubmitForm(event) {
        event && event.preventDefault();
        setIsEditing(false);
    }

    return <div className={clsx(`pb-1/1 relative`, isEditing ? 'bg-black' : 'bg-gray-300')}>
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="relative h-full w-full">
                {profileImageSrc ?
                    <div className="absolute top-0 left-0 w-full h-full bg-image bg-cover bg-center" style={{ backgroundImage: `url(${profileImageSrc})` }} /> : <></>
                }
                {isEditing ?
                    <div className="p-4 w-full absolute-middle">
                        <form onSubmit={handleSubmitForm} className="w-full bg-white border border-gray-300 p-1">
                            {profileImageName ?
                                <div className="text-sm">{profileImageName}</div> : <></>}

                            <div className="flex items-center justify-between">
                                <div>
                                    <input id="profile-image-input" type="file" hidden onChange={handleChangeProfileImageInput} />
                                    <label htmlFor="profile-image-input" className="border border-gray-400 px-1 text-sm rounded-sm bg-gray-200">Browse image</label>
                                </div>
                                {profileImageSrc ? <ButtonTick text="Upload image"></ButtonTick> : <></>}
                            </div>
                        </form>
                    </div> :
                    <>
                        {profileImageSrc ? <>
                            <button onClick={handleClickToOpenImageForm} className="absolute top-0 left-0 w-full h-full">
                                <div className="sr-only">Change <br />profile image...</div>
                            </button>
                        </> :
                            <button onClick={handleClickToOpenImageForm} className="absolute-middle duration transition-200 text-sm">Add <br />profile image...</button>
                        }
                    </>
                }
            </div>
        </div>
    </div >
}