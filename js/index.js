
  function loadScoresGSheet() {

    let sheetUrl = "https://docs.google.com/spreadsheets/d/1IBrHZ5zt5EP9TILd-YTCbHVipz6A8dnXheZsF_VcmVc/edit#gid=0";
    $('#rank').sheetrock({
      url: sheetUrl,
      query: `SELECT A, B WHERE B >= 20 order by B desc limit 3`,
      labels: ["\u0000", ""],
      callback: () => {},
    });
  };
  
  
  $(document).ready(loadScoresGSheet);

  let prizeTitle = document.getElementById("prizes-title");
  let prize =document.getElementById("prizes");
  window.addEventListener("scroll", function() {
    let value = window.scrollY;
     if (value<3153) {
      prizeTitle.style.fontSize = value *0.008  +"vw";
     }
  });

