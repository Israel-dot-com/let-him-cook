import React from "react"
import Image from "next/image"

import Arrow from "./Arrow.svg"
import apple from "./apple.png"
import facebook from "./facebook.png"
import google from "./google.png"


export default function Login() {
    return(
        <main className="bg-white min-h-screen flex flex-col">
            {/* Nav & Header */}
            <nav className="relative container mx-auto px-8 p-5 pt-8 md-10 lg:px-20 xl:px-32">
                <div className="container flex flex-row justify-between">
                    <a href="/"><Image src={Arrow} alt="Arrow" /></a>
                    <div className="font-sans text-black text-2xl font-extrabold">Login</div>
                    <div>.</div>
                </div>
            </nav>
            <section class="relative container mx-auto px-8 pt-8 md-10 lg:px-20 xl:px-32">
                <form>
                    <div class="mb-6">
                        <label for="email" class="text-black text-lg font-bold mb-0.5">Email Address</label>
                        <input type="email" name="email" id="email" class="justify-center items-center inline-flex w-full h-[60px] rounded-[10px] border border-stone-900 border-opacity-25">
                        </input>
                    </div>
                    <div class="mb-6">
                        <div class="">
                            <label for="username" class="text-black text-lg font-bold mb-0.5">Username</label>
                            <input type="email" name="email" id="email" class="justify-center items-center inline-flex w-full h-[60px] rounded-[10px] border border-stone-900 border-opacity-25">
                            </input>
                        </div>
                    </div>
                    <div class="container flex flex-row justify-between">
                        <div class="">
                            <label for="checkbox" class="flex items-center">
                                <input type="radio" name="radio" id="radio" class="text-black" />
                                <span class="ml-2 text-black font-bold">Remember me</span>
                            </label>
                        </div>
                        <div class="">
                            <a href="/forgotpassword" class="text-black font-bold">Forgot password?</a>
                        </div>
                    </div>
                    
                    <div class="flex justify-center items-center mt-5 mb-1">
                        <button type="submit" name="submit" class="w-72 h-14 bg-orange-500 rounded-lg text-white font-semibold py-2 px-4">Login</button>
                    </div>
                </form>
            </section>

            <section className=" relative container flex justify-center items-center flex-col mx-auto px-8 p-5 pt-8 md-10 lg:px-20 xl:px-32">
                <div className="text-black text-md font-bold mb-8">Or continue with</div>
                <div className="container flex row justify-between">
                    <a><Image src={google} alt="Arrow" /></a>
                    <a><Image src={apple} alt="Arrow" /></a>
                    <a><Image src={facebook} alt="Arrow" /></a>
                </div>
            </section>

            <section class="relative container flex justify-center items-center flex-col mx-auto mt-auto pb-10  md-10 lg:px-20 xl:px-32">
                <div className="w-80 text-center text-black text-opacity-60 text-md font-normal">Welcome back! There are thousands of recipes waiting to be explored and thousands of explorers waiting to find yours. Log in to join in on the chopping, dicing, steaming fun!</div>
            </section>

            <section class="relative container mx-auto mt-auto pb-10  md-10 lg:px-20 xl:px-32">
                <div class="flex flex-row justify-center items-center">
                    <div class="text-black text-lg font-bold">Don't have an account?</div>
                    <a href="/signup" class="text-sky-600 font-bold ml-2">Sign Up</a>
                </div>
            </section>
        </main>
    )
}