import { Personnel } from '@app-types';

const Staffs: Personnel[] = [];

for (let i = 0; i < 2; i++) {
  Staffs.push({
    id: i,
    certificationNumber: `Cert-${i}`,
    firstName: `First - ${i}`,
    lastName: `Last - ${i}`,
    middleName: '',
    picture: `/images/image-${i}.jpg`,
    pictureFileName: `image-${i}.jpg`,
    sport: 'BASKETBALL',
    type: 'ASSISTANT_COACH',
  });
}

export { Staffs };
export default Staffs;
