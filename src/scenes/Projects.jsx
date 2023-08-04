import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import projectImage from "../assets/crownclothing.png"; // Replace with your project image
import githubLogo from "../assets/icons8-github-48.png"; // Replace with your GitHub logo
import mediumLogo from "../assets/icons8-medium-48.png"; // Replace with your Medium logo
import projectImage1 from "../assets/iblog .png";
import projectImage2 from "../assets/neo.png";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
// ... (other imports)

const Project = ({ title, description, content, githubLink, mediumLink, imageSrc }) => {
    return (
      <motion.div variants={projectVariant} className="relative mt-8">
        <h3 className="text-xl font-semibold mb-4 ">{title}</h3>
        <div className="mb-4 max-w-[400px] max-h-[400px] border border-gray-300">
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        </div>
        <p className="text-sm text-red-500">{description}</p>
        <p className="text-sm text-red-500">{content}</p>
        <div className="mt-2 flex items-center">
          <span className="mr-2 text-gray-500">GitHub:</span>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
          </a>
          <span className="mx-2 text-gray-500">Medium:</span>
          <a href={mediumLink} target="_blank" rel="noopener noreferrer">
            <img src={mediumLogo} alt="Medium" className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    );
  };
  
  // ... (rest of the code)
  

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          I have worked on a variety of projects showcasing my skills in Computer Algorithms, Software Engineering, web development, and data analysis.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <Project
            title="Crown Clothing Application."
            description="Technological Stack : React || Google Firebase || HTML  CSS || MySQL."
            githubLink="https://github.com/AAkshayRajSingh/crwn-clothing-v2"
            mediumLink="https://63126dfac38f74079a439e42--effortless-macaron-0c86ac.netlify.app/"
            imageSrc={projectImage}
          />
          <Project
            title="iBlog-Blogging Website"
            description="Technological Stack: MySQL || Php (php my admin) || JavaScript || Bootstrap 4.0.0 || HTML || CSS || Google cloud || XAMPP || Github"
            githubLink="https://github.com/AAkshayRajSingh/iBlog"
            mediumLink="https://medium.com/@rajsinghakshay28/iblog-a-new-way-to-see-the-blog-posts-a-website-for-bloggers-d366891dd1f4?source=rss-------1"
            imageSrc={projectImage1}
          />
          <Project
            title="Nth level search BFS & Neo4j"
            description="Technological Stack: Neo4j Graph Databases || Python || C++ || Google Cloud (for compiling code in a Linux VM) || Jupiter notebook || Google Cloud"
            githubLink="https://github.com/AAkshayRajSingh/nthlevelfriend"
            mediumLink="https://medium.com/nuclei-technology-blog/social-networking-with-bfs-and-neo4j-ea52dc4ce198"
            imageSrc={projectImage2}
          />
        
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
