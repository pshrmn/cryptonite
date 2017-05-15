import CryptoIntro from 'components/lessons/CryptoIntro';
import ModularArithmetic from 'components/lessons/ModularArithmetic';
import SubstitutionCiphers from 'components/lessons/SubstitutionCiphers';
import ShiftCipher from 'components/lessons/ShiftCipher';
import Vigenere from 'components/lessons/Vigenere';
import BasicAttacks from 'components/lessons/BasicAttacks';
import AffineCipher from 'components/lessons/AffineCipher';


const lessons = [
  {
    slug: 'crypto-intro',
    component: CryptoIntro,
    title: 'Introduction to Cryptography'
  },
  {
    slug: 'modular-arithmetic',
    component: ModularArithmetic,
    title: 'Modular Arithmetic'
  },
  {
    slug: 'substitution-ciphers',
    component: SubstitutionCiphers,
    title: 'Substitution Ciphers'
  },
  {
    slug: 'shift-ciphers',
    component: ShiftCipher,
    title: 'Shift Cipher'
  },
  {
    slug: 'vigenere-cipher',
    component: Vigenere,
    title: 'Vigenère Cipher'
  },
  {
    slug: 'basic-attacks',
    component: BasicAttacks,
    title: 'Basic Attacks'
  },
  {
    slug: 'affine-cipher',
    component: AffineCipher,
    title: 'Affine Cipher'
  }
];

export default lessons;
