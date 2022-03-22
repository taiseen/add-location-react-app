const DeleteModal = ({ deleteModal }) => {

    return (
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-gray-400/70 flex items-center justify-center"
        // onClick={()=> deleteModal(false)}
        >

            <div className="bg-white p-8 rounded shadow w-80 text-center">

                <p className="text-3xl pb-6">Are you sure?</p>

                <button onClick={() => deleteModal(false)}
                    className="bg-green-400 px-4 h-12 capitalize text-xl rounded shadow duration-300 mr-4 
                hover:bg-green-500 hover:text-white">cancel</button>

                <button onClick={() => deleteModal(true)}
                    className="bg-red-400 px-4 h-12 capitalize text-xl rounded shadow duration-300 
                hover:bg-red-500 hover:text-white">confirm</button>

            </div>

        </div>
    )
}

export default DeleteModal