import Header from "./header";
import Hero from "./hero";
import Info from "./info";
import Services from "./services";
import Sponsor from "./sponsor";
import Testimonial from "./testimonial";

function Hello() {
  return (
    <>
    <div className="w-[100%]">
      <section className="h-[100vh] mb-[150px]">
        <Header />
        <Hero />
      </section>
      <section className="mb-[150px]">
        <Services />
      </section>
      <section>
        <Info />
      </section>
      <section className="mb-[100px]">
        <Sponsor />
      </section>
      <section>
        <Testimonial />
      </section>
    </div>
    </>
  )
}

export default Hello;