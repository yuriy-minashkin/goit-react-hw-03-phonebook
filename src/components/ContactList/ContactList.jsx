import PropTypes from 'prop-types';
import css from './ContactList.module.css'

export const ContactList = ({ contacts, contactDelHandler }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p>
            <span>{name}:</span> {number}
          </p>
          <button className={css.button} onClick={() => contactDelHandler(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }).isRequired
  ) ,
  contactDelHandler: PropTypes.func.isRequired,
};