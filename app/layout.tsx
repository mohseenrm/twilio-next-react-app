import type { Metadata } from "next"
import { Contexts } from "@/app/contexts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Create Twilio App",
  description: "Twilio app description",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Contexts>{children}</Contexts>
      </body>
    </html>
  )
}
