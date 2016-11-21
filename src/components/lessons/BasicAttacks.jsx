import React from 'react';

import Lesson from './LessonBase';

const title = 'Basic Attacks';

export default () => (
  <Lesson title={title}>
    <section>
      <h2>Why</h2>
      <p>
        So far, all of the lessons have focused on the people that are supposed
        to be able to encrypt and decrypt a message. Encryption and decryption
        is made necessary because there are other people who can access a message
        and are interested in what it says.
      </p>
      <p>
        How does a person attempt to decrypt an encrypted message? While to the
        untrained eye an encrypted message looks like nonsense, it actually can
        reveal a lot of information.
      </p>
      <p>
        Two of the biggest sources of information and the length of words and
        the frequency of characters that appear in a message.
      </p>
    </section>
    <section>
      <h2>Word Length</h2>
      <p>
        Imagine you are given the following message to decrypt:
      </p>
      <code>
        Q VMML BW AMM GWC
      </code>
      <p>
        The first thing that should stand out is that one of the encrypted words
        is a single character. Assuming that the plain text message is in English,
        that leaves two possibilities, "I" and "A". If you also know that the
        message is encrypted using a shift cipher, you just need to attempt to
        decrypt the message using the shift amount for "I to Q" and "A to Q".
      </p>
      <p>
        Shift ciphers are particularly weak since there are only a limited number
        of shift amounts, so they can easily be brute forced. Even with a more
        secure cipher, this would give an attacker a point to exploit.
      </p>
      <p>
        For example, with a substitution cipher, once you know that one character
        should be replaced with another character, you can replace every instance
        of it in the encrypted message.
      </p>
      <p>
        Long words and short words are both vulnerable to word length attacks
        because there are fewer possible words with those lengths. To help prevent
        an attacker from using this to decrypt your message, one good idea is to
        use the same word length throughout the message. For example, every "word"
        might be shown as four letters.
      </p>
      <code>
        QVMM LBWA MMGW C
      </code>
      <p>
        Additional letters can be appended to the final word to make it appear to
        be a full word. This can provide more security because it does not reveal
        the total character count of the real message.
      </p>
      <code>
        QVMM LBWA MMGW CXYZ
      </code>
      <p>
        Making all words the same length makes it so that the attacker can't
        easily guess that the first word in the message is either "A" or "I".
      </p>
      <p>
        The person that knows how to decrypt the message will receive it as:
      </p>
      <code>
        INEE DTOS EEYO U
      </code>
      <p>
        While that message doesn't appear to be in English, it should be simple
        for the decrypter to figure out the correct word length and read the
        intended message.
      </p>
    </section>
    <section>
      <h2>Character Frequency</h2>
      <p>
        Once an encrypter has wised up to making all "words" the same length, the
        encrypted message is still vulnerable to attack. The frequency of letters
        in a given language is not the same for each letter. In English, the
        letters "E", "A", and "T" appear far more frequently than "Q", "X", and "Z".
      </p>
      <p>
        By counting the number of times that each character appears in an encrypted
        message, an attacked can compare those values to their frequency in the
        language to make educated guesses on what they might be.
      </p>
      <p>
        How do you determine the frequency of letters in an alphabet? A simple
        example would be to use every word in a dictionary. This however is not
        an optimal strategy. Common words like "the" and "and" only appear once
        each in the dictionary. Instead, it would be more accurate to count the
        frequency of each character in a book or in a number of articles. The more
        words that are analyzed, the more accurate that the word frequency analysis
        should be.
      </p>
      <p>
        One thing to remember when finding a source to count letter frequency is
        that word choice changes over time. This can lead to subtle differences
        in character frequency. Using the character frequency from a Charles
        Dickens novel will not provide the same character frequency as a Stephen
        King novel. If you want to attack a message encrypted in the 1800s,
        the Dickens novel will more accurately represent the character frequency,
        but the King frequency would provide a more accurate result for modern
        encrypted messages.
      </p>
      <p>
        <a href="https://en.wikipedia.org/wiki/Letter_frequency#Relative_frequencies_of_letters_in_the_English_language">Wikipedia</a>
        {' '}has a good English language reference table of letter frequency.
      </p>
      <p>
        Unlike with word length attacks, there isn't a simple solution to disguise
        the frequency of a character. More complicated ciphers can do a better job
        at making character frequency harder to determine. For example, when using
        a Vigenère cipher, character frequency has to be counted based on position.
        This means that only characters in the same modulo position (based on the
        length of the cipher's keyword) can be taken into account with respect
        to each other. If the attacker does not know the length of the cipher key,
        then they do not know (with certainty) how to count the letter frequency.
      </p>
    </section>
  </Lesson>
)