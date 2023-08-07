import Link from 'next/link'

import Image from "next/image"
import Arrow from "./Arrow.svg"

export default function signup() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
            {/* Nav & Header */}
            <nav className="relative container mx-auto px-8 p-5 pt-8 md-10 lg:px-20 xl:px-32">
                <div className="container flex flex-row justify-between">
                    <a href="/"><Image src={Arrow} alt="Arrow" /></a>
                    <div className="font-sans text-black text-2xl font-extrabold">Sign up</div>
                    <div>.</div>
                </div>
            </nav>
            <section class="relative container mx-auto px-8 pt-8 md-10 lg:px-20 xl:px-32">
                <form>
                    <div class="mb-6">
                        <label for="username" class="text-black text-lg font-bold mb-0.5">Username</label>
                        <input type="username" name="username" placeholder='Enter here' id="username" class=" justify-center items-center text-black pl-5 inline-flex w-full h-[60px] rounded-[10px] border border-stone-900 border-opacity-25">
                        </input>
                    </div>
                    <div class="mb-6 flex flex-row gap-14">
                        <div class="">
                            <label for="firstname" class="text-black text-lg font-bold mb-0.5">First Name</label>
                            <input type="firstname" name="firstname" placeholder='Enter here' id="firstname" class="text-black pl-5 justify-center items-center inline-flex w-full h-[60px] rounded-[10px] border border-stone-900 border-opacity-25">
                            </input>
                        </div>
                        <div class="">
                            <label for="lastname" class="text-black text-lg font-bold mb-0.5">Last Name</label>
                            <input type="lastname" name="lastname" placeholder='Enter here' id="lastname" class="text-black pl-5 justify-center items-center inline-flex w-full h-[60px] rounded-[10px] border border-stone-900 border-opacity-25">
                            </input>
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="email" class="text-black text-lg font-bold mb-0.5">Email Address</label>
                        <input type="email" name="email" placeholder='Enter here' id="email" class="pl-5 text-black justify-center items-center inline-flex w-full h-[60px] rounded-[10px] border border-stone-900 border-opacity-25">
                        </input>
                    </div>
                    <div class="mb-6">
                        <label for="phone" class="text-black text-lg font-bold mb-0.5">Phone Number</label>
                        <input type="tel" name="email" placeholder='Enter here' id="email" class="pl-5 text-black justify-center items-center inline-flex w-full h-[60px] rounded-[10px] border border-stone-900 border-opacity-25">
                        </input>
                    </div>
                    <div class="mb-6">
                        <label for="password" class="text-black text-lg font-bold mb-0.5">Password</label>
                        <input type="password" name="password" placeholder='Enter here' id="password" class="pl-5 text-black justify-center items-center inline-flex w-full h-[60px] rounded-[10px] border border-stone-900 border-opacity-25">
                        </input>
                    </div>
                    <div class="flex flex-col justify-center items-center mt-5 mb-1">
                        <button type="submit" name="submit" class="w-72 h-14 bg-orange-500 rounded-lg text-white font-semibold py-2 px-4">Sign Up</button>
                        <div className="pt-1 text-black text-[9.5px] font-medium"><span>By continuing, you agree to our </span><span className='text-sky-600'>Terms of Service</span><span> and </span><span className='text-sky-600'>Privacy policy</span></div>
                    </div>
                </form>
            </section>



            <section class="relative container mx-auto mt-auto pb-10  md-10 lg:px-20 xl:px-32">
                <div class="flex flex-row justify-center items-center">
                    <div class="text-black text-md font-bold">Already have an account?</div>
                    <a href="/signup" class="text-sky-600 font-bold ml-2">Login</a>
                </div>
            </section>
        </main>
  
    )
}
