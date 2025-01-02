import profilePhoto from '../assets/2024d.jpg';

function Header() {
  return (
    <header className="bg-primary text-white text-center py-5">
      <div className="container">
        <div>
          <img src={profilePhoto} alt="Asiri Pramodaya" className="profile-photo" />
        </div>
        <h1>Asiri Pramodaya</h1>
        <p>BSc (Hons) Computing and Information Systems Undergraduate</p>
      </div>
    </header>
  );
}

export default Header;
