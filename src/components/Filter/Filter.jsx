import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import css from './Filter.module.css'

export const Filter = ({ filter, filterInput }) => {
  const filterInputID = nanoid();
  return (
    <label className={css.label} htmlFor={filterInputID}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        id={filterInputID}
        onChange={filterInput}
      />
    </label>
  )
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterInput: PropTypes.func.isRequired,
};