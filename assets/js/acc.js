$(document).ready(function () {
  if (location.hash != null && location.hash != "") {
    $(location.hash + ".collapse").addClass("show");
    $("#faqs").get(0).scrollIntoView();
    $(`button[data-bs-target="${location.hash}"]`).removeClass("collapsed");
  }
});
