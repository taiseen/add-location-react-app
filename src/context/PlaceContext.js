import { createContext, useContext, useEffect, useRef, useState } from "react";
import FavoriteContext from "./FavoriteContext";
import location from '../db/location.json';
import { toast } from 'react-toastify';


const PlaceContext = createContext();


export const PlaceContextProvider = (props) => {

    const { removeFav, updateAlsoInFav } = useContext(FavoriteContext);

    // For Local JSON DB
    const [allLocations, setAllLocations] = useState(location);

    // For FireBase DB 
    // const [allLocations, setAllLocations] = useState([]);
    const [fireBaseDataLoading, setFireBaseDataLoading] = useState(false);

    const [editInfo, setEditInfo] = useState({});

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);

    const idRef = useRef();


    /** 
    ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
    FireBase DB Communication Methods... 
    ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
    */
    const url = 'https://addlocation-db-default-rtdb.firebaseio.com/';

    useEffect(() => {
        // getAllLocationFromFirebase();
    }, []);

    // ✅ POST ✅ method to FireBase server...
    const add_Into_Firebase = async (location) => {

        await fetch(url + 'allLocation.json', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(location)
        })
            .then(response => response.json())
            .then(data => toast.success("Place added successfully... 😎", { theme: "colored" }))
            .catch(error => console.error('Error:', error));

        getAllLocationFromFirebase();
    }

    // ✅ GET ✅ method to FireBase server...
    const getAllLocationFromFirebase = async () => {

        setFireBaseDataLoading(true);

        // try {
        //     const res = await fetch(url);
        //     const data = await res.json();

        //     setFireBaseDataLoading(false);
        //     setAllLocations(data);

        // } catch (error) {
        //     console.error('get Error =====> ', error)
        // }

        await fetch(url + 'allLocation.json')
            .then(response => response.json())
            .then(data => {

                // Converting data structure into array of object
                const allPlaces = [];
                for (const key in data) {
                    const place = {
                        id: key,
                        ...data[key]
                    }
                    allPlaces.push(place);
                }
                setFireBaseDataLoading(false);
                setAllLocations(allPlaces);
            })
            .catch(error => console.error('Error:', error));
    }

    // ✅ Delete ✅ method to FireBase server...
    const delete_From_Firebase = async (id) => {

        await fetch(url + `allLocation/${id}.json`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => toast.info("Place Deleted...",
                { theme: "colored", position: "bottom-right" }))
            .catch(error => console.error('Deleting Error : ', error));

        getAllLocationFromFirebase();
    }

    // ✅ PUT ✅ method to FireBase server...
    const edit_From_Firebase = async (updateInfo) => {

        await fetch(url + `allLocation/${updateInfo.id}.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateInfo)
        })
            .then(response => response.json())
            .then(data => toast.warning("Place Updated...",
                { autoClose: 2000, theme: "colored", icon: "✔" }))
            .catch(error => console.error('Updating Error : ', error));

        getAllLocationFromFirebase();
    }





    /**
    🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
    Local Json DB Communication Methods... 
    🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
    */

    // add new location, according to user input...
    const addLocationHandler = (location) => {

        // Local JSON DB 
        setAllLocations([...allLocations, location]);
        toast.success("Place added successfully... 😎", { theme: "colored" });

        // FireBase DB 
        // add_Into_Firebase(location);
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

            // Local JSON DB
            setAllLocations(allLocations.filter(l => l.id !== idRef.current));
            toast.info("Place Deleted...", { theme: "colored", position: "bottom-right" });

            // FireBase DB 
            // delete_From_Firebase(idRef.current);

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

        // Local JSON DB
        setAllLocations(allLocations.map(place => place.id === updateInfo.id ? updateInfo : place));
        toast.warning("Place Updated...", { theme: "colored", icon: "✔" });

        // FireBase DB 
        // edit_From_Firebase(updateInfo);

        updateAlsoInFav(updateInfo);
    }

    const placeCIX = {
        fireBaseDataLoading,

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


