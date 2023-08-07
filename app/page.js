import Link from 'next/link'


export default function Home() {
  return (
    <main>
    <h1>Home</h1>
    <Link href="/login"> Login </Link>
    <Link href="/signup"> Signup </Link>
    <Link href="/forgotpassword"> forgotpass </Link>
    <Link href="/forgotpassword/resetnewpassword"> resetnewpass </Link>
    <Link href="/forgotpassword/resetpassword"> resetpass </Link>
    </main>
  
    )
}
