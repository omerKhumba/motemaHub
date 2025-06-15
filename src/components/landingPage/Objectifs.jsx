import { FaLightbulb, FaUsers, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';

export default function Objectifs() {
  const objectifs = [
    {
      icon: <FaLightbulb size={30} color="#3c6088" />,
      texte: "Offrir un espace de visibilité aux talents du numérique.",
    },
    {
      icon: <FaGraduationCap size={30} color="#3c6088" />,
      texte: "Permettre l'accès à des formations de qualité",
    },
    {
      icon: <FaUsers size={30} color="#3c6088" />,
      texte: "Créer un réseau de prestataires fiables pour les entreprises et particuliers",
    },
    {
      icon: <FaLaptopCode size={30} color="#3c6088" />,
      texte: "Encourager l'autonomisation par la prestation de services en ligne.",
    },
  ];

  return (
    <section className="container py-5">
        <div className='col-lg-10 m-auto' >
            <h2 className="section-title">Nos Objectifs</h2>
            <div className="row">
                {objectifs.map((obj, index) => (
                <div className="col-md-6 d-flex align-items-start mb-4" key={index}>
                    <div className="me-3">{obj.icon}</div>
                    <p className="m-0">{obj.texte}</p>
                </div>
                ))}
            </div>
        </div>
    </section>
  );
}
