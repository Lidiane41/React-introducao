import { useState } from "react";

const Avaliacao = () => {

    const [ativo, setAtivo] = useState (false)
    return ( 
        <>
            <div className="h-screen bg-pink-600 flex justify-center">
                <div className="w-[300px] bg-white rounded-2xl p-5">
                    <h1 className="font-bold text-xl">Como você nos avalia</h1>
                    <p className="my-4">Sua opinião é muito importante para nós, por favor deixe sua nota</p>
                    <div className="grid grid-cols-5 gap-3 *:w-[40px] *:flex *:justify-center *:items-center *:bg-pink-200 *:text-pink-900 *:rounded-full *:font-bold">

                        <button 
                           onClick={() => setPosicao(1)} 
                           className={`${posicao == 1 && "!bg-pink-600 !text-white"}`}
                           >
                              1
                        </button>
                        
                        <button
                            onClick={() => setPosicao(2)} 
                            className={`${posicao == 2 && "!bg-pink-600 !text-white"}`}
                           >
                              2
                        </button>

                        <button
                            onClick={() => setPosicao(3)} 
                            className={`${posicao == 3 && "!bg-pink-600 !text-white"}`}
                           >
                              3
                        </button>

                        <button
                            onClick={() => setPosicao(4)} 
                            className={`${posicao == 4 && "!bg-pink-600 !text-white"}`}
                           >
                              4
                        </button>

                        <button
                        onClick={() => setPosicao(5)} 
                        className={`${posicao == 5 && "!bg-pink-600 !text-white"}`}
                          >
                            5
                        </button>
                    </div>

                </div>

            </div>
        </>
     );
}
 
export default Avaliacao ;