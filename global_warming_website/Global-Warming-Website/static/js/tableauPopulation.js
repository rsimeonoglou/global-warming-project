function initViz() {
   
    var containerDiv3 = document.getElementById("vizContainer3"),
    url = "https://public.tableau.com/views/population_dashboard_v2/PopulationDashboard?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
  
    var viz3 = new tableau.Viz(containerDiv3, url);
  
  }
  
  initViz();