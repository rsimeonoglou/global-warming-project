function initViz() {
  var containerDiv1 = document.getElementById("vizContainer1"),
  url = "https://public.tableau.com/views/PopulationPlot_new/Dashboard2?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

  var viz1 = new tableau.Viz(containerDiv1, url);

}

initViz();