import Link from 'next/link'

import Image from "next/image"
import Arrow from "./Arrow.svg"
import Eye from "./eye.svg"
export default function forgotpassword() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
            {/* Nav & Header */}
            <nav className="relative container mx-auto px-8 p-5 pt-8 md-10 lg:px-20 xl:px-32">
                <div className="container flex flex-row justify-between">
                    <a href="/"><Image src={Arrow} alt="Arrow" /></a>
                    <div className="font-sans text-black text-2xl font-extrabold">Reset password</div>
                    <div>.</div>
                </div>
            </nav>
            <section class="relative container flex justify-center items-center flex-col mx-auto mt-10 ">
                <div className="w-80 text-center text-black text-opacity-60 text-md font-normal">OTP Valid! Setup a new password here</div>
            </section>

            <section class="relative container mx-auto px-8 pt-8 md-10 lg:px-20 xl:px-32">
                <form>
                    <div class="mb-6">
                        <input type="password" name="password" placeholder='Enter Password' id="password" class="pl-5 text-black justify-center items-center inline-flex w-full h-[60px] rounded-[10px] border border-stone-900 border-opacity-25">
                        </input>
                    </div>
                    <div class="mb-6">
                        <input type="password" name="password" placeholder='Confirm Password' id="password" class="pl-5 text-black justify-center items-center inline-flex w-full h-[60px] rounded-[10px] border border-stone-900 border-opacity-25">
                        </input>
                    </div>


                    <div class="flex flex-col justify-center items-center mt-5 mb-1">
                        <button type="submit" name="submit" class="w-72 h-14 bg-orange-500 rounded-lg text-white font-semibold py-2 px-4">Reset Password</button>
                    </div>

                </form>
            </section>
        </main>
  
    )
}
