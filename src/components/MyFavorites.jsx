const MyFavorites = ({ place, removeFav }) => {

  const { id, title, imgUrl, address, description } = place;

  return (

    <div className="bg-gray-300  rounded shadow-md text-center pb-4">

      <img src={imgUrl} alt={title}
        className="aspect-video rounded-t w-full object-cover " />

      <div className="py-2 ">
        <h3 className="text-2xl md:text-3xl capitalize">{title}</h3>
        <address className="font-bold text-xl">{address}</address>
        <p className="px-4">{description}</p>
      </div>

      <div className="text-center px-4 mt-4">
        <button className="px-4 py-2 bg-gray-400 rounded shadow duration-300 
              hover:bg-red-500 hover:text-white capitalize"
          onClick={() => removeFav(id)}>
          remove from favorite
        </button>
      </div>

    </div>
  )
}

export default MyFavorites