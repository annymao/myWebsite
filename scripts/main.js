// Google Analytics
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

// TODO add your tracking id here
ga('create', 'UA-117489583-1', 'auto');
ga('send', 'pageview');

window.onload() {
  var feedbackBTN = document.getElementByID("feedback");
  feedbackBTN.addEventListener('click', function () {
    ga('send', 'event', 'onlineshow', 'click', 'question');
  });
}
