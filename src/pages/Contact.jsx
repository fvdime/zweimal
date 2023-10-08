import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="">
      <section className="h-full">
        <Navbar/>
        <div className="container h-full px-16 py-2">
          <div className="flex h-full flex-wrap items-center justify-center lg:justify-between ">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img src="/tatt.jpg" className="w-full rounded-lg" alt="" />
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
