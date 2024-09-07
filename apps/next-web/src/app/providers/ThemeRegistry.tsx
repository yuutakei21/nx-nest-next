'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import getSignInTheme from './theme/getSignInTheme';

export default function ThemeRegistry({ children }: any) {
  const [loaded, setLoaded] = useState(false);

  const [mode, setMode] = useState<any>('light');
  const defaultTheme = createTheme({ palette: { mode } });
  const SignInTheme = createTheme(getSignInTheme(mode));

  useEffect(() => {
    if (document) setLoaded(true);
  }, []);

  return (
    <>
      {loaded && (
        <AppRouterCacheProvider options={{ key: 'mui' }}>
          <ThemeProvider theme={SignInTheme}>
            <CssBaseline enableColorScheme/>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      )}
    </>
  );
}
