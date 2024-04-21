import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const explorerComponent = 
  Component.DesktopOnly(Component.Explorer({
    title: "Explorer",
    filterFn: node => node.file,  // Show only files
    //filterFn: (node) => !["Attachments", "Excalidraw", "tags"].includes(node.name),
    sortFn: (a: FileNode, b: FileNode) => {
      if (!a.file && !b.file) {
        return a.displayName.localeCompare(b.displayName);
      }
      if (a.file && b.file) {
        return a.file.dates.created < b.file.dates.created ? 1 : -1;
      }
      if (a.file && !b.file) {
        return 1
      }
      else {
        return -1
      }
    },
    folderDefaultState: "open",
    // mapFn: (node) => node.displayName = node.file ? `<strong>${node.file.dates.created.toISOString().split('T')[0]}</strong> - ${node.displayName}` : node.displayName,
  }))

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
  afterBody: [
    Component.RecentNotes({
      filter: (node) => !["Presentations", "index", "Music", "Blogs", "Notes", "Books"].includes(node.slug),
      limit: 15
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    explorerComponent,
    //Component.RecentNotes({
    //  title: "Recent Activity",
    //  limit: 3,
    //  linkToMore: "/" as SimpleSlug,
    //}),
  ],
  right: [
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.Graph({ showTags: false }),
  ]
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    explorerComponent,
  ],
  right: [],
}
