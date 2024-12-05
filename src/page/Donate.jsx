// import { SectionIcon } from 'lucide-react'
import React from 'react'
// import Contact from '../components/Contacting'
import Footer from '../components/Footer'

const Donate = () => {
  return (
    <section className='sections'>
        <div className='md:my-10 max-sm:mb-5 rounded-[16px]  bg-donateHeader h-[250px] md:h-[470px] flex items-center justify-center bg-cover bg-center bg-no-repeat'>
            {/* <h2 className='bgHeaderText'>Donate</h2> */}
        </div>
        <form action="" className='grid gap-y-3 md:w-[70%] mx-auto md:my-10 md:pt-5 '>
            <h2 className='heading4 text-center'>Your generosity can make a real difference. <br /> Be part of something bigger today!</h2>
            <div className='grid gap-2 mt-5'>
                <label htmlFor="">Enter Amount</label>
                <input type="text" placeholder='****' className='input'/>
            </div>
            <div className='flex max-sm:flex-col gap-3 md:gap-8 w-full justify-between'>
                <div className='grid gap-2 w-full'>
                    <label htmlFor="">First name</label>
                    <input type="text" placeholder='First name' className='input'/>
                </div>
                <div className='grid gap-2 w-full'>
                    <label htmlFor="">Last name</label>
                    <input type="text" placeholder='Last name' className='input' />
                </div>
            </div>

            <div className='grid gap-2'>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='you@company.com' className='input'/>
            </div>
            
            
            <button type="submit" className='button'>Pay</button>
        </form>
        <Footer/>
        <p className='grid justify-center  w-[100%] text-center md:text-[28px] font-bold'>ACCOUNT DETAILS, COMING SOON! YOU CAN CONTACT US FOR SPONSOR</p>
    </section>
  )
}

export default Donate