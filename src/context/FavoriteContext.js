import { createContext, useState } from "react";

const FavoriteContext = createContext();

export const FavoriteContextProvider = ({ children }) => {

    const [favoriteLocation, setFavoriteLocation] = useState([])

    const addToFavoriteHandler = (place) => {
        setFavoriteLocation(prevFavorite => prevFavorite.concat(place));
        // if (favoriteLocation.includes(place)) {
        //     alert('You already add this place into your favorite list... 🧐');
        // } else {
        //     setFavoriteLocation(prevFavorite => prevFavorite.concat(place));
        // }
    }

    const removeToFavoriteHandler = (id) => {
        setFavoriteLocation(prevFavorite => prevFavorite.filter(place => place.id !== id));
    }

    const updateInfoFavoriteHandler = (updateInfo) => {
        setFavoriteLocation(favoriteLocation.map(place => place.id === updateInfo.id ? updateInfo : place));

    }

    const isFavoriteHandler = (id) => favoriteLocation.some(place => place.id === id);

    const favoriteCTX = {
        favoriteLocation,
        isFav: isFavoriteHandler,
        addFav: addToFavoriteHandler,
        removeFav: removeToFavoriteHandler,
        updateAlsoInFav: updateInfoFavoriteHandler,
    }

    return (
        <FavoriteContext.Provider value={favoriteCTX}>
            {children}
        </FavoriteContext.Provider>
    );
}

export default FavoriteContext;