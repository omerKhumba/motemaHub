import '../../assets/tech.css';
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaPython } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';

export default function Technologies() {
  const technologies = [
    { icon: <FaReact size={30} />, className: 'icon1', color: '#61DAFB', name: 'React' },
    { icon: <FaNodeJs size={30} />, className: 'icon2', color: '#3C873A', name: 'Node.js' },
    { icon: <FaGithub size={30} />, className: 'icon3', color: '#000', name: 'GitHub' },
    { icon: <FaHtml5 size={30} />, className: 'icon4', color: '#E34F26', name: 'HTML5' },
    { icon: <FaCss3Alt size={30} />, className: 'icon5', color: '#1572B6', name: 'CSS3' },
    { icon: <FaJs size={30} />, className: 'icon6', color: '#F7DF1E', name: 'JavaScript' },
    { icon: <SiFirebase size={30} />, className: 'icon7', color: '#FFA000', name: 'Firebase' },
    { icon: <FaDatabase size={30} />, className: 'icon8', color: '#4DB33D', name: 'Database' },
    { icon: <FaPython size={30} />, className: 'icon9', color: '#306998', name: 'Python' }
  ];

  return (
    <section className="tech-section">
      <div className="container">
        <h2 className="section-title">Les technologies que nous utilisons</h2>

        <div className="tech-orbit">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className={`tech-icon orbit-icon icon${index + 1}`}
              style={{ color: tech.color }}
            >
              {tech.icon}
              <span className="tech-tooltip">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
