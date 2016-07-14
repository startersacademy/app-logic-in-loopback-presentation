// Custom JS code can go here
// You can customize Reveal options:
Reveal.configure({
  "center": false,
  "width": "100%",
  "dependencies": [
    { src: "lib/js/classList.js", condition: function() { return !document.body.classList; } },
    { src: "plugin/markdown/showdown.js", condition: function() { return !!document.querySelector( "[data-markdown]" ); } },
    { src: "plugin/markdown/markdown.js", condition: function() { return !!document.querySelector( "[data-markdown]" ); } },
    { src: "plugin/highlight/highlight.js", async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: "plugin/search/search.js", async: true, condition: function() { return !!document.body.classList; } },
    { src: "plugin/remotes/remotes.js", async: true, condition: function() { return !!document.body.classList; } },
    { src: "js/tagcloud/tagcloud.js", async: true}
  ]});


// (an outdated version of) http://headjs.com/ is also loaded
//head.ready("script-loaded-by-head-js.js", function () {
// your code here
//});

//head.js("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js");
//head.js("js/script-loaded-by-head-js.js");

