export const metadata = {
  title: 'Logout Page',
  description: 'AblePort Logout Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
