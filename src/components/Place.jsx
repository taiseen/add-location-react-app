
const Place = ({ place, deleteLocation, addFav, isFav, removeFav, editLocation }) => {

    const { id, title, img, address, description } = place;

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

                <img src={img} alt={title}
                    className="aspect-video rounded-t w-full object-cover " />

                <div className="py-2 text-xl md:text-2xl">
                    <h3 className="text-2xl md:text-3xl capitalize">{title}</h3>
                    <address className="font-bold">{address}</address>
                    <p className="capitalize">{description}</p>
                </div>

                <div className="flex justify-between px-4 mt-4">

                    <div>
                        <button className="px-4 py-2 bg-gray-400 rounded shadow duration-300 
                                    hover:bg-red-500 hover:text-white capitalize"
                            onClick={() => deleteLocation(id)}
                        >
                            delete
                        </button>
                        <button className="px-4 py-2 bg-gray-400 rounded shadow duration-300 
                                    hover:bg-orange-500 hover:text-white capitalize ml-2"
                            onClick={() => editLocation(id)}
                        >
                            edit
                        </button>
                    </div>

                    <button className="px-4 py-2 bg-gray-400 rounded shadow duration-300 
                                    hover:bg-green-500 hover:text-white capitalize"
                        onClick={() => toggleFavorite()}
                    >
                        {
                            isAddToFavorite
                                ? <span className=" text-red-700">remove from favorite</span>
                                : 'add to favorite'
                        }
                    </button>
                </div>

            </div>
    )
}

export default Place