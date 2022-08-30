import "./AboutSkills.css"
import { FaPython, FaReact, FaGit, FaJs, FaHtml5, FaCss3Alt, FaRProject, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";

const AboutSkills = () => {
    
    return (
        <div className="skill__icons">
            <div className="skill__item">
                <FaJs />
                <p>Javascript</p>
            </div>
            <div className="skill__item">
                <FaHtml5 />
                <p>HTML5</p>
            </div>
            <div className="skill__item">
                <FaCss3Alt />
                <p>CSS3</p>
            </div>
            <div className="skill__item">
                <FaPython />
                <p>Python</p>
            </div>
            <div className="skill__item">
                <FaRProject />
                <p>R</p>
            </div>
            <div className="skill__item">
                <SiSolidity />
                <p>Solidity</p>
            </div>
            <div className="skill__item">
                <FaReact />
                <p>ReactJS</p>
            </div>
            <div className="skill__item">
                <FaBootstrap />
                <p>Bootstrap</p>
            </div>
            <div className="skill__item">
                <FaGit />
                <p>Git</p>
            </div>
            <div className="skill__item">
                <FaNodeJs />
                <p>NodeJS</p>
            </div>
        </div>
    )
}

export default AboutSkills;