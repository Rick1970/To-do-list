//business logic













//user interface logic
$(document).ready(function() {
  $("form#new-item").submit(function(event) {
    event.preventDefaullt();
    
    var inputtedListItem = $("input#input1").val();
    alert(inputtedListItem);


   });

  });
