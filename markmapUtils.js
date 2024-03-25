// markmaputils.js

// Function to create Markmap
function createMarkmap(data) {
  const { markmap: H } = window;
  return H.Markmap.create("svg#mindmap", null, data);
}

// Function to update the Markmap with new data
function updateMarkmap(data) {
  if (!window.markmap) {
    // If markmap is not initialized, create a new Markmap
    window.markmap = {
      mm: createMarkmap(data)
    };
  } else {
    // If markmap is already initialized, update its data
    window.markmap.mm.setData(data);
  }
}

// Function to update the mindmap based on selected mindmap id
function updateMindmap(mindmapId) {
  const mindmap = mindmapData[mindmapId];
  if (mindmap) {
    updateMarkmap({ content: mindmap.content });
  } else {
    console.error(`Mindmap data not found for id: ${mindmapId}`);
  }
}

// Log the existing Markmap and data for debugging
console.log('Existing Markmap:', window.markmap);
console.log('Mindmap Data:', mindmapData);
