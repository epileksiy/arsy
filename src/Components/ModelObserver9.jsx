import React from "react";
import model from '../MudCentrifuge.glb'
// import model_ios from '../MudCentrifuge.usdz';

export default function ModelObserver9 (){
    const modelRef = React.useRef();
    // setTimeout(()=>{
    //     try{
    //        document.getElementById('model-viewer2').scale = '1.2 1.2 1.2'; 
    //     }catch{
    //         console.log('i tried')
    //     }
    // },1000);
    return(
        <div className="w-full h-screen flex flex-col nav">
            <div className="h-5/6  w-full mt-24">
                <model-viewer
                    // className="model-viewer"
                    id="model-viewer2"
                    src={model}
                    // ios-src={model_ios}
                    orientation='0 0 1'
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
            <div className=" h-2/6 w-full">
                <div className="flex justify-center">
                    <div className="mt-5 w-full md:w-1/3 flex flex-col md:border-l-4 border-white px-5">
                        <div className="text-xl font-semibold md:border-b-0 border-b-4 py-4 border-white">
                            <p>Mud Centrifuge</p>
                        </div>
                        <div className="text-lg font-medium my-5">
                            <p>Very big and complicated description of a model that goes with a visual demonstration/perfomance offline
In this way process of demonstration the most effective</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}