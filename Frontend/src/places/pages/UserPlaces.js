import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'

// import UserItem from './../../user/components/UserItem';

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
    imageUrl: '',
    address: '3128, Harsha Nilaya, 4th Main, 3rd Cross Rd, 1st Stage, Kumaraswamy Layout, Bengaluru, Karnataka',
    location: {
        lat: 12.9100171,
        lng: 77.5612242
    },
    creator: 'raj'

}]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces} />
}

export default UserPlaces