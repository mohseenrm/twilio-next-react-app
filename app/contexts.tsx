"use client"
import { useEffect, useState } from "react"
import { Theme } from "@twilio-paste/core/theme"
import type { Theme as AppTheme } from "@/app/components/ThemeToggle"

export const Contexts: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const currTheme =
    (typeof document === "object" &&
      (document
        .querySelector("html")
        ?.getAttribute("data-theme") as AppTheme)) ||
    "twilio"
  const [theme, setTheme] = useState<AppTheme>(currTheme)

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          const theme = document
            .querySelector("html")
            ?.getAttribute("data-theme") as AppTheme
          setTheme(theme)
        }
      })
    })
    observer.observe(document.querySelector("html") as Node, {
      attributes: true,
      attributeFilter: ["data-theme"],
    })

    return () => observer.disconnect()
  }, [])

  return <Theme.Provider theme={theme}>{children}</Theme.Provider>
}
