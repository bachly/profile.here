import clsx from 'clsx';
import React from 'react';
import { UserProfileContext } from '../lib/reactContexts';
import { validatePersonName } from '../lib/validators';
import ButtonTick from './ButtonTick';

export default function ProfileName() {
    const { userProfile, setUserProfile } = React.useContext(UserProfileContext);
    const [state, setState] = React.useState({
        isEditing: false,
        input: userProfile.fullname
    });

    function onSave(data) {
        setUserProfile({
            ...userProfile,
            fullname: data
        })
    }

    function handleInput(event) {
        event && event.preventDefault();
        setState({
            ...state,
            input: event.target.value
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
        onSave(state.input);
        setState({
            ...state,
            isEditing: false
        });
    }

    function isFormValid() {
        return !!state.input && validatePersonName(state.input);
    }

    return <div onClick={stopPropagation}>
        {state.isEditing ?
            <form data-cypress="name-input-form" onSubmit={handleOnSubmit} className="text-4xl font-light w-full border border-gray-300 -ml-2 relative">
                <input
                    autoFocus
                    defaultValue={state.input}
                    className={clsx('font-light top-0 left-0 w-full px-2 disabled:opacity-50')}
                    onChange={handleInput}
                    name="name"
                />
                <div className="absolute h-full top-0 right-1 flex items-center">
                    <ButtonTick text="Name is valid" success={isFormValid()} />
                </div>
            </form>
            : <>
                {userProfile.fullname ?
                    <h1 data-cypress="name-display"
                        onClick={handleClickToEdit} className="text-4xl font-light border border-transparent cursor-default">
                        {userProfile.fullname}
                    </h1> :
                    <button data-cypress="name-display"
                        onClick={handleClickToEdit}
                        className="text-4xl font-light w-full text-left border border-transparent hover:border hover:border-gray-300 -ml-2 px-2 cursor-default" >
                        Add name
                    </button>}
            </>
        }
    </div>
}