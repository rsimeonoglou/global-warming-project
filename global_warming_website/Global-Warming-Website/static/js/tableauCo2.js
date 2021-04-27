function initViz() {
   
    var containerDiv3 = document.getElementById("vizContainer3"),
    url = "https://public.tableau.com/views/CO2_graph_v2/Dashboard1?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
  
    var viz3 = new tableau.Viz(containerDiv3, url);
  
  }
  
  initViz();