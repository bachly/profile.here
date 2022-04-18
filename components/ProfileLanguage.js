import clsx from 'clsx';
import React from 'react';
import ButtonTick from './ButtonTick';
import { UserProfileContext } from '../lib/reactContexts';

export default function ProfileLanguages() {
    const { userProfile, setUserProfile } = React.useContext(UserProfileContext);

    const [state, setState] = React.useState({
        input: userProfile?.spokenLanguages,
        isEditing: false
    })

    function handleOnSubmit(event) {
        event && event.preventDefault();
        setUserProfile({
            ...userProfile,
            spokenLanguages: state.input
        })
        setState({
            ...state,
            isEditing: false
        })
    }

    function handleClickToEdit(event) {
        event && event.preventDefault();
        setState({
            ...state,
            isEditing: true
        });
    }

    function handleInput(event) {
        event && event.preventDefault();
        setState({
            ...state,
            input: event.target.value
        })
    }

    function stopPropagation(event) {
        event && event.stopPropagation();
    }

    function isFormValid() {
        return !!state.input;
    }

    return <div onClick={stopPropagation}>
        {state.isEditing ?
            <form data-cypress="language-input-form" onSubmit={handleOnSubmit} className={clsx(`w-full bg-white border border-gray-300 -ml-2 flex items-center justify-between relative`)}>
                <input autoFocus
                    defaultValue={state.input}
                    className={clsx('font-bold top-0 left-0 w-full px-2 disabled:opacity-50')}
                    onChange={handleInput}
                    name="language"
                ></input>
                <div className="absolute h-full top-0 right-1 flex items-center">
                    <ButtonTick text="Save languages" success={isFormValid()}/>
                </div>
            </form>
            :
            <button data-cypress="language-display" onClick={handleClickToEdit} className="w-full text-left font-bold cursor-default px-2 -ml-2 border border-transparent hover:border hover:border-gray-300">
                {state.input || 'Add languages'}
            </button>
        }
    </div>
}