const mindmapData = {
  mindmap1: {
    "content": "markmap",
    "children": [{
      "content": "Links",
      "children": [{
        "content": "<a href=\"https://markmap.js.org/\">Website</a>",
        "children": [],
        "payload": { "lines": "5,6" }
      },
      {
        "content": "<a href=\"https://github.com/gera2ld/markmap\">GitHub</a>",
        "children": [],
        "payload": { "lines": "6,8" }
      }
      ],
      "payload": { "lines": "3,4" }
    }]
  },
  mindmap2: {
    "content": "Related Projects",
    "children": [{
      "content": "<a href=\"https://github.com/gera2ld/coc-markmap\">coc-markmap</a> for Neovim",
      "children": [],
      "payload": { "lines": "10,11" }
    },
    {
      "content": "<a href=\"https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode\">markmap-vscode</a> for VSCode",
      "children": [],
      "payload": { "lines": "11,12" }
    },
    {
      "content": "<a href=\"https://github.com/emacs-eaf/eaf-markmap\">eaf-markmap</a> for Emacs",
      "children": [],
      "payload": { "lines": "12,14" }
    }
    ],
    "payload": { "lines": "8,9" }
  }
};

((o, T, c, r) => {
  const g = o();
  window.mm = g.Markmap.create("svg#mindmap", (T || g.deriveOptions)(r), c)
})(() => window.markmap,
  null,
  content);