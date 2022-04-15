import clsx from 'clsx';
import React from 'react';
import { UserProfileContext } from '../lib/reactContexts';
import { validatePersonName } from '../lib/validators';
import ButtonTick from './ButtonTick';

export default function ProfileName() {
    const { userProfile, setUserProfile } = React.useContext(UserProfileContext);
    const [state, _setState] = React.useState({
        isEditing: false,
        nameInput: userProfile.fullname
    });

    const stateRef = React.useRef(state);
    const setState = data => {
        stateRef.current = data;
        _setState(data);
    };

    // Run on initial load
    React.useEffect(function onload() {
        // Clicking anywhere outside of the input, will close the form
        // This is used in conjunction with stopPropagation().
        // Use "stateRef" to get the state of the latest renderer.
        window.addEventListener('click', function () {
            if (isFormValid()) {
                setState({
                    ...stateRef.current,
                    isEditing: false
                });
                onSave(stateRef.current.nameInput.trim());
            }
        })
    }, [])

    // Run whenever userProfile.fullname is changed
    React.useEffect(function onUserProfileChanges() {
        console.log('On userProfile.fullname changes');
        setState({
            ...state,
            nameInput: userProfile.fullname
        })
    }, [userProfile.fullname])

    function onSave(data) {
        setUserProfile({
            ...userProfile,
            fullname: data
        })
    }

    function handleNameInput(event) {
        event && event.preventDefault();
        setState({
            ...state,
            nameInput: event.target.value
        });
    }

    function handleClickToEdit(event) {
        event && event.preventDefault();
        setState({
            ...state,
            isEditing: true
        });
    }

    function stopPropagation(event) {
        event && event.stopPropagation();
    }

    function handleOnSubmit(event) {
        event && event.preventDefault();
        if (isFormValid()) {
            setState({
                ...state,
                isEditing: false
            });
            onSave(state.nameInput.trim());
        }
    }

    function isFormValid() {
        return !!state.nameInput && validatePersonName(state.nameInput);
    }

    return <div onClick={stopPropagation}>
        {state.isEditing ?
            <form onSubmit={handleOnSubmit} className="text-4xl font-light w-full border border-gray-300 -ml-2 relative">
                <input autoFocus
                    defaultValue={state.nameInput}
                    className={clsx('font-light top-0 left-0 w-full px-2 disabled:opacity-50')}
                    onChange={handleNameInput}
                />
                {isFormValid() ?
                    <div className="absolute h-full top-0 right-1 flex items-center">
                        <ButtonTick text="Name is valid" />
                    </div>
                    : <></>}
            </form>
            : <>
                {userProfile.fullname ?
                    <h1 onClick={handleClickToEdit} className="text-4xl font-light border border-transparent cursor-default">
                        {userProfile.fullname}
                    </h1> :
                    <button onClick={handleClickToEdit} className="text-4xl font-light w-full text-left border border-transparent hover:border hover:border-gray-300 -ml-2 px-2 cursor-default" >
                        Add name
                    </button>}
            </>
        }
    </div>
}