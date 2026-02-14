import type { ReactNode } from "react";

interface Props{
    children : ReactNode
}

function TaskBar({children}:Props){
    return(
        <div className="min-h-70 rounded-2xl w-10/12 mx-auto flex justify-center content-center border-4 border-b-blue-950 border-t-amber-600 border-l-amber-600 border-r-blue-950  mt-5">
            <table className="w-full">
                <tr>
                    <th className="font-semibold text-2xl lg:text-3xl">Task List</th>
                </tr>
                {children}
            </table>
        </div>
    );
}

export default TaskBar;