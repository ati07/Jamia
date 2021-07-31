import { useRouter } from "next/router";
import Image from "next/image";
function Building() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <Image src='/Titleimg.png' width={600} height={100}/> */}
      <div className="grid grid-cols-12 pt-10 gap-12 bg-white uppercase text-center text-lg font-semibold">
        <div
          onClick={() => router.push("/floors")}
          className="flex-col col-span-4 h-[150px] w-[250px] cursor-pointer hover:bg-[#556cd6] hover:text-white rounded-xl shadow-xl border-2 flex justify-center items-center"
        >
          <h1 className="text-lg font-semibold font-sans">Old Salam Market</h1>
          <span className="text-left text-xs pl-1 mt-3 pt-1">
            <h3 className=" text-xs opacity-95">Address :</h3>
            <p className="text-left text-xs opacity-70">
              Jama Masjid, Beside Mukhtarkhana,
              <br /> Ghorasahan Road, 845418
            </p>
          </span>
        </div>
        <div className="flex-col col-span-4 h-[150px] w-[250px] cursor-not-allowed rounded-xl border-2 shadow-xl flex justify-center">
          <h1 className="text-lg font-semibold font-sans">New salam market</h1>
          <span className="text-left text-xs pl-1 mt-5 pt-1">
            <h3 className=" text-xs opacity-95">Address :</h3>
            <p className="text-left text-xs opacity-70">
            Near SBI, CBI,<br/> Dhaka, 845418
            </p>
          </span>
        </div>
        <div className="col-span-4 flex-col h-[150px] w-[250px] cursor-not-allowed rounded-xl border-2 shadow-xl flex justify-center items-center">
        <h1 className="text-lg font-semibold font-sans">Jamia market</h1>
          <span className="text-left text-xs pl-1 mt-3 pt-1">
            <h3 className=" text-xs opacity-95">Address :</h3>
            <p className="text-left text-xs opacity-70">
            Madni Chowk Market, Near Petrol pump, <br/>chandanbara, 845304
            </p>
          </span>
        </div>
        <div className="col-span-4 flex-col h-[150px] w-[250px] cursor-not-allowed rounded-xl border-2 shadow-xl flex justify-center">
        <h1 className="text-lg font-semibold font-sans">Madni Chowk Market</h1>
          <span className="text-left text-xs pl-1 mt-3 pt-1">
            <h3 className=" text-xs opacity-95">Address :</h3>
            <p className="text-left text-xs opacity-70">
            Near Petrol pump, <br/>chandanbara, 845304
            </p>
          </span>
        </div>
        <div className="col-span-4 flex-col h-[150px] w-[250px] cursor-not-allowed rounded-xl border-2 shadow-xl flex justify-center">
        <h1 className="text-lg font-semibold font-sans">Motihari Jamia Building (Phase 1)</h1>
          <span className="text-left text-xs pl-1 mt-3 pt-1">
            <h3 className=" text-xs opacity-95">Address :</h3>
            <p className="text-left text-xs opacity-70">
            Salam Nagar, Qabristan Road, <br/>Motihari, 845401
            </p>
          </span>
        </div>
        <div className="col-span-4 flex-col h-[150px] w-[250px] cursor-not-allowed rounded-xl border-2 shadow-xl flex justify-center">
        <h1 className="text-lg font-semibold font-sans">Motihari Jamia Building (Phase 2)</h1>
          <span className="text-left text-xs pl-1 mt-3 pt-1">
            <h3 className=" text-xs opacity-95">Address :</h3>
            <p className="text-left text-xs opacity-70">
            Salam Nagar, Qabristan Road, <br/>Motihari, 845401
            </p>
          </span>
        </div>
        
        {/* <div className='col-span-3 h-[10-[#fff]50px] cursor-not-allowed rounded-xl border-2 border-[#030903] flex justify-center items-center'>
                <h1>Jamia Girls</h1>
            </div>
            <div className='col-span-3 h-[100px] w-[150px] cursor-not-allowed rounded-xl border-2 border-[#030903] flex justify-center items-center'>
                <h1>Jamia Maktab</h1>
            </div> */}
      </div>
    </div>
  );
}

export default Building;
