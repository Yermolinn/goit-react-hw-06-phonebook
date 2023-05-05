import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilter } from '../redux/index';
import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={css.label}>
      <span>Find contacts by name</span>
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={({ currentTarget: { value } }) => dispatch(setFilter(value))}
        value={filter}
      />
    </label>
  );
};
