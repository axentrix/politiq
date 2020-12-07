

 $(function() {
	
	
	
	$('#username').keyup(function() {
	
		 if($("#sameas").is(':checked')) {
		 var stt = $(this).val();
   $("#emailpaypal").val(stt);
		 
               $('#emailpaypal').trigger('input');
			   
		  }
            });	
	
	 
	 $("#sameas").change(function() {
    var emailStr;
	
	
	
	
	
	
    if (this.checked) {
       


        emailStr =  $("#username").val();
	
		
$("#emailpaypal").prop('disabled', true);
		
		
    } else {
        emailStr = "";
		
		
		$("#emailpaypal").prop('disabled', false);
    }
   
		 $("#emailpaypal").val(emailStr);
	 $('#emailpaypal').trigger('input');
	
});
	 
	
				// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
					// in case the input is already filled..
					if( inputEl.value.trim() !== '' ) {
						classie.add( inputEl.parentNode, 'input--filled' );
					}

					// events:
					inputEl.addEventListener( 'focus', onInputFocus );
					inputEl.addEventListener( 'blur', onInputBlur );
				} );

				function onInputFocus( ev ) {
					classie.add( ev.target.parentNode, 'input--filled' );
				}

				function onInputBlur( ev ) {
					if( ev.target.value.trim() === '' ) {
						classie.remove( ev.target.parentNode, 'input--filled' );
					}
				}
		
	 
	 
    $('.bfh-states button').attr('required','required');
	  $('.bfh-states button').attr('required','required');
  });
  
  
  $(document).ready(function(){
	  
	  
	if(document.getElementById("login-advertiser")){
	  $("form#login-advertiser").validate({
     highlight: function(element) {
        $(element).parent().addClass("has-error");
    },
    unhighlight: function(element) {
        $(element).parent().removeClass("has-error");
    },
    errorClass: 'help-block',
        errorPlacement: function (error, element) {
         



   
              error.appendTo(element.parent());
         
        }
  });
  
	}
	  
        $('.bfh-selectbox').on('change.bfhselectbox', function () {
            //var dataPrice = $(this).val();
		
       //$('input#price').append(dataPrice);
	   
	 


$('#bootstrapSelectForm')
   
   .find('[name="states"]')
    
      .change(function(e) {
        $('#vugoregistration').bootstrapValidator('revalidateField', 'duration');
		alert("bre");
      })
	 
      .end()
   .bootstrapValidator({
      feedbackIcons: {
         valid: 'glyphicon glyphicon-ok',
         invalid: 'glyphicon glyphicon-remove',
         validating: 'glyphicon glyphicon-refresh'
      },
      excluded: ':disabled', // <=== Add the excluded option
      fields: {
         states: {
            validators: {
               notEmpty: { // <=== Use notEmpty instead of Callback validator
                  message: 'Please select state'
               }
            }
         }
        
	  }
 
   });
   });


function getCountryCode(value, validator, $field) {
    // Return the selected country code
    return $('[name="countries"]').val();

    // You can use getFieldElements() method
    // return validator.getFieldElements('countrySelectBox').val();
};

 


});