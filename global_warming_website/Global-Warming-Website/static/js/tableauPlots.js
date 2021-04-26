function initViz() {
  var containerDiv1 = document.getElementById("vizContainer1"),
  url = "https://public.tableau.com/views/PopulationPlot_new/Dashboard2?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

  var viz = new tableau.Viz(containerDiv1, url);

  var containerDiv2 = document.getElementById("vizContainer2"),
  url = "https://public.tableau.com/views/GlobalTemperatures_16194005396510/Sheet1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";

  var viz = new tableau.Viz(containerDiv2, url);

  
}

initViz();