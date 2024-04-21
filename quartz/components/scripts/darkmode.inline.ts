import { getUserPreferredColorScheme, renderExcalidrawLinks } from "./util"

const currentTheme = localStorage.getItem("theme") ?? getUserPreferredColorScheme()
document.documentElement.setAttribute("saved-theme", currentTheme)

const emitThemeChangeEvent = (theme: "light" | "dark") => {
  const event: CustomEventMap["themechange"] = new CustomEvent("themechange", {
    detail: { theme },
  })
  document.dispatchEvent(event)
}

document.addEventListener("nav", () => {
  const switchTheme = (e: any) => {
    if (e.target.checked) {
      document.documentElement.setAttribute("saved-theme", "dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.setAttribute("saved-theme", "light")
      localStorage.setItem("theme", "light")
    }
    renderExcalidrawLinks(localStorage.getItem("theme"))
  }

  // Darkmode toggle
  const toggleSwitch = document.querySelector("#darkmode-toggle") as HTMLInputElement
  toggleSwitch.addEventListener("change", switchTheme)
  window.addCleanup(() => toggleSwitch.removeEventListener("change", switchTheme))
  if (currentTheme === "dark") {
    toggleSwitch.checked = true
  }

  // Listen for changes in prefers-color-scheme
  const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
  colorSchemeMediaQuery.addEventListener("themechange", switchTheme)
  window.addCleanup(() => colorSchemeMediaQuery.removeEventListener("change", switchTheme))
})
