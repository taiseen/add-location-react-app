import { useContext } from 'react';
import { Place, DeleteModal, EditPlace } from './../components';
import { PlaceContext, FavoriteContext } from '../context';

const AllPlaces = () => {

  const { allLocations,
    isEditOpen, editModal, editLocation,
    isModalOpen, deleteModal, deleteLocation } = useContext(PlaceContext);

  const { addFav, isFav, removeFav } = useContext(FavoriteContext);

  return (
    <section className="mt-12 md:mt-16 p-4">

      <h1 className="text-3xl md:text-4xl mb-6 mt-4"> All Places... </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          allLocations.map(place => (
            <Place
              key={place.id}
              place={place}
              deleteLocation={deleteLocation}
              editLocation={editLocation}
              addFav={addFav}
              isFav={isFav}
              removeFav={removeFav}
            />
          ))
        }
      </div>
      {
        isModalOpen && <DeleteModal deleteModal={deleteModal} />
      }
      {
        isEditOpen && <EditPlace editLocation={editLocation}/>
      }
    </section>
  )
}

export default AllPlaces