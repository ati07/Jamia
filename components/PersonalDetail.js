import {useRouter} from 'next/router'
function PersonalDetail() {
  const router = useRouter();

    return (
        <div className=" w-full grid grid-cols-12 gap-4">
            <div className='col-span-6 '>Name: {router.query.name}</div>
            <div className='col-span-6 '>Home Address: Chuaparan,Bihar</div>
            <div className='col-span-6 '>Country: India</div>
            <div className='col-span-6 '>Market: Old Salam Market</div>
            <div className='col-span-6 '>Floor: 5</div>
            <div className='col-span-6 '>Shop: 5</div>
            <div className='col-span-6 '>Mobile Number: 756509118605</div>
            <div className='col-span-6 '>Agreement Year: 2</div>

        </div>
    )
}

export default PersonalDetail
