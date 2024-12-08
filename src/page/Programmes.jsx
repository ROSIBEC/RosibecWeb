import { useEffect } from 'react'
import { Blog } from '../constant/data'
// import {Blogs} from '../components/Blogs'
import financial from '../assets/financial.svg'
import project1 from '../assets/projectDone1.svg'
import project2 from '../assets/projectDone2.svg'
import project3 from '../assets/projectDone3.svg'
import renovate from '../assets/programRenovating.svg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Programmes = () => {
    useEffect(()=>{
        window.scrollTo(0,0);

    },[]);
  return (
    <section className='mt-5'>
        <div>
            <div className='md:px w-full h-full '>
                <div className='relative bg-programHeader     rounded-[16px] bg-cover bg-no-repeat flex flex-col items-center md:text-center justify-center px-5  md:px-20 min-h-[380px] md:h-[470px]'>
                    <div className='overlay'></div>
                       <div className='md:w-9/12 px-2 z-10'>
                            <h2 className='bgHeaderText'>Programmes & Initaitives </h2>
                            <p className='text-whites-200 mb-10'>We empower widows and underprivileged children by addressing thier needs through economic empowerment, healthcare assistance, and education support. Each inititative equips individuals 
                                with the resources and tools needed to foster self sufficiency.
                            </p>
                            <Link to="/donate" className='py-4 text-whites-100 rounded-[10px] bg-purples-200 px-8 '><button type="button">Donate</button></Link>
                       </div>
                    
                </div>
            </div>
            <div className='bg-whites-200 mt-5 md:mt-10 py-5 md:py-20'>
                <div className='px'>
                    <h3 className='heading3 mb-10'>Building financial independence</h3>
                    <div className='flex max-sm:flex-col gap-10'>
                        <img src={financial} alt=""  className='md:h-[520px]  rounded-[20px]'/>
                        <div className='grid gap-5 pt-2'>
                            <p>
                                At the Rosemary Ibeji Foundation, we are committed to creating sustainable solutions for economic empowerment.
                                Our ongoing project focuses on empowering petty traders, many of whom are widows and underprivileged individuals, by
                                providing them with the financial tools and support they need to grow their businesses.
                            </p>
                            <p>
                                Through small loans, business training and mentorship programs, we are equipping traders with the skills and resources to expand
                                their operations, increase their income, and support their families. This initiative not only uplifts individuals but also fosters growth in local communities by encouraging entrepreneurship and ecomomic stability.
                            </p>
                            <p>
                                By helping petty traders build financial indepence, we are working to break the cycle of poverty and create lasting change. Together, with the support of donors and partners, we are making self-reliance 
                                and  brighter futures a reality for those who need it most.
                            </p>
                            <Link to='/donate' className='w-full'><button type="button" className='button md:w-1/2'>Donate</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px mb-10 min-h-screen md:min-h-[400px] md:py-10  flex max-sm:flex-col gap-10 mt-5 md:mt-10'>
                {/* <img src={renovate} alt="" className='rounded-[20px] '  className=' hidden md:flex'/> */}
                <div className=''>
                    <h3 className='heading4 text-center'>Projects done</h3>
                    <div className='grid md:grid-cols-3 gap-5 mt-10'>
                        <div>
                            <img src={project3} alt="" className='rounded-[20px] ' />
                            <h4 className='heading4 mb-2'>Education for all</h4>
                            <p>
                                Sending Children Back to School <br />The Rosemary Ibeji Foundation is dedicated to giving underprivileged children a chance to a brighter future. Through our Send Back to School project, we provide school fees, 
                                supplies, and mentorship, ensuring children stay in school and unlock their full potential.
                            </p>
                        </div>
                        <div>
                            <img src={project2} alt="" className='rounded-[20px] ' />
                            <h4 className='heading4 mb-2'>Feeding the hungry</h4>
                            <p>
                                No one should have to face hunger. Our feeding program provides nutritious meals to underprivileged families, ensuring they have the sustenace needed to thrive. 
                                Together, we are tackling hunger one meal at a time.
                            </p>
                        </div>
                        <div>
                            <img src={project1} alt="" className='rounded-[20px] ' />
                            <h4 className='heading4 mb-2'>Helping widows rebuild</h4>
                            <p>
                                We support widows with financial aid, skills training, and emotional support to help them rebuild their lives. Our 
                                goal is to empower them to achieve independence and provide for their families with dignity.
                            </p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
            

            <div className=' md:px py-10 md:py-20 md:mt-10 md:min-h-[470px]'>
                
                <div className='relative bg-programJoin rounded-[16px] bg-cover bg-no-repeat h-[300px] md:h-[500px] flex flex-col items-center justify-center  px-2 md:px-20'>
                <div className='overlay'></div>
                    <div className='md:w-9/12 px-2 z-50'>
                        <h3 className='bgHeaderText'>Join the cause</h3>
                        <p className='text-whites-200 w-10/12 md:text-[32px]'>Make a difference today! Your time and skills can bring hope and transform communities. 
                            Join us in empowering others and creating lasting change!
                        </p>
                        <div className=' gap-2 mt-10 md:gap-10 mx-auto  flex max-sm:  '>
                            <a href='/volunteer'><button type="button" className='py-3 text-whites-100 rounded-[10px] bg-purples-200 px-2 '>Volunteer</button></a>
                            <button type="button" className='py-3 text-whites-100 rounded-[10px] bg-purples-200 px-3 '>Partner</button>
                            <Link to='/donate' className='w-full'><button type="button" className='py-3 text-whites-100 rounded-[10px] bg-purples-200 px-3'>Donate</button></Link>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>

    </section>
  )
}

export default Programmes