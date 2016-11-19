var validations = [
 {
    tag: "v_username",
    fn: function(s){
      if(s.length === 0){
        return "Nou neee....";
      } else {
        return "ok";
      }
    }
 },
 
 {
    tag: "v_password",
    fn: function(s){
			
    }
 }
];

var validator = (function(){
  
  var fns = validations;
  
  var prefix = "v_";

  function validate(form){
    // loop over each element in the form
  	$(form).find("input, textarea").each(function(){
      // look for validate classes
      var classList = $(this).attr('class');
      var val = $(this).val();
      
      // check if element has a class, else stop
      if(classList !== undefined){
        classList = classList.split(/\s+/);
      } else { return true; }
      
      $.each(classList, function(index, className){
        // check if element has a class that contains a valid validation class
      	if(className.indexOf(prefix) !== -1){
          // loop over the functions array 
          $.each(fns, function(key, value){
            if(value.tag === className){
              var result = value.fn(val);
              alert(result);
              if(result === false){
                
              }
            }
          });
        }
      });
      
    });
  }

 return {
   validate: validate
 }
})();

validator.validate($("form"));