import step1 from '../assets/step1.svg'
import step2 from '../assets/step2.svg' 
import step3 from '../assets/step3.svg'
import volunteerDonation from '../assets/volunteerDonate.svg'
import homeless from '../assets/homeless.svg'
import Footer from '../components/Footer'

const Volunteer = () => {
  return (
    <section>
        <div className='sections grid place-content-center gap-5 my-5'>
            <h2 className='heading2'>Let's create change together. Start today!</h2>
            <p>
                Join us in making a difference in the lives of widows and underpriviledged children. Together we
                can uplift communities and build a brighter future. Start today and be part of the change.
            </p>
            <div className='flex max-sm:flex-col mt-5 gap-5'>
                <button className='button' type='button'>Volunteer</button>
                <button className='button' type='button'>Partner</button>
                <button className='button' type='button'>Donate</button>
            </div>
        </div>

        <div className='sections pt-10'>
            <div className='grid md:grid-cols-2'>
                <img src={homeless} alt="" />
                <div className='mt-5'>
                    <h3 className='heading3  mb-5'>No more homeless, no more hunger!</h3>
                    <p>
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

        <div className='sections pt-10  my-5'>
            <div className='text-center md:w-1/2 grid gap-5 mb-5 mx-auto'>
                <h3 className='heading3'>Quick process of donation</h3>
                <p>
                    The quick donation process at the Rosemary Ibeji Care Foundation is designed for simplicity and efficiency. In just three steps, you can make an impact.
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
        <div className='sections py-20 '>
            <div className='grid md:grid-cols-2 gap-5'>
                <img src={volunteerDonation} alt="" />
                <div className='grid gap-5'>
                    <h3 className='text-[36px] md:text-[40px] font-semibold leading-[40px] md:leading-[60px] text-blacks-200'>Join us to help others</h3>
                    <p>
                        Support the Rosemary Ibeji Care Foundation in empowering widows and 
                        underpriviledged children. Your donations, time, or advocacy can make a lasting difference. 
                        Together, we can bring hope and change lives!
                    </p>
                   <a href="#donate"> <button className='button w-1/2' type='button'>Donate</button></a>
                </div>
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default Volunteer