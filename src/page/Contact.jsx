import Contacts from "../components/Contacting"
import Footer from "../components/Footer";

 const Contact = () => {
  return (
    <section className="sections">
        <div className="relative md:my-10 max-sm:mb-5 rounded-[16px]  bg-contactHeader h-[200px] md:h-[470px] flex items-center justify-center bg-cover bg-center bg-no-repeat">
          <div className="overlay"></div>
            <h2 className="bgHeaderText z-10">Contact Us</h2>
          
        </div>
        <Contacts/>
        <Footer/>
    </section>
  )
}

export default Contact;
