import { Category } from '@app-types';

const Categories: Category[] = [];

for (let i = 1; i < 10; i++) {
  Categories.push({ id: i, age: i, gender: 'FEMALE' });
}

export default Categories;
