import { createContext, useContext, useRef, useState } from "react";
import FavoriteContext from "./FavoriteContext";
import { v4 as uuidv4 } from 'uuid';

const PlaceContext = createContext();


export const PlaceContextProvider = (props) => {

    const { removeFav } = useContext(FavoriteContext);


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

    const [allLocations, setAllLocations] = useState(locations);
    const [editId, setEditId] = useState();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const idRef = useRef();
    let editInfo;

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
    const deleteModalHandler = (value) => {
        if (value) {
            removeFav(idRef.current)
            setAllLocations(allLocations.filter(l => l.id !== idRef.current));
            setIsModalOpen(!isModalOpen);
        } else {
            setIsModalOpen(!isModalOpen);
        }
    }


    const editLocationHandler = (id) => {
        setIsEditOpen(!isEditOpen);

        editInfo = allLocations.find(l => l.id === id);
        console.log(editInfo)
        
        if (editInfo !== null) {
            setEditId(editInfo);
            console.log(editId)
        }else{
            console.log(editId)
        }

    }



    const editModalHandler = (e) => {
        e.preventDefault()
        console.log("update value...")
        // console.log(e)

        // if (e) {
        //     // console.log(idRef.current)
        //     // let edit = allLocations.filter(l => l.id === idRef.current)
        //     // setEditLocation(edit);
        //     // setIsEditOpen(!isEditOpen);

        //     // console.log(edit)
        //     // console.log(editLocation)

        // } else {
        //     setIsEditOpen(!isEditOpen);
        // }
    }

    const placeCIX = {
        allLocations,
        addLocation: addLocationHandler,
        isEditOpen,
        editModal: editModalHandler,
        editLocation: editLocationHandler,
        isModalOpen,
        deleteModal: deleteModalHandler,
        deleteLocation: deleteLocationHandler,
    }


    return (
        <PlaceContext.Provider value={placeCIX}>

            {props.children}

        </PlaceContext.Provider>
    );
};

export default PlaceContext;


