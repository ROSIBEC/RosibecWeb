import step1 from '../assets/step1.svg'
import step2 from '../assets/step2.svg' 
import step3 from '../assets/step3.svg'
import volunteerDonation from '../assets/volunteerDonatee.svg'
import homeless from '../assets/homeless.svg'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Volunteer = () => {
  return (
    <section className='sections'>
        <div className='md:my-10 max-sm:mb-5 rounded-[16px] w-full pt-5  md:pt-10 bg-volunteerHeader h-[300px] md:h-[470px]  bg-cover bg-center bg-no-repeat'>
            <div className='md:w-8/12 px-5 md:pl-20 text-whites-200 grid items-start justify-start gap-5 md:gap-10'>
                <h2 className='text-[22px] md:text-[64px] text-whites-200 font-semibold leading-[20px] md:leading-[60px] '>Let's create change together. Start today!</h2>
                <p className='text-md md:text-2xl'>
                    Join us in making a difference in the lives of widows and underpriviledged children. Together we
                    can uplift communities and build a brighter future. Start today and be part of the change.
                </p>
                <div className='flex  w-full items-start justify-start md:mt-5 gap-2 lg:gap-5'>
                    <Link to='/volunteer'><button className='py-3 md:py-5 text-whites-100 rounded-[10px] bg-purples-200 px-4 md:px-8' type='button'>Volunteer</button></Link>
                    <Link to='/partner'><button className='py-3 md:py-5 text-whites-100 rounded-[10px] bg-purples-200 px-4 md:px-8' type='button'>Partner</button></Link>
                    <Link to='/donate'><button className='py-3 md:py-5 text-whites-100 rounded-[10px] bg-purples-200 px-4 md:px-8' type='button'>Donate</button></Link>
                </div>
            </div>
        </div>

        <div className=' pt-10'>
            <div className='grid md:grid-cols-2 gap-5 lg:gap-10'>
                
                <img src={homeless} alt="" className='max-sm:w-[400px]'/>
                <div className=''>
                    <h3 className='heading3  md:text-left  mb-5'>No more homeless, no more hunger!</h3>
                    <p >
                        At the Rosemary Ibeji Care Foundation, our commitment to ending homelessness and hunger
                        is central to our mission. We believe that everyone deserves access to safe housing and nutritious food.
                    </p>
                    <p>
                        Through our affordable housing support programs, we work to provide shelter and stability to widows and underprivileged families.
                    </p>
                    <p>
                        Our hunger relief initiatives, such as food distribution and partnerships with local food banks, ensure that no one in our community goes hungry. By combining practical solutions with compassion, we aim to create a future where no one is homeless or hungry, restoring dignity and hope for all.
                    </p>
                </div>
            </div>
        </div>

        <div className=' pt-10  my-5'>
            <div className='text-justify lg:text-center md:w-3/4 grid gap-5 mb-5 md:mb-10 mx-auto'>
                <h3 className='heading3'>Quick process of donation</h3>
                <p>
                    The quick donation process at the Rosemary Ibeji Care Foundation is designed for simplicity and efficiency. In just three steps, you can make an impact...
                </p>
            </div>

            <div className='grid md:grid-cols-3 gap-5'>
                <div className='stepsCard'>
                    <img src={step1} alt="" />
                    <h4 className='heading4'>Step 1: Visit</h4>
                    <p>Visit the Rosemary Ibeji Care Foundation's website and click on the Donate button</p>
                </div>
                <div className='stepsCard'>
                    <img src={step2} alt="" />
                    <h4 className='heading4'>Step 2: Select</h4>
                    <p>Seletect your donation amount and frequency, then fill in your personal detail and payment information.</p>
                </div>
                <div className='stepsCard'>
                    <img src={step3} alt="" />
                    <h4 className='heading4'>Step 3: Confirm</h4>
                    <p>Submit your donation and receive a confirmation email with a receipt, along with updates on how your donation is making an impact</p>
                </div>
            </div>

        </div>
        <div className=' py-10 md:py-20 '>
            <div className='grid md:grid-cols-2 gap-5'>
                <img src={volunteerDonation} alt="" />
                <div className='grid gap-3 '>
                    <h3 className='text-[36px] max-sm:text-center md:text-[40px] font-semibold leading-[40px] md:leading-[60px] text-blacks-200'>Join us to help others</h3>
                    <p>
                        Support the Rosemary Ibeji Care Foundation in empowering widows and 
                        underpriviledged children. Your donations, time, or advocacy can make a lasting difference. 
                        Together, we can bring hope and change lives!
                    </p>
                    <Link to='/donate'><button className='button md:w-1/2 w-full' type='button'>Donate</button></Link>
                </div>
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default Volunteer