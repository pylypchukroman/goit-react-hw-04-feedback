import PropTypes from "prop-types";
import style from "./Section.module.css";

const Section = ({ title, children }) => (
  <div className={style.Section}>
    <h2>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
