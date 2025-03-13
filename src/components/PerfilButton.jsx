const PerfilButton = ({link, titulo}) => {
    return ( 
        <>
            <a 
               href={link}
                className="w-full leading-[400px] block bg-myGrey-700 text-white font-bold rounded-md text-center" target="blank"
            >
                {titulo}
           </a>
        </>
    );

}
 
export default PerfilButton;