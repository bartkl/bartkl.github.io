import { QuartzFilterPlugin } from "../types"

export const RemoveExcalidrawMDs: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveExcalidrawMDs",
  shouldPublish(_ctx, [_tree, vfile]) {
    return vfile.extname != ".excalidraw"
  },
})
