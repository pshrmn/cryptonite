import React from 'react';

import Lesson from './LessonBase';

const title = 'Modular Arithmetic';

export default () => (
  <Lesson title={title}>
    <section>
      <h2>Basics</h2>
      <p>
        While encrypted and decrypted message's characters are typically letters,
        math is the heart of cryptography, so numbers reign supreme. Modular
        arithmetic is a core mathematical system to cryptography.
      </p>
      <p>
        If you remember when you first learned division, instead of figuring out
        decimal places, you computed the quotient and left a remainder. For example,
        25 divided by 4 is 6.25, but it can also be expressed as 6 remainder 1.
        Modular arithmetic is essentially division that only cares for the remainder,
        ignoring the quotient. Therefore, <code>25 modulo 4 = 1</code> because
        {' '}<code>25 ÷ 4</code> has a remainder
        of 1.
      </p>
      <code>
        25 ÷ 4 = 6.25 = 6 remainder 1
      </code>
      <p>
        Note that it is common to express modulo using the word "mod" or the
        symbol "%". I.e., <code>24 mod 4 = 0</code> and <code>25 % 4 = 1</code>.
      </p>
      <code>
        25 % 4 = 1
      </code>
    </section>
    <section>
      <h2>The Modulo Cycle</h2>
      <p>
        Now, lets take a look at a series of numbers modulo 4.
      </p>
      <ul>
        <li>24 ÷ 4 = 6 remainder 0, so 24 mod 4 = 0</li>
        <li>25 ÷ 4 = 6 remainder 1, so 25 mod 4 = 1</li>
        <li>26 ÷ 4 = 6 remainder 2, so 26 mod 4 = 2</li>
        <li>27 ÷ 4 = 6 remainder 3, so 27 mod 4 = 3</li>
        <li>28 ÷ 4 = 7 remainder 0, so 28 mod 4 = 0</li>
        <li>29 ÷ 4 = 7 remainder 1, so 29 mod 4 = 1</li>
      </ul>
      <p>
        Looking at the modulo values, you can see that they have the cycle 0,
        1, 2, 3, 0, 1, ... Each successive number in the cycle is one larger than
        its predecessor, except when the successive number should be our modulo
        number (in this case 4). In that situation, our cycle loops back to 0
        instead. Why is that? Because 4 ÷ 4 = 0 remainder 0, which means that when
        computing values modulo 4, 4=0. This is true for all modulo numbers.
      </p>
    </section>
    <section>
      <h2>Subtract and Conquer</h2>
      <p>
        Division is essentially determining how many times a number (the divisor)
        fits into another number (the dividend). The number of times it fits is
        called the quotient. A simplified way to do this is
        to start by subtracting the divisor from the dividend to get a result. If
        the result is less than 0, then we know that the divisor does not fit into
        the dividend. If the result is greater than or equal to 0 and less than the
        divisor, the divisor fits once and the result is the remainder. If the result
        is greater than or equal to the divisor, then we continue by subtracting the
        divisor from the result to get a new result. This process continues until
        we get a result where 0 ≤ result {'<'} divisor. The number of times that
        we subtracted the divisor is the quotient and the final result is the
        remainder.
      </p>
      <p>
        We can do this same subtraction process to perform modular arithmetic.
        Of course, in modular arithmetic, we don't care about the quotient, only
        the remainder.
      </p>
      <code>
        25 mod 4 = 25 - 4 = 21 - 4 = 17 - 4 = 13 - 4 = 9 - 4 = 5 - 4 = 1
      </code>
    </section>
    <section>
      <h2>Getting Negative</h2>
      <p>
        For negative numbers, the reverse applies. We would keep adding the modulo
        number until we are greater than or equal to 0 (and less than the modulo
        number).
      </p>
      <code>
        -25 mod 4 = -25 + 4 = -21 + 4 = -17 + 4 = -13 + 4 = -9 + 4 = -5 + 4 = -1 + 4 = 3
      </code>
    </section>
    <section>
      <h2>7 equals 2?</h2>
      <p>
        One last point to make is that two numbers are congruent when each, modulo
        the same number, has the same result. Being congruent essentially means
        that two numbers are equal in the cycle of numbers created by a modulo
        number, while not literally being equal.
      </p>
      <p>
        <code>2 % 5 = 2</code> and <code>7 % 5 = 2</code>, therefore 2 is
        congruent to 7 when each is modulo 5.
      </p>
    </section>
  </Lesson>
);