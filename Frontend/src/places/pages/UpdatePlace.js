import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useForm } from '../../shared/hooks/form-hook'

import './UpdatePlace.css'
import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators'
import Button from '../../shared/components/FormElements/Button'
import Card from '../../shared/components/UIelements/Card'

const DUMMY_PLACES = [{
    id: 'r1',
    title: 'Maa Bhagwati Bhawan',
    description: 'Housing Complex',
    imageUrl: 'https://source.unsplash.com/C6oPXOatFD8',
    address: 'XXFF+445, Belaganj, Bihar 804403',
    location: {
        lat: 24.9727717,
        lng: 84.9706764
    },
    creator: 'rits'
},
{

    id: 'r2',
    title: 'Harsha Nilaya',
    description: 'Housing Complex',
    imageUrl: 'https://source.unsplash.com/C6oPXOatFD8',
    address: '3128, Harsha Nilaya, 4th Main, 3rd Cross Rd, 1st Stage, Kumaraswamy Layout, Bengaluru, Karnataka',
    location: {
        lat: 12.9100171,
        lng: 77.5612242
    },
    creator: 'raj'

}]

const UpdatePlace = () => {

    const [isLoading, setIsLoading] = useState(true)
    const placeId = useParams().placeId



    // const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)
    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false)

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

    useEffect(() => {
        if (identifiedPlace) {
            setFormData({
                title: {
                    value: identifiedPlace.title,
                    isValid: true
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true
                }
            }, true
            );
        }

        setIsLoading(false)
    }, [setFormData, identifiedPlace]);


    const placeUpdateSubmitHandler = event => {
        event.preventDefault()
        console.log(formState.inputs)
    }

    if (!identifiedPlace) {
        return (

            <div className='center'>
                <Card>
                    <h2> Could not find place!</h2>
                </Card>
            </div>

        )
    }

    if (isLoading) {
        return (
            <div className='center'>
                <h2> Loading...</h2>
            </div>
        )
    }

    return (
        // formState.inputs.title.value && (
        <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please Enter a Valid Title"
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input
                id="description"
                element="textarea"
                // type="text"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please Enter a Valid Description (at least of 5 characters)"
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>
                UPDATE PLACE
            </Button>
        </form>

    )
}

export default UpdatePlace