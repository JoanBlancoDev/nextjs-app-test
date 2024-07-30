import { montserrat } from './ui/fonts';
import './ui/global.css' // Import global styles located in UI folder
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ `${montserrat.className} antialiased` }>
      {children}
      <footer className='py-10 flex justify-center items-center'>Hecho por amor por la gente de vercel</footer>
      </body>
    </html>
  );
}
