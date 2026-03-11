import './globals.css'

export const metadata = {
  title: 'Dandela Academy — Centre de formation professionnelle',
  description: 'Dandela Academy — Centre de formation professionnelle certifié INEFOP. Formations en informatique de base, Word, Excel, PowerPoint et service client. Cybercafé, cafétéria et salles équipées.',
  keywords: 'dandela academy, formation professionnelle, informatique, bureautique, angola, INEFOP',
  openGraph: {
    title: 'Dandela Academy — Centre de formation professionnelle',
    description: 'Apprenez, progressez et préparez votre avenir avec Dandela Academy.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
