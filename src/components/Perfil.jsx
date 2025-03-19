const Perfil = ({children}) => {
    return (
        <>
           
            <div className="w-full h-screen bg-myGrey-900 flex justify-center items-center font-Inter text-white">
                <div className="w-[400px] bg-myGrey-800 rounded-xl p-[40px]">
                    <img
                        src="https://th.bing.com/th/id/OIP.a9F_vLc0iE28S8HJwrLyIAAAAA?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Foto de perfil"
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