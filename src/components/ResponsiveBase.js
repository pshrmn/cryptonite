import { Curious, CuriBase } from '@curi/react';

export default ({ router, render }) => (
  <Curious router={router} render={curiProps => (
    <CuriBase {...curiProps} render={render} />
  )}/>
);
