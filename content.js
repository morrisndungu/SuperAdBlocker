var adDivs = document.querySelectorAll('div[id^="ad"], div[class^="ad"], div[id^="ads"], div[class^="ads"], div[id^="google_ads"]');
for (var i = 0; i < adDivs.length; i++) {
  adDivs[i].style.display = "none";
}
