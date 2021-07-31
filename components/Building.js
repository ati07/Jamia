import { useRouter } from "next/router";
import Image from "next/image";
function Building() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <Image src='/Titleimg.png' width={600} height={100}/> */}
      <div className="grid grid-cols-12 gap-12 pt-10 text-lg font-semibold text-center uppercase bg-white">
        <div
          onClick={() => router.push("/floors")}
          className="flex-col col-span-4 h-[150px] w-[300px] p-5 cursor-pointer hover:bg-[#556cd6] hover:text-white rounded-xl shadow-xl border-2 flex justify-center items-center"
        >
          <h1 className="font-sans text-lg font-semibold">Old Salam Market</h1>
          <span className="pt-1 pl-1 mt-3 text-xs text-left">
            {/* <h3 className="text-xs opacity-95">Address :</h3> */}
            <p className="text-xs text-left opacity-70">
              Jama Masjid, Beside Mukhtarkhana,
              <br /> Ghorasahan Road, 845418
            </p>
          </span>
        </div>
        <div className="flex-col col-span-4 h-[150px] w-[300px] p-5 cursor-not-allowed rounded-xl border-2 shadow-xl flex justify-center">
          <h1 className="font-sans text-lg font-semibold">New salam market</h1>
          <span className="pt-1 pl-1 mt-5 text-xs text-left">
            {/* <h3 className="text-xs opacity-95">Address :</h3> */}
            <p className="text-xs text-left opacity-70">
            Near SBI, CBI, Dhaka,<br/> 845418
            </p>
          </span>
        </div>
        <div className="col-span-4 flex-col h-[150px] w-[300px] p-5 cursor-not-allowed rounded-xl border-2 shadow-xl flex justify-center items-center">
        <h1 className="font-sans text-lg font-semibold">Jamia market</h1>
          <span className="pt-1 pl-1 mt-3 text-xs text-left">
            {/* <h3 className="text-xs opacity-95">Address :</h3> */}
            <p className="text-xs text-left opacity-70">
            Madni Chowk Market, Near Petrol pump, <br/>chandanbara, 845304
            </p>
          </span>
        </div>
        <div className="col-span-4 flex-col h-[150px] w-[300px] p-5 cursor-not-allowed rounded-xl border-2 shadow-xl flex justify-center">
        <h1 className="font-sans text-lg font-semibold">Madni Chowk Market</h1>
          <span className="pt-1 pl-1 mt-3 text-xs text-left">
            {/* <h3 className="text-xs opacity-95">Address :</h3> */}
            <p className="text-xs text-left opacity-70">
            Near Petrol pump, <br/>chandanbara, 845304
            </p>
          </span>
        </div>
        <div className="col-span-4 flex-col h-[150px] w-[300px] p-5 cursor-not-allowed rounded-xl border-2 shadow-xl flex justify-center">
        <h1 className="font-sans text-lg font-semibold">Motihari Jamia Building (Phase 1)</h1>
          <span className="pt-1 pl-1 mt-3 text-xs text-left">
            {/* <h3 className="text-xs opacity-95">Address :</h3> */}
            <p className="text-xs text-left opacity-70">
            Salam Nagar, Qabristan Road, <br/>Motihari, 845401
            </p>
          </span>
        </div>
        <div className="col-span-4 flex-col h-[150px] w-[300px] p-5 cursor-not-allowed rounded-xl border-2 shadow-xl flex justify-center">
        <h1 className="font-sans text-lg font-semibold">Motihari Jamia Building (Phase 2)</h1>
          <span className="pt-1 pl-1 mt-3 text-xs text-left">
            {/* <h3 className="text-xs opacity-95">Address :</h3> */}
            <p className="text-xs text-left opacity-70">
            Salam Nagar, Qabristan Road, <br/>Motihari, 845401
            </p>
          </span>
        </div>
        
        {/* <div className='col-span-3 h-[10-[#fff]50px] cursor-not-allowed rounded-xl border-2 border-[#030903] flex justify-center items-center'>
                <h1>Jamia Girls</h1>
            </div>
            <div className='col-span-3 h-[100px] w-[150px] cursor-not-allowed rounded-xl border-2 border-[#030903] flex justify-center items-center'>
                <h1>Jamia Maktab</h30
    p-5         </div> */}
      </div>
    </div>
  );
}

export default Building;
