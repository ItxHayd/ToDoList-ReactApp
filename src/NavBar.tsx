interface Props{
    heading: string,
}


function NavBar({heading}:Props){
    return(
       <>
        <div className="flex h-auto content-center justify-center mb-2 bg-cyan-800">
            <h4 className="font-mono text-4xl hover:text-red-300 scale-90 hover:scale-100 cursor-default">{heading}</h4>
        </div>
       </> 
    );
}
export default NavBar;