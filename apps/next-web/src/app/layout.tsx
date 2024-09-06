'use client';

import './global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ThemeRegistry from './providers/ThemeRegistry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
