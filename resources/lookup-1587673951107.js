(function(window, undefined) {
  var dictionary = {
    "f3290229-0b36-4078-a48a-0f9ae3eede41": "tutoring",
    "585253e3-50f7-451c-a364-1a4001458278": "objectDetect",
    "4c4e90c5-f8fb-4240-86a1-e7bc4ccab8cd": "lift",
    "89446160-5e18-47cb-8b62-ab0dea956d59": "app",
    "4105d619-1279-4c03-be3c-3a3680ea9c2c": "c1",
    "da27263f-9508-4c26-916b-a2d7371814aa": "app_tutoring",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "a6a8f371-ce5c-4205-8de7-52107f9a373f": "Screenshot_20200422-155514811 (1) (1)",
    "f6071b01-375a-4349-bc60-aa7df6f09b4a": "cameras",
    "faa0e114-ef9d-412a-a974-346c4a5e2f17": "cat",
    "2c8a5a68-0c0d-42d5-814c-e75fc17bf7e1": "re",
    "4ee6419e-01f1-45ce-9d0e-70c3f5deb05f": "4720h-a",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);