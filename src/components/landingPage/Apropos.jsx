import aboutImage from '../../assets/tech.png'; // Ton image à gauche

export default function Apropos() {
  return (
    <section  className="container py-5">
        <div className='col-10 m-auto' >
            <div className="row align-items-center">
                {/* Image à gauche */}
                <div className="col-md-6 text-center my-4 mb-md-0">
                    <img src={aboutImage} alt="À propos de nous" className="img-fluid" style={{ maxHeight: '350px' }} />
                </div>

                {/* Texte à droite */}
                <div className="col-md-6">
                <h2 className="section-title">A propos de Nous</h2>
                <p className="mb-4">
                    <strong>motemaHub</strong> est une plateforme numérique qui connecte les passionnés de technologie, les professionnels du numérique et les apprenants en quête de compétences. Elle permet à toute personne…
                </p>

                {/* Boutons */}
                <div className="d-flex gap-3 flex-wrap">
                    <button style={{background:'#3d6285'}} className="btn border-0 btn-primary rounded-pill px-4 ">Nous Rejoindre</button>
                    <button className="btn btn-outline-dark rounded-pill px-4 ">Rechercher</button>
                </div>
                </div>
            </div>
      </div>
    </section>
  );
}
