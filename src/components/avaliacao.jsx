import { useState } from "react";

const Avaliacao = () => {

    const [ativo, setAtivo] = useState(false);
    const [posicao, setPosicao] = useState(0);

    function avaliar(){
        if(posicao == 0){
            alert("Escolha uma nota");
            return;
        }
        setAtivo(true);
    }

    return (
        <>
            <div className="h-screen bg-pink-600 flex justify-center items-center">
                <div className={`w-[300px] bg-white rounded-2xl p-5 ${ ativo && "hidden"}`}>
                    <h1 className="font-bold text-xl">Como você nos avalia</h1>
                    <p className="my-4">Sua opinião é muito importante para nós, por favor deixe sua nota</p>
                    <div className="grid grid-cols-5 gap-3 *:w-[40px] *:h-[40px] *:flex *:justify-center *:items-center *:bg-pink-200 *:text-pink-900 *:rounded-full *:font-bold">
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
                    <button 
                        onClick={avaliar}
                        className="w-full h-[40px] bg-pink-600 text-white font-bold rounded-full mt-4"
                    >
                        Enviar
                    </button>
                </div>
                <div className={`w-[300px] bg-white rounded-2xl p-5 text-center ${ ativo || "hidden"}`}>
                    <h1>Obrigado pela sua avaliação</h1>
                    <h6 className="font-bold text-xl my-4">{posicao} de 5</h6>
                    {
                        posicao != 5 && (
                            <p onClick={() => setAtivo(false)} className="text-pink-600 hover:underline cursor-pointer">Voltar</p>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Avaliacao;