"use client"

import { Theme } from "@twilio-paste/core/theme"

export const Contexts: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Theme.Provider theme={"twilio-dark"}>{children}</Theme.Provider>
}
