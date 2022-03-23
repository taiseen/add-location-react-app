import { useEffect, useState } from "react";

const EditPlace = ({ editModal, setIsEditOpen, editInfo }) => {

    const [updatedInfo, setUpdatedInfo] = useState({});
    const { title, imgUrl, address, description } = updatedInfo;

    useEffect(() => {
        setUpdatedInfo({ ...editInfo });
    }, [editInfo])


    const handleEdit = (e) => {
        setUpdatedInfo({ ...updatedInfo, [e.target.name]: e.target.value });
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        editModal(updatedInfo);
    }


    return (

        <div className="fixed top-0 bottom-0 right-0 left-0 bg-gray-400/70 flex items-center justify-center">
            {
                editInfo &&
                <form className="space-y-3 bg-white w-full md:w-1/2 mx-2 xl:mx-auto p-4 rounded shadow-md"
                    onSubmit={handleUpdate} >

                    <div className="space-y-2">
                        <label htmlFor="title" className="font-bold md:text-lg">Place Title</label>
                        <input className="border rounded w-full py-1.5 px-2 text-lg md:text-xl outline-orange-300"
                            id="title" type="text" name="title"
                            value={title}
                            onChange={e => handleEdit(e)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="img" className="font-bold md:text-lg">Image URL</label>
                        <input className="border rounded w-full py-1.5 px-2 text-lg md:text-xl outline-orange-300"
                            id="img" type="url" name="imgUrl"
                            value={imgUrl}
                            onChange={e => handleEdit(e)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="add" className="font-bold md:text-lg">Address</label>
                        <input className="border rounded w-full py-1.5 px-2 text-lg md:text-xl outline-orange-300"
                            id="add" type="text" name="address"
                            value={address}
                            onChange={handleEdit}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="dec" className="font-bold md:text-lg">Description</label>
                        <textarea className="border rounded w-full py-1.5 px-2 text-lg md:text-xl outline-orange-300 resize-none h-40"
                            id="dec" name="description"
                            value={description}
                            onChange={handleEdit}
                        />
                    </div>

                    <div className="flex justify-between">
                        <button type="button" className="px-4 py-2 bg-gray-300 rounded shadow duration-300
                            hover:bg-blue-500 hover:text-white"
                            onClick={() => setIsEditOpen(false)}> cancel </button>

                        <button type="submit" className="px-4 py-2 bg-gray-300 rounded shadow duration-300
                        hover:bg-orange-500 hover:text-white"> Update Place </button>
                    </div>
                </form>
            }
        </div>
    )
}

export default EditPlace;