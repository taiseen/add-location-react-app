import { useContext } from "react";
import { PlaceContext } from "../context";

const EditPlace = ({editModal, editLocation}) => {

    const {editPlace } = useContext(PlaceContext);


    return (
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-gray-400/70 flex items-center justify-center">
            <form className="space-y-3 bg-white w-full md:w-1/2 mx-auto p-4 rounded shadow-md"
               
            >
        
            <div className="space-y-2">
                <label htmlFor="title" className="font-bold text-lg">Place Title</label>
                <input id="title" type="text"  
                className="border rounded w-full py-1.5 px-2 text-xl outline-orange-300"
                // value={editPlace.title}
                />
            </div>
        
            <div className="space-y-2">
                <label htmlFor="img" className="font-bold text-lg">Image URL</label>
                <input id="img" type="url" 
                className="border rounded w-full py-1.5 px-2 text-xl outline-orange-300"
                />
            </div>
        
            <div className="space-y-2">
                <label htmlFor="add" className="font-bold text-lg">Address</label>
                <input id="add" type="text"
                className="border rounded w-full py-1.5 px-2 text-xl outline-orange-300"
                />
            </div>
        
            <div className="space-y-2">
                <label htmlFor="dec" className="font-bold text-lg">Description</label>
                <textarea id="dec" 
                className="border rounded w-full py-1.5 px-2 text-xl outline-orange-300 resize-none h-40"
                />
            </div>
        
            <div className="flex justify-between">
            <button 
            // onClick={() => deleteModal(false)}
            className="px-4 py-2 bg-gray-300 rounded shadow duration-300
            hover:bg-green-500 hover:text-white"
            onClick={() => editLocation(0)}
            >cancel</button>
                
                <button className="px-4 py-2 bg-gray-300 rounded shadow duration-300
                hover:bg-green-500 hover:text-white" 
                onSubmit={editModal}
                > Update Place </button>
            </div>
            </form>
        </div>
    )
}

export default EditPlace





// return (
//     <div className="fixed top-0 bottom-0 right-0 left-0 bg-gray-400/70 flex items-center justify-center"
//     // onClick={()=> modal(false)}
//     >

//         <div className="bg-white p-8 rounded shadow w-80 text-center">

//             <p className="text-3xl pb-6">Are you sure?</p>

//             <button onClick={()=> editModal(false)}
//                 className="bg-green-400 px-4 h-12 capitalize text-xl rounded shadow duration-300 mr-4 
//             hover:bg-green-500 hover:text-white">cancel</button>

//             <button onClick={()=> editModal(true)}
//                 className="bg-red-400 px-4 h-12 capitalize text-xl rounded shadow duration-300 
//             hover:bg-red-500 hover:text-white">confirm</button>
            
//         </div>

//     </div>
// )