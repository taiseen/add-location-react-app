import Tippy from "@tippy.js/react";
import 'tippy.js/dist/tippy.css';

const Place = ({ place, deleteLocation, addFav, isFav, removeFav, editLocation }) => {

    const { id, title, imgUrl, address, description } = place;

    const isAddToFavorite = isFav(id);

    const toggleFavorite = () => {
        if (isAddToFavorite) {
            removeFav(id);
        } else {
            addFav(place);
        }
    }

    return (

        <div className="bg-gray-300  rounded shadow-md text-center pb-4">

            <img src={imgUrl} alt={title}
                className="aspect-video rounded-t w-full object-cover " />

            <div className="py-2">
                <h3 className="text-2xl md:text-3xl capitalize">{title}</h3>
                <address className="font-bold text-xl">{address}</address>
                <p className="px-4">{description}</p>
            </div>

            <div className="flex justify-between px-4 mt-4">

                <div>
                    <Tippy content="Delete this place">
                        <button className="px-4 py-2 bg-gray-400 rounded shadow duration-300 
                                    hover:bg-red-500 hover:text-white capitalize"
                            onClick={() => deleteLocation(id)}
                        >
                            delete
                        </button>
                    </Tippy>

                    <Tippy content="Update this place">
                        <button className="px-4 py-2 bg-gray-400 rounded shadow duration-300 
                                    hover:bg-orange-500 hover:text-white capitalize ml-2"
                            onClick={() => editLocation(id)}
                        >
                            edit
                        </button>
                    </Tippy>
                </div>

                {
                    isAddToFavorite
                        ? <Tippy content={<span className="text-red-300">Remove from favorite</span>}>
                            <button className="px-4 py-2 bg-gray-400 rounded shadow duration-300 text-red-700
                                        hover:bg-red-500 hover:text-white capitalize"
                                onClick={() => toggleFavorite()}> remove </button>
                        </Tippy>

                        : <Tippy content={<span className="text-green-300">Add to favorite</span>}>
                            <button className="px-4 py-2 bg-gray-400 rounded shadow duration-300 
                                        hover:bg-green-500 hover:text-white capitalize"
                                onClick={() => toggleFavorite()}> add </button>
                        </Tippy>
                }



                {/* <Tippy content="Add this place">
                    <button className="px-4 py-2 bg-gray-400 rounded shadow duration-300 
                                    hover:bg-green-500 hover:text-white capitalize"
                        onClick={() => toggleFavorite()}
                    >
                        {
                            isAddToFavorite
                                ? <span className=" text-red-700"></span>
                                : 'add to favorite'
                        }
                    </button>
                </Tippy> */}
            </div>

        </div>
    )
}

export default Place