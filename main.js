// Init QuickBlox application here
//
QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret);

$(document).ready(function() {

  // First of all create a session and obtain a session token
  // Then you will be able to run requests to Users
  //
  QB.createSession(function(err,result){
    console.log('Session create callback', err, result);
  });
 
 // Create user
  //
  $('#sign_up').on('click', function() {
    var login = $('#usr_sgn_p_lgn').val();
    var password = $('#usr_sgn_p_pwd').val();

    var params = { 'login': login, 'password': password};

    QB.users.create(params, function(err, user){
      if (user) {
        $('#output_place').val(JSON.stringify(user));
      } else  {
        $('#output_place').val(JSON.stringify(err));
      }

      $("#progressModal").modal("hide");

      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
  });


  // Login user
  //
  $('#sign_in').on('click', function() {
    var login = $('#usr_sgn_n_lgn').val();
    var password = $('#usr_sgn_n_pwd').val();

    var params = { 'login': login, 'password': password};

    QB.login(params, function(err, user){
      if (user) {
        $('#output_place').val(JSON.stringify(user));
      } else  {
        $('#output_place').val(JSON.stringify(err));
      }

      $("#progressModal").modal("hide");

      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
  });