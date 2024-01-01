export function registerEscapeHandler(outsideContainer: HTMLElement | null, cb: () => void) {
  if (!outsideContainer) return
  function click(this: HTMLElement, e: HTMLElementEventMap["click"]) {
    if (e.target !== this) return
    e.preventDefault()
    cb()
  }

  function esc(e: HTMLElementEventMap["keydown"]) {
    if (!e.key.startsWith("Esc")) return
    e.preventDefault()
    cb()
  }

  outsideContainer?.removeEventListener("click", click)
  outsideContainer?.addEventListener("click", click)
  document.removeEventListener("keydown", esc)
  document.addEventListener("keydown", esc)
}

export function removeAllChildren(node: HTMLElement) {
  while (node.firstChild) {
    node.removeChild(node.firstChild)
  }
}

export function renderExcalidrawLinks(theme: "dark" | "light") {
  let currentTheme = theme == "dark" ? "light" : "dark"
  Object.values(document.getElementsByTagName("img")).forEach(img => {
    if (img.src.endsWith(`.excalidraw.${currentTheme}.svg`)) {
      let srcParts = img.src.split(".")
      srcParts.splice(-2, 1, theme)
      img.src = srcParts.join(".")
    }
  })
}

// Have SVG images in the article adhere to the correct color scheme.
document.addEventListener("nav", (e) => {
  let theme = localStorage.getItem("theme")

  Object.values(document.getElementsByTagName("article")[0]
                        .getElementsByTagName("a")).forEach(a => {
    if (a.href.endsWith(".excalidraw")) {
      let img = document.createElement("img")
      img.src = `${a.href}.${theme}.svg`
      a.replaceWith(img)
    }
  })
})
