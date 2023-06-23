import HomePage from "@/components/HomePage";
import AboutPage from "@/components/AboutPage";
import SlideUp from "@/components/Slideup";
import Project from "@/components/Project";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className='mx-auto mx-3xl sn:px-6 max-w-full'>
      <HomePage />
      <AboutPage />
      <SlideUp />
      <Project />
      <ContactForm />
      <Footer />
    </main>
  );
}
