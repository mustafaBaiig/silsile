import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Silsile - Clothing Store',
  description: 'Shop the latest trends with Silsile.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
