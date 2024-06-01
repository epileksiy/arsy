import React from "react";

export default function Faq (){
    return(
        <div className="w-full bg h-auto flex flex-col ">
            <div className="mt-40 w-full flex justify-center">
                <div className="flex flex-col md:flex-row">
                    <p className="text-white text-5xl lg:text-9xl font-semibold faq ml-5 md:ml-0">
                        FAQ?¿
                    </p>
                    <p className="text-white text-xl lg:text-2xl faq2 w-96 ml-10 mt-4 md:mt-0">
                        Frequently asked questions, everything that may help in form of answers
                    </p>
                </div>

            </div>
            <div className="w-full px-24 flex flex-col mt-14">
                <div className=" h-auto md:h-28 py-10 nav faq2 rounded-lg text-black flex justify-center items-center text-xl lg:text-3xl font-semibold p-5">
                    <p>- Question 1 about very important feature?</p>
                </div>
                <div className=" h-28 faq2 rounded-lg text-white flex justify-center items-center text-xl lg:text-3xl font-semibold">
                    <p>Answer for this question</p>
                </div>
                <div className=" h-auto md:h-28 py-10 nav faq2 rounded-lg text-black flex justify-center items-center text-xl lg:text-3xl font-semibold p-5">
                    <p>- Question 2 about very important feature?</p>
                </div>
                <div className=" h-28 faq2 rounded-lg text-white flex justify-center items-center text-xl lg:text-3xl font-semibold">
                    <p>Answer for this question</p>
                </div>
                <div className=" h-auto md:h-28 py-10 nav faq2 rounded-lg text-black flex justify-center items-center text-xl lg:text-3xl font-semibold p-5">
                    <p>- Question 3 about very important feature?</p>
                </div>
                <div className=" h-28 faq2  rounded-lg text-white flex justify-center items-center text-xl lg:text-3xl font-semibold mb-20">
                    <p>Answer for this question</p>
                </div>
            </div>
        </div>
    );
}