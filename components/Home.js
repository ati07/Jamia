import {useRouter} from 'next/router'
import Image from 'next/image'
function Home() {
    const router = useRouter()
    return (
        <div className='flex flex-col pt-16 justify-center items-center'>
            <Image src='/Titleimg.png' width={600} height={100}/>
        <div className='grid opacity-70 grid-cols-12 pt-16 gap-12 bg-white uppercase  text-center text-lg font-semibold'>
            <div onClick={()=>router.push('/login')} className='col-span-3 h-[100px] w-[150px] cursor-pointer hover:bg-[#030903] hover:text-white rounded-xl border-2 border-[#030903] flex justify-center items-center'>
                <h1 className='text-lg font-semibold'>Market Management</h1>
            </div>
            <div className='col-span-3 h-[100px] w-[150px] cursor-not-allowed rounded-xl border-2 border-[#030903] flex justify-center items-center'>
                <h1>
                Jamia Office
                </h1>
            </div>
            <div className='col-span-3 h-[100px] w-[150px] cursor-not-allowed rounded-xl border-2 border-[#030903] flex justify-center items-center'>
                <h1>Jamia Mess</h1>
            </div>
            <div className='col-span-3 h-[100px] w-[150px] cursor-not-allowed rounded-xl border-2 border-[#030903] flex justify-center items-center'>
                <h1>DML School</h1>
            </div>
            <div className='col-span-3 h-[100px] w-[150px] cursor-not-allowed rounded-xl border-2 border-[#030903] flex justify-center items-center'>
                <h1>Jamia Junior School</h1>
            </div>
            <div className='col-span-3 h-[100px] w-[150px] cursor-not-allowed rounded-xl border-2 border-[#030903] flex justify-center items-center'>
                <h1>Jamia Boys</h1>
            </div>
            <div className='col-span-3 h-[10-[#fff]50px] cursor-not-allowed rounded-xl border-2 border-[#030903] flex justify-center items-center'>
                <h1>Jamia Girls</h1>
            </div>
            <div className='col-span-3 h-[100px] w-[150px] cursor-not-allowed rounded-xl border-2 border-[#030903] flex justify-center items-center'>
                <h1>Jamia Maktab</h1>
            </div>
        </div>
        </div>
    )
}

export default Home
