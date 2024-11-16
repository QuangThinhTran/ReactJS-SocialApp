
import { useHistory } from 'react-router-dom';
// ...existing code...

const Navbar = ({ auth }) => {
  const history = useHistory();

  const handleProfile = (username: string) => {
    history.push(`/profile/${username}`);
  };

  return (
    // ...existing code...
    <a href="#" className="nav-link" onClick={() => auth.username && handleProfile(auth.username)}>
      {auth.username}
    </a>
    // ...existing code...
  );
};

export default Navbar;