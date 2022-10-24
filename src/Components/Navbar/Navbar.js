import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { auth } from "../firebase-config";
import { Nav } from "../Style/Nav.styled";
import { ThumbImage } from "../Style/Nav.styled";

const Navbar = () => {
  return (
    <Nav>
      <nav>
        <ul>
          <li>
            <a href="https://mail.google.com/mail/?authuser=0&ogbl">Gmail </a>
          </li>
          <li>
            <a href="https://www.google.com.ng/imghp?hl=en&authuser=0&ogbl">
              Images{" "}
            </a>
          </li>
          <li>
            <a href="https://www.google.com.ng/intl/en/about/products">
              {<BsFillGrid3X3GapFill />}
            </a>
          </li>
          <ThumbImage src={auth.currentUser?.photoUrl} alt="img"></ThumbImage>
        </ul>
      </nav>
    </Nav>
  );
};

export default Navbar;
