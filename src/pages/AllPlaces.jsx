import { useContext } from 'react';
import { Place, DeleteModal, EditPlace } from './../components';
import { PlaceContext, FavoriteContext } from '../context';

const AllPlaces = () => {

  const {  allLocations,
    isModalOpen, deleteModal, deleteLocation,
    isEditOpen, editModal, editLocation, setIsEditOpen, editInfo } = useContext(PlaceContext);

  const { addFav, isFav, removeFav } = useContext(FavoriteContext);
  
  // fireBaseDataLoading,
  // if (fireBaseDataLoading) {
  //   return (
  //     <section className="h-screen flex items-center justify-center">
  //       {/* <p className="text-5xl text-red-500">Loading...</p> */}
  //       {/* <div class="spinner-border animate-spin inline-block w-14 h-14 border-8 rounded-full text-red-500">
  //         <span class=" rounded-full text-4xl">.</span>
  //       </div> */}

  //       <svg role="status" className="inline mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
  //         <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
  //       </svg>
  //     </section>
  //   )
  // }

  return (

    <section className="mt-12 md:mt-16 pt-2 pb-4">

      <h1 className="text-3xl md:text-4xl my-4"> All Places... </h1>

      {
        allLocations.length > 0
          ? < div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {
              allLocations.slice(0).reverse().map(place => (
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
          : <div className="relative top-60 left-0 right-0 text-center">
            <p className=" text-lg md:text-3xl "> You are adding no place yet... 🧐 </p>
          </div>
      }

      {
        isModalOpen && <DeleteModal deleteModal={deleteModal} />
      }

      {
        isEditOpen &&
        <EditPlace
          editLocation={editLocation}
          setIsEditOpen={setIsEditOpen}
          editInfo={editInfo}
          editModal={editModal}
        />
      }

    </section >
  )
}

export default AllPlaces