import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { LogInView } from 'src/sections/login/login-view';

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Posts - ${CONFIG.appName}`}</title>
      </Helmet>

      <LogInView />
    </>
  );
}
