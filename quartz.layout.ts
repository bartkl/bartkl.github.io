import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.RenderExcalidraw()],
  footer: Component.Footer({
    links: {
      "LinkedIn": "https://nl.linkedin.com/in/bart-kleijngeld-3a387b146",
      "GitHub": "https://github.com/bartkl",
      "Goodreads": "https://www.goodreads.com/user/show/25204851-bart-kleijngeld",
      "MUBI": "https://mubi.com/en/users/6341306",
      // "Last.fm": "https://www.last.fm/user/bartkl",  // TODO: Fix such that no weird wrapping occurs on mobile.
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Backlinks(),
    Component.DesktopOnly(Component.Graph()),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
  ],
  afterBody: [
    Component.MobileOnly(Component.Graph()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
