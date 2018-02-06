import React from 'react';
import { Link } from '@curi/react';

import LogoutLink from 'components/auth/LogoutLink';

const BaseProfile = () => (
  <ul>
    <li>
      <LogoutLink />
    </li>
    <li>
      <Link to='Change Password'>Change Password</Link>
    </li>
  </ul>
);

export default BaseProfile;
