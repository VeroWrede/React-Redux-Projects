import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/chapterOne" activeClassName="active">Chapter One</Link>
      {" | "}
      <Link to="/chapterTwo" activeClassName="active">Chapter Two</Link>
      {" | "}
      <Link to="/chapterThree" activeClassName="active">Chapter Three</Link>
      {" | "}
      <Link to="/chapterFour" activeClassName="active">Chapter Four</Link>
      {" | "}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
