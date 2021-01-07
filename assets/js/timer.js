(function () {
  var _id = "7bf872d640406dc351c6ee4fa1db5cf5";
  while (document.getElementById("timer" + _id)) _id = _id + "0";
  document.write(
    "<div id='timer" + _id + "' style='min-width:512px;height:90px;'></div>"
  );
  var _t = document.createElement("script");
  _t.src = "//megatimer.ru/timer/timer.min.js?v=1";
  var _f = function (_k) {
    var l = new MegaTimer(_id, {
      view: [1, 1, 1, 1],
      type: {
        currentType: "2",
        params: {
          startByFirst: true,
          days: "0",
          hours: "0",
          minutes: "30",
          utc: 0,
        },
      },
      design: {
        type: "plate",
        params: {
          round: "11",
          background: "solid",
          "background-color": "#eee",
          effect: "flipchart",
          space: "2",
          "separator-margin": "10",
          "number-font-family": {
            family: "Comfortaa",
            link:
              "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>",
          },
          "number-font-size": "60",
          "number-font-color": "#000",
          padding: "14",
          "separator-on": false,
          "separator-text": ":",
          "text-on": false,
          "text-font-family": {
            family: "Comfortaa",
            link:
              "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>",
          },
          "text-font-size": "12",
          "text-font-color": "red",
        },
      },
      designId: 2,
      theme: "white",
      width: 512,
      height: 90,
    });
    if (_k != null) l.run();
  };
  _t.onload = _f;
  _t.onreadystatechange = function () {
    if (_t.readyState == "loaded") _f(1);
  };
  var _h = document.head || document.getElementsByTagName("head")[0];
  _h.appendChild(_t);
}.call(this));
