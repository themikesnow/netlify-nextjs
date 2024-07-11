import { Division } from '@app-types';

const Divisions: Division[] = [];

for (let i = 1; i < 10; i++) {
  Divisions.push({ id: i, name: `Name ${i}` });
}

export default Divisions;
