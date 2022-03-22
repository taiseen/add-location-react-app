import { createContext, useContext, useRef, useState } from "react";
import FavoriteContext from "./FavoriteContext";
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

const PlaceContext = createContext();


export const PlaceContextProvider = (props) => {

    const { removeFav } = useContext(FavoriteContext);

    const locations = [
        {
            id: uuidv4(),
            title: 'Living area',
            img: 'https://thumbs.dreamstime.com/b/aerial-view-buildings-capital-city-dhaka-bangladesh-view-mohammadpur-bright-sunny-day-aerial-view-buildings-229193615.jpg',
            address: 'Mohammadpur, Dhaka',
            description: 'Most popular street in dhaka, famous by as hangout tea stalls, nice place for living...'
        },
        {
            id: uuidv4(),
            title: 'Yoho National Park',
            img: 'https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-yoho-national-park-emerald-lake.jpg',
            address: 'Western Canada, Canada',
            description: 'Yoho National Park in British Columbia is one of the most beautiful parks in western Canada, '
        },
        {
            id: uuidv4(),
            title: 'Gulf Islands',
            img: 'https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-gulf-islands.jpg',
            address: 'Vancouver, Canada',
            description: 'The Gulf Islands, between the city of Vancouver and Vancouver Island'
        },

    ]

    const [allLocations, setAllLocations] = useState(locations);
    const [editInfo, setEditInfo] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const idRef = useRef();

    let obj;

    // add new location, according to user input...
    const addLocationHandler = (location) => {
        setAllLocations([...allLocations, location]);
        toast.success("Place added successfully... 😎", { autoClose: 3000, theme: "colored" });
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
            toast.info("Delete successful...", { autoClose: 3000, theme: "colored" });
            setIsModalOpen(!isModalOpen);
        } else {
            setIsModalOpen(!isModalOpen);
        }
    }


    const editLocationHandler = (id) => {
        setIsEditOpen(!isEditOpen);
        idRef.current = id;
        obj = allLocations.find(l => l.id === id);
        setEditInfo([...editInfo, obj]);
        console.log(editInfo)
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


