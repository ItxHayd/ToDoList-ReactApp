interface Props{
    value : string,
}

function Tasks({value}:Props){
    const handleDelete = (e: React.MouseEvent<HTMLElement>)=>{
        const target = e.currentTarget.parentElement;
        target!.remove();
    }
    return(
        <>
            <tr className="flex flex-1 w-9/12 mx-auto mb-2 ">
                <td className="w-full">
                    <div className="bg-gray-600 p-2 w-full relative rounded-md font-semibold mr-1">{value}
                        <img src="public\cross.svg" className=" h-10 z-2 absolute top-0 right-0 active:scale-110 cursor-pointer in" id="deleteBtn" onClick={handleDelete}/>
                    </div>
                </td>  
            </tr>
            
        </>
    );
}
export default Tasks