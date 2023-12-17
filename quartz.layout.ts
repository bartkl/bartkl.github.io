import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  footer: Component.Footer({
    links: {
      "👨‍💼": "https://nl.linkedin.com/in/bart-kleijngeld-3a387b146",
      "🎵": "https://www.last.fm/user/bartkl",
      "📖": "https://www.goodreads.com/user/show/25204851-bart-kleijngeld",
      "🎬": "https://mubi.com/en/users/6341306",
      "👨‍💻": "https://github.com/bartkl",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // Component.RecentNotes({ title: "Recent", limit: 10 }),
    Component.DesktopOnly(Component.Explorer({
      title: "/",
      filterFn: (node) => node.name !== "Excalidraw" && node.name !== "tags",
      folderDefaultState: "open",
    }))
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ]
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
