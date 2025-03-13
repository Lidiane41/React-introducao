const Perfil = ({children}) => {
    return (
        <>
           
            <div className="w-full h-screen bg-myGrey-900 flex justify-center items-center font-Inter text-white">
                <div className="w-[400px] bg-myGrey-800 rounded-xl p-[40px]">
                    <img
                        src="https://frasesparafotos.top/wp-content/uploads/2023/01/fotos-perfil-facebook-gratis-300x300.jpg" alt="Foto de perfil"
                        className="w-[100px] rounded-full m-auto"
                    />
                    <div className="text-center">
                        <h1 className="text-[28px] font-bold mt-4">Lidiane Nogueira</h1>
                        <h6 className="font-bold text-myGreen mb-4">Fortaleza-Ce - Brasil</h6>
                        <p>Frontend Developer</p>
                    </div>
                    <div className="mt-6">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Perfil; 