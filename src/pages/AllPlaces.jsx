import { useContext } from 'react';
import { Place, Modal } from './../components';
import { PlaceContext } from '../context/PlaceContext';

const AllPlaces = () => {

  const { allLocations, isModalOpen, modalHandler, deleteLocationHandler } = useContext(PlaceContext);

  return (
    <section className="mt-12 md:mt-16 p-4">

      <h1 className="text-3xl md:text-4xl mb-6 mt-4"> All Places... </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          allLocations.map(place => (
            <Place key={place.id} place={place} deleteLocationHandler={deleteLocationHandler} />
          ))
        }
      </div>

      {
        isModalOpen && <Modal modalHandler={modalHandler} />
      }

    </section>
  )
}

export default AllPlaces