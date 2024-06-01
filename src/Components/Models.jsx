import React from "react";
import {Link} from "react-router-dom";
import gaspipe from '../gaspipe.png'
import oilpump from '../oilpump.png'
import replicator from '../replicator.png'
import car from '../car.png'
import astronaut from '../astronaut.png'
import drilling from '../subsea.png'
import subsea from '../drilling.png'
import mainmodel from '../mainmodel.png'

import mudp from '../mudp.png'
import mudc from '../mudc.png'
import cha from '../cha.png'
import planeengine from '../planeengine.png'

export default function Models() {
    return(
        <div className="w-full bg h-auto flex flex-col">
            <div className="mt-40 w-full py-10 px-24 flex justify-center md:justify-start">
                <p className="text-white text-7xl font-semibold">
                    [models]
                </p>
            </div>

            <div className="w-full px-24 flex justify-center align-middle">
                <div className=" h-80 w-1/3 p-4">
                    <Link to="/mainModel">
                        <div className="w-full h-full nav rounded-xl">
                            <div className="h-5/6 bg-white rounded-t-xl flex justify-center overflow-hidden items-center">
                                <img src={mainmodel} alt="" className="w-4/6"/>
                            </div>
                            <div className="h-1/6 bg-slate-100 border-t-2 rounded-b-xl flex justify-center items-center px-5 text-lg font-medium">
                                <p>Discover object in AR</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-full px-24 flex md:flex-row flex-col">
                    <div className=" h-64 w-full md:w-1/4 p-4">
                        <Link to="/modelobs3">
                            <div className="w-full h-full nav rounded-xl">
                            <div className="h-4/6 modcard rounded-t-xl flex justify-center overflow-hidden items-center">
                                <img src={car} alt="" className="w-4/6"/>
                            </div>
                                <div className="h-2/6 bg-slate-100 border-zinc-400 border-t-2 rounded-b-xl flex justify-start items-center px-5 text-lg font-medium">
                                    <p>Car</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className=" h-64 w-full md:w-1/4 p-4">
                        <Link to="/modelobs4">
                        <div className="w-full h-full nav rounded-xl">
                        <div className="h-4/6 modcard rounded-t-xl flex justify-center overflow-hidden items-center">
                            <img src={astronaut} alt="" className="w-4/6"/>
                        </div>
                            <div className="h-2/6 bg-slate-100 border-zinc-400 border-t-2 rounded-b-xl flex justify-start items-center px-5 text-lg font-medium">
                                <p>Astronaut</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    
                    <div className=" h-64 w-full md:w-1/4 p-4">
                        <Link to="/modelobs5">
                        <div className="w-full h-full nav rounded-xl">
                        <div className="h-4/6 modcard rounded-t-xl flex justify-center overflow-hidden items-center">
                            <img src={drilling} alt="" className="w-4/6"/>
                        </div>
                            <div className="h-2/6 bg-slate-100 border-zinc-400 border-t-2 rounded-b-xl flex justify-start items-center px-5 text-lg font-medium">
                                <p>Drilling PAD</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className=" h-64 w-full md:w-1/4 p-4">
                        <Link to="/modelobs6">
                        <div className="w-full h-full nav rounded-xl">
                        <div className="h-4/6 modcard rounded-t-xl flex justify-center overflow-hidden items-center">
                            <img src={subsea} alt="" className="w-4/6"/>
                        </div>
                            <div className="h-2/6 bg-slate-100 border-zinc-400 border-t-2 rounded-b-xl flex justify-start items-center px-5 text-lg font-medium">
                                <p>Subsea XMAS Tree</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className=" h-64 w-full md:w-1/4 p-4">
                        <Link to="/modelobs">
                        <div className="w-full h-full nav rounded-xl">
                            <div className="h-4/6 modcard rounded-t-xl flex justify-center overflow-hidden items-center">
                                <img src={gaspipe} alt="" className="w-4/6"/>
                            </div>
                            <div className="h-2/6 bg-slate-100 border-zinc-400 border-t-2 rounded-b-xl flex justify-start items-center px-5 text-lg font-medium">
                                <p>Gas Station pipes</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className=" h-64 w-full md:w-1/4 p-4">
                        <Link to="/modelobs1">
                        <div className="w-full h-full nav rounded-xl">

                            <div className="h-4/6 modcard rounded-t-xl flex justify-center overflow-hidden items-center">
                                <img src={oilpump} alt="" className="w-4/6"/>
                            </div>
                            <div className="h-2/6 bg-slate-100 border-zinc-400 border-t-2 rounded-b-xl flex justify-start items-center px-5 text-lg font-medium">
                                <p>Pump</p>
                            </div>
                        </div>
                        </Link>
                    </div>
            </div>
            <div className="w-full px-24 flex md:flex-row flex-col">
                    <div className=" h-64 w-full md:w-1/4 p-4">
                        <Link to="/modelobs7">
                        <div className="w-full h-full nav rounded-xl">
                        <div className="h-4/6 modcard rounded-t-xl flex justify-center overflow-hidden items-center">
                            <img src={mudp} alt="" className="w-4/6"/>
                        </div>
                            <div className="h-2/6 bg-slate-100 border-zinc-400 border-t-2 rounded-b-xl flex justify-start items-center px-5 text-lg font-medium">
                                <p>Mud PUMP</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className=" h-64 w-full md:w-1/4 p-4">
                        <Link to="/modelobs8">
                        <div className="w-full h-full nav rounded-xl">
                        <div className="h-4/6 modcard rounded-t-xl flex justify-center overflow-hidden items-center">
                            <img src={planeengine} alt="" className="w-4/6"/>
                        </div>
                            <div className="h-2/6 bg-slate-100 border-zinc-400 border-t-2 rounded-b-xl flex justify-start items-center px-5 text-lg font-medium">
                                <p>Plane engine</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    
                    <div className=" h-64 w-full md:w-1/4 p-4">
                        <Link to="/modelobs9">
                        <div className="w-full h-full nav rounded-xl">
                        <div className="h-4/6 modcard rounded-t-xl flex justify-center overflow-hidden items-center">
                            <img src={mudc} alt="" className="w-4/6"/>
                        </div>
                            <div className="h-2/6 bg-slate-100 border-zinc-400 border-t-2 rounded-b-xl flex justify-start items-center px-5 text-lg font-medium">
                                <p>Mud Centrifuge</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className=" h-64 w-full md:w-1/4 p-4">
                        <Link to="/modelobs10">
                        <div className="w-full h-full nav rounded-xl">
                        <div className="h-4/6 modcard rounded-t-xl flex justify-center overflow-hidden items-center">
                            <img src={cha} alt="" className="w-4/6"/>
                        </div>
                            <div className="h-2/6 bg-slate-100 border-zinc-400 border-t-2 rounded-b-xl flex justify-start items-center px-5 text-lg font-medium">
                                <p>Chalcopyrite</p>
                            </div>
                        </div>
                        </Link>
                    </div>
            </div>
        </div>
    );
}