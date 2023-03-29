import React from "react";

import model from '../model.glb';
import model_ios from '../modeldsc2.usdz';

export default function Main() {
    const modelRef = React.useRef();
    return(
        <div className="w-full h-auto main flex flex-col md:flex-row">

            <svg width="0" height="0">
                <filter id="grainy" x="0" y="0" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency=".537"></feTurbulence>
                <feColorMatrix type="saturate" values="0"></feColorMatrix>
                <feBlend in="SourceGraphic" mode="multiply"></feBlend>
                </filter>
            </svg>

            <div className="md:fixed md:h-full md:w-1/2 z-0 md:top-10 h-96 w-auto mt-20 md:mt-0 model">
                <model-viewer
                // className="model-viewer"
                src={model}
                ios-src={model_ios}
                alt="A rock"
                exposure="1"
                camera-controls
                ar
                ar-modes="webxr"
                ref={(ref) => {
                    modelRef.current = ref;
                }}
                >
                </model-viewer>
            </div>

            <div className="w-full flex mt-10 flex-col md:flex-row md:top-1/4 md:mt-40 px-10 mb-20">
                <div className="md:w-1/2  text-white">

                </div>
                <div className="md:w-1/2 w-full flex justify-start flex-col text-left md:mt-36">
                <p className='lg:text-9xl md:text-8xl text-6xl text text-white font-semibold'>ARSY</p>
                <div className="flex flex-col text-left">
                    <p className='md:text-3xl text-lg text text-white font-semibold underline'>Augmented reality system</p>
                    <p className='md:text-4xl text-lg text text-white font-semibold'>for education, safety trainings </p>
                    <p className='md:text-3xl text-lg text text-zinc-300 font-semibold'>and any other smart interpretation of any complex information</p>
                    <p className='md:text-xl text-lg text text-zinc-400 font-semibold mt-2'>Triple Point 2022 winners</p>
                    <p className='md:text-lg text-lg text text-zinc-400 font-semibold mt-2'>©Skoltech</p>
                </div>
                </div>
            </div>
        </div>
    );
}