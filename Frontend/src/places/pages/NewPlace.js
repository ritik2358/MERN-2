import React from 'react'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators'

import Input from '../../shared/components/FormElements/Input'
import './NewPlace.css'
import Button from './../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';


const NewPlace = () => {
    const [formState, inputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
        address: {
            value: '',
            isValid: false
        }
    }, false
    )



    const placeSubmitHandler = event => {
        event.preventDefault()
        console.log(formState.inputs)
    }
    // const descriptionInputHandler = useCallback((id, value, isValid) => { }, [])

    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please Enter a Valid title"
                onInput={inputHandler}
            />
            <Input
                id="description"
                element="textarea"
                // type="text" 
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please Enter a Valid Description (at least 5 characters)"
                onInput={inputHandler}
            />
            <Input
                id="address"
                element="input"
                // type="text" 
                label="Address"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please Enter a Valid Address"
                onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
                ADD PLACE
            </Button>
        </form>
    )
}

export default NewPlace