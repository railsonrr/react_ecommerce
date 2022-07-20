import { CategoryItem } from '../CategoryItem';
import './style.styles.scss';

export const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(({ id, title, imageUrl }) => (
        <CategoryItem key={id} category={{title, imageUrl}} />
      ))}
    </div>
  )
}
