import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
           
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="mt-5 bg-blue-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-red-500">
            Software Engineer Intern👨‍💻🌟
          </h3>
          <p className="text-sm text-red mb-2">
            NCR Corporation Ltd., Hyderabad, India<br />
            <span className="text-red-300">Feb 2020 – Aug 2021</span>
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Demonstrated exceptional defect resolution skills during the NCR R10 systems internship. Recognized as a top intern for remarkable talents and competencies.
          </p>
        </div>
        
        <div className="mt-5 bg-blue-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-red-500">
            Professional Service Engineer🛠️🚀
          </h3>
          <p className="text-sm text-red mb-2">
            NCR Corporation Ltd., Hyderabad, India<br />
            <span className="text-red-300">Aug 2021 – Jul 2022</span>
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Software Development Engineer  for NCR's R10 Product, utilizing C++ and React framework. Resolved bugs in NCR retail environments and developed a data migration tool for Coles POS machines.
          </p>
        </div>
        
        <div className="mt-5 bg-blue-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-red-500">
            Teaching Assistant👨‍🏫📚
          </h3>
          <p className="text-sm text-red mb-2">
            University of North Texas, Texas, United States<br />
            <span className="text-red-300">Feb 2023 – Present</span>
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Provided valuable support and guidance to students in computer science courses including "Computer Algorithms" (CSCE 4110), "Introduction to Big Data and Data Science" (CSCE 5300), and "Methods in Empirical Analysis" (CSCE 5310).
          </p>
        </div>
        
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              Techskills
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="mt-5 bg-red-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-white">
            Languages and Frameworks🚀
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            C++ || Java || ReactJS || C || SQL || DBMS || Hadoop || Spark || Neo4j || Tailwind CSS || React hooks || Framer-motion ||
          </p>
        </div>
    
        <div className="mt-5 bg-red-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-white">
            Tools🛠️
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            VS Code || Eclipse || Postman || Git || XAMPP ||
          </p>
        </div>
        <div className="mt-5 bg-red-700 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-white">
            Other🌐
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            MySQL || Windows || Linux || Google Cloud ||
          </p>
        </div>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Leadership
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="mt-5 bg-blue-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-red-500">
            College of Engineering, Mentor, UNT
          </h3>
          <p className="text-sm text-red mb-2">
            University of North Texas, Texas, United States<br />
            <span className="text-red-300">August 2022 – Present</span>
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Actively mentor students at the College of Engineering, fostering their growth and development through guidance and support.
          </p>
        </div>
        
        <div className="mt-5 bg-blue-900 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 text-red-500">
            Active board member, Indian Students Association, UNT
          </h3>
          <p className="text-sm text-red mb-2">
            University of North Texas, Texas, United States<br />
            <span className="text-red-300">December 2022 – Present</span>
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Engage as a proactive board member in the Indian Students Association at UNT, contributing to organizing events and activities for the community.
          </p>
        </div>
        
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;