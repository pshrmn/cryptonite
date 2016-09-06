import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Base(props) {
  return (
    <div id='app-base'>
      <Header />
      <main>
        { props.children }
      </main>
      <Footer />
    </div>
  );
}
