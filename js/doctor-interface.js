var Doctor = require('./../js/doctor.js').doctorModule;

var getDoctorsFront = function(medicalIssue, result){
  result["data"].forEach (function(doctor){
  $('.showDoctors').append("<li>" + doctor['profile']['first_name'] + "</li>")
})};

$(document).ready(function(){
  $('#list-button').click(function(){
    var medicalIssue = $('#medicalIssue').val()
    var newDoctor = new Doctor();
    newDoctor.getDoctors(medicalIssue, getDoctorsFront)
  });
});
