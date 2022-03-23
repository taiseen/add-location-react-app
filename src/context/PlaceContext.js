import { createContext, useContext, useRef, useState } from "react";
import FavoriteContext from "./FavoriteContext";
import location from '../db/location.json';
import { toast } from 'react-toastify';


const PlaceContext = createContext();


export const PlaceContextProvider = (props) => {

    const { removeFav, updateAlsoInFav } = useContext(FavoriteContext);

    const [allLocations, setAllLocations] = useState(location);
    const [editInfo, setEditInfo] = useState({});

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const idRef = useRef();

    // add new location, according to user input...
    const addLocationHandler = (location) => {
        setAllLocations([...allLocations, location]);
        toast.success("Place added successfully... 😎", { theme: "colored" });
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
            toast.info("Place Deleted...", { theme: "colored", position: "bottom-right" });
            setIsModalOpen(!isModalOpen);
        } else {
            setIsModalOpen(!isModalOpen);
        }
    }

    // just open modal & filter that specific place...
    const editLocationHandler = (id) => {
        setIsEditOpen(!isEditOpen);
        setEditInfo(allLocations.find(l => l.id === id));
    }

    // update existing place info
    const editModalHandler = (updateInfo) => {
        setIsEditOpen(!isEditOpen);
        setAllLocations(allLocations.map(place => place.id === updateInfo.id ? updateInfo : place));
        updateAlsoInFav(updateInfo);
        toast.warning("Place Updated...", { theme: "colored", icon: "✔" });
    }

    const placeCIX = {
        allLocations,
        addLocation: addLocationHandler,

        editInfo,

        isEditOpen,
        setIsEditOpen,
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


