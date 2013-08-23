
  document.addEventListener('deviceready',main, false);
  function main() {
      alert('deviceready');

      cordova.exec(function (winParam) {

          var text = getData(winParam);
          document.getElementById("inbox").innerHTML = text;

      }, function (error) { alert("error"); }, "SMSReader", "GetTexts", ["", -1]);
      
  }


  function getData(data) {
      var txt = "";
      for (var i = 0; i < data.texts.length; i++) {

          if (data.texts[i].message.substring(0, 2) == "MD") {

              txt += "<b> Message:</b>" + data.texts[i].message + "!<br />";
          }
      }
      return txt;
  }
