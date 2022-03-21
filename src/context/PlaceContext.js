import { createContext, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const PlaceContext = createContext();


const PlaceContextProvider = (props) => {


    const locations = [
        {
            id: uuidv4(),
            title: 'Living area',
            img: 'https://thumbs.dreamstime.com/b/aerial-view-buildings-capital-city-dhaka-bangladesh-view-mohammadpur-bright-sunny-day-aerial-view-buildings-229193615.jpg',
            address: 'Mohammadpur, Dhaka',
            description: 'nice place for living...'
        },
        {
            id: uuidv4(),
            title: 'Playground',
            img: 'https://www.researchgate.net/profile/Faysal-Kabir-Shuvo/publication/321025495/figure/fig6/AS:560089012465670@1510547034482/Upgradation-of-Shyamoli-Pisciculture-Housing-Park-pulls-many-people-from-distant-areas.png',
            address: 'Shyamoli, Dhaka',
            description: 'Kids love this playground...'
        },
        {
            id: uuidv4(),
            title: 'Street Road',
            img: 'https://bprop-area-guides.s3.amazonaws.com/area-guides/wp-content/uploads/2020/06/Mohammadpur-Cover.jpg',
            address: 'Asadgate, Dhaka',
            description: 'Walking road'
        },

    ]

    const [allLocations, setAllLocations] = useState(locations)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const idRef = useRef();

    console.log(locations)
    console.table(allLocations)


    // add new location, according to user input...
    const addLocationHandler = (location) => {
        console.log(location);
        setAllLocations([...allLocations, location])
    }

    // user get pop-up dialog box for confirming... delete location... 
    const deleteLocationHandler = (id) => {
        setIsModalOpen(!isModalOpen);
        idRef.current = id;
    }

    // finally delete location, after user press confirm button...
    const modalHandler = (value) => {
        if (value) {
            setAllLocations(allLocations.filter(l => l.id !== idRef.current));
            setIsModalOpen(!isModalOpen);
        } else {
            setIsModalOpen(!isModalOpen);
        }
    }

    return (
        <PlaceContext.Provider value={{ allLocations, addLocationHandler, isModalOpen, modalHandler, deleteLocationHandler }}>

            {props.children}

        </PlaceContext.Provider>
    );
};

export default PlaceContextProvider;


