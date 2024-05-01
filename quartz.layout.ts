import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const explorerComponent = 
  Component.Explorer({
    title: "Explorer",
    //filterFn: node => node.file,  // Show only files
    folderClickBehavior: "link",
    filterFn: (node) => !["Attachments", "Excalidraw", "tags", "index.md"].includes(node.name),
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
    folderDefaultState: "collapsed",
    // mapFn: (node) => node.displayName = node.file ? `<strong>${node.file.dates.created.toISOString().split('T')[0]}</strong> - ${node.displayName}` : node.displayName,
  })

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
  // afterBody: [
  //   Component.RecentNotes({
  //     filter: (node) => !["Presentations", "index", "Music", "Articles", "Notes", "Books"].includes(node.slug),
  //     limit: 15
  //   }),
  // ],
  afterBody: [
    Component.RecentNotes({
      title: "Notes",
      filter: (f) => f.slug!.startsWith("Notes/") && !f.slug!.endsWith("index"),
      limit: 7,
      linkToMore: "/Notes/" as SimpleSlug
    }),
    Component.RecentNotes({
      title: "Articles",
      filter: (f) => f.slug!.startsWith("Articles/") && !f.slug!.endsWith("index"),
      limit: 3,
      linkToMore: "/Articles/" as SimpleSlug
    }),
    Component.RecentNotes({
      title: "Books",
      filter: (f) => f.slug!.startsWith("Books/") && !f.slug!.endsWith("index"),
      limit: 3,
      linkToMore: "/Books/" as SimpleSlug
    }),
    // Component.RecentNotes({
    //   title: "Music",
    //   filter: (f) => f.slug!.startsWith("Music/") && !f.slug!.endsWith("index"),
    //   limit: 3,
    //   linkToMore: "/Music/" as SimpleSlug
    // }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(explorerComponent),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.DesktopOnly(Component.Graph({ showTags: false })),
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
    Component.DesktopOnly(explorerComponent),
  ],
  right: [],
}
