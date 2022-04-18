import React from "react";
import Pod from "./Pod";
import ButtonTick from "./ButtonTick";

export default function PodWithNoteEditable({ title, defaultValue, author, onSave }) {
    const [state, setState] = React.useState({
        isEditing: false,
        noteInput: defaultValue
    })

    function handleClickToEdit(event) {
        event && event.preventDefault();
        setState({
            ...state,
            isEditing: true
        })
    }

    function isFormValid() {
        return !!state.noteInput;
    }

    function handleInputChange(event) {
        event && event.preventDefault();
        setState({
            ...state,
            noteInput: event.target.value
        });
    }

    function handleSubmit(event) {
        event && event.preventDefault();
        onSave && onSave(state.noteInput);
        setState({
            ...state,
            isEditing: false
        })
    }

    return <>
        <Pod title={title} isEditing={state.isEditing}>
            {state.isEditing ?
                <form onSubmit={handleSubmit}>
                    <textarea autoFocus
                        defaultValue={state.noteInput}
                        onChange={handleInputChange}
                        className="w-full h-48 p-2 italic font-serif" placeholder="Tell us about the best software you have worked on...">
                    </textarea>
                    <div className="">
                        <ButtonTick text="Note is valid" success={isFormValid()} />
                    </div>
                </form>
                :
                <>
                    {state.noteInput ?
                        <div className="">
                            <div onClick={handleClickToEdit} className="flex-1 max-h-5/6 overflow-hidden cursor-default">
                                <div className="pt-8 px-2 italic text-sm text-lg relative z-10">{state.noteInput}</div>
                            </div>
                            {author ?
                                <div className="pt-2 font-bold text-sm text-right">- {author}</div>
                                : <></>}

                            <div className="absolute top-20 left-2 z-4 opacity-10">
                                <img src="/img/quotation-mark.svg" />
                            </div>
                            <div className="absolute bottom-2 right-4 z-0 opacity-10" style={{ transform: "rotate(180deg)" }}>
                                <img src="/img/quotation-mark.svg" />
                            </div>
                        </div>
                        :
                        <div className="absolute top-0 left-0 w-full h-full">
                            <div className="relative h-full w-full">
                                <button onClick={handleClickToEdit} className="absolute-middle hover:text-blue-500 duration transition-200">Add content...</button>

                                <div className="absolute top-20 left-2 z-4 opacity-10">
                                    <img src="/img/quotation-mark.svg" />
                                </div>
                                <div className="absolute bottom-2 right-4 z-0 opacity-10" style={{ transform: "rotate(180deg)" }}>
                                    <img src="/img/quotation-mark.svg" />
                                </div>
                            </div>
                        </div>
                    }
                </>}
        </Pod>
    </>
}