import CryptoIntro from './CryptoIntro';
import ModularArithmetic from './ModularArithmetic';
import SubstitutionCiphers from './SubstitutionCiphers';
import ShiftCipher from './ShiftCipher';
import Vigenere from './Vigenere';
import BasicAttacks from './BasicAttacks';
import AffineCipher from './AffineCipher';


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
