(function () {
  function loadJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    };
    rawFile.send(null);
  }

  loadJSON("./data.json", function (text) {
    let data = JSON.parse(text);
    $(".name1").text(data.personal.name);
    $("#course").text(data.personal.course);
    $(".phone").text(data.personal.phone);
    $(".email").text(data.personal.email);
    $(".address").text(data.personal.address);
    $("#obj-des").text(data.personal.objective);
    $("#languages").text(data.personal.languages);
    $("#nationality").text(data.personal.nationality);
    $("#age").text(data.personal.age);
    $("#gender").text(data.personal.gender);
    $("#dob").text(data.personal.dob);
    let str = "";
    for (let i = 0; i < 4; i++) {
      str += "<li>" + data.skills[i] + "</li>";
    }
    $("#skills").html(str);
    $("#tenth").text(data.qualifications.tenth);
    $("#tenth-year").text(data.qualifications.tenth_year);
    $("#school").text(data.qualifications.tenth_school);
    $("#tenth-per").text(data.qualifications.tenth_per);
    $("#inter").text(data.qualifications.inter);
    $("#inter-year").text(data.qualifications.inter_year);
    $("#inter-clg").text(data.qualifications.inter_clg);
    $("#inter-per").text(data.qualifications.inter_per);
    $("#under-grad").text(data.qualifications.ug);
    $("#ug-year").text(data.qualifications.ug_year);
    $("#ug-clg").text(data.qualifications.ug_clg);
    $("#ug-per").text(data.qualifications.ug_per);
  });
})();
