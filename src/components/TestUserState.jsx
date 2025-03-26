import { useState } from "react";

const TestUseState = () => {

    // let numero = 1; // JS Vanilla
    const [numero, setNumero] = useState(1);
    const [interruptor, setInterruptor] = useState(false);

    function adicionar() {
        // numero += 1; JS Vanilla
        setNumero(numero + 1);
    }

    function ligaDesliga() {
        setInterruptor(!interruptor);
    }

    return (
        <>
            <button
                className="block bg-violet-500 rounded h-[40px] px-6 text-white mb-3"
                onClick={adicionar}>click me {numero}</button>

            <button
                className="block bg-violet-500 rounded h-[40px] px-6 text-white mb-3"
                onClick={ligaDesliga}>interruptor</button>
            <div className="w-[500px] overflow-hidden">
                {/* {
                    interruptor ? (
                        <img
                            src="https://central.to.gov.br/image/5898?w=600&h=370"
                            alt=""
                        />
                    ) : (
                        <img
                            src="https://w7.pngwing.com/pngs/812/392/png-transparent-white-bulb-incandescent-light-bulb-lighting-icon-bulb-off-light-fixture-electronics-image-file-formats.png"
                            alt=""
                        />
                    )
                } */}
                <img
                    src={interruptor ? "https://central.to.gov.br/image/5898?w=600&h=370" : "https://w7.pngwing.com/pngs/812/392/png-transparent-white-bulb-incandescent-light-bulb-lighting-icon-bulb-off-light-fixture-electronics-image-file-formats.png"}
                    alt=""
                />
            </div>
        </>
    );
}

export default TestUseState;