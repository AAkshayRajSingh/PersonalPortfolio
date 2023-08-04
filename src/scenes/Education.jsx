import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";


const Education = () => {
  return (
    <section id="education" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          EDUCATION
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's My Educational Background I have studied until my Bachelors in my home country Iam currently pursuing masters here in united states.
        </p>
      </motion.div>

      {/* EDUCATION */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-education1"
          style={{ backgroundImage: 'url("../assets/unt.jpeg")' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Masters, Computer Science Engineering
            <br /> Graduating Dec 2023
            <br /> University of North Texas, Denton, TX
            <br /> 4.0 GPA
            <br /> College of Engineering
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-education2"
          style={{ backgroundImage: 'url("path_to_your_image_for_college2.jpg")' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Bachelors, Electronics and Communication’s Computer Science Engineering
            <br /> Keshav Memorial Institute of Technology, India
          </p>
        </motion.div>

        {/* Add more education sections as needed */}
        
      </div>
    </section>
  );
};

export default Education;