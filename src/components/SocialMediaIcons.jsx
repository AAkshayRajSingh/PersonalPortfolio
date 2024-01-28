import img from "../assets/icons8-github-48.png";
import linkedinIMG from "../assets/icons8-linkedin-48.png";
import imgMedium from"../assets/icons8-medium-48.png";
import imgGmail from "../assets/icons8-gmail-48.png";
import imgX from "../assets/icons8-twitterx-48.png"
import imgCode from "../assets/icons8-source-code-48.png"
const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/akshay-raj-singh-anguwala-6966021a7/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src={linkedinIMG} />
        </a>
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/AAkshayRajSingh"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={img} />
      </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://medium.com/@rajsinghakshay28"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="medium-link" src={imgMedium} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="mailto:rajsinghakshay28@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="Gmail-link" src={imgGmail} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://leetcode.com/rajsinghakshay28/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="leetcode-link" src={imgCode} />
        </a>
        <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/raj16012000"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={imgX} />
      </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;

  