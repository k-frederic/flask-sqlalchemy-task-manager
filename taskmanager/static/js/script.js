document.addEventListener('DOMContentLoaded', function() {
    // Sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
     M.Sidenav.init(sidenav);

     // datepicker initialization
     let datepicker = document.querySelectorAll('.datepicker');
     M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
     });
  });