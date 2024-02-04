import type { Metadata } from "next"
import { Contexts } from "@/app/contexts"
import ThemeToggle from "@/app/components/ThemeToggle"
import { cookies } from "next/headers"
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
  const cookieStore = cookies()
  const theme = cookieStore.get("theme")
  return (
    <html lang="en">
      <body>
        <ThemeToggle initialValue={theme?.value as "twilio" | "twilio-dark"} />
        <Contexts>{children}</Contexts>
      </body>
    </html>
  )
}
