import { useContext } from "react";
import { MyFavorites } from "../components"
import { FavoriteContext } from "../context"

const Favorites = () => {

  const { favoriteLocation, removeFav } = useContext(FavoriteContext);

  return (
    
    <div className="mt-12 md:mt-16 p-4 ">

      <h1 className="text-3xl md:text-4xl mb-6 mt-4">Favorites...</h1>

      {
        favoriteLocation.length > 0

          ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              favoriteLocation.map(place =>
                <MyFavorites
                  key={place.id}
                  place={place}
                  removeFav={removeFav}
                />
              )
            }
          </div>

          : <div className="relative top-60 left-0 right-0 text-center">
            <p className=" text-lg md:text-3xl "> You add no favorites place yet... 😔 </p>
          </div>
      }
    </div>
  )
}

export default Favorites