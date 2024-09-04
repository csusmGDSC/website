"use client"

import * as React from "react"

/**
 * A hook to manage the state of a sidebar.
 *
 * @return {object} An object containing the current state of the sidebar and a function to update it.
 */
export function useSidebar() {
  const [state, setState] = React.useState<"closed" | "open">("open")

  return {
    open: state === "open",
    onOpenChange: (open: boolean) => setState(open ? "open" : "closed"),
  }
}
