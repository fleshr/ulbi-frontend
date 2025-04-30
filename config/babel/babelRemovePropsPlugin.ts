import type { PluginObj } from "@babel/core";

interface State {
  opts: { attrs?: string[] };
}

const plugin = (): PluginObj => ({
  visitor: {
    JSXAttribute(path, state: State) {
      const attrs = state.opts.attrs ?? [];
      const name = path.node.name;

      if (name.type === "JSXIdentifier" && attrs.includes(name.name)) {
        path.remove();
      }
    },
    Property(path, state: State) {
      const attrs = state.opts.attrs ?? [];
      const key = path.node.key;

      if (key.type === "StringLiteral" && attrs.includes(key.value)) {
        path.remove();
      }
    },
  },
});

export default plugin;
