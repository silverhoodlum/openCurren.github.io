$(document).ready(function() {
    convertCurrencyRight();
});

//Loading currencies with flags 

function formatState (state) {
  if (!state.id) {
    return state.text;
  }
  var baseUrl = "assets/flags";
  console.log(state);
  var $state = $(
    '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" id="intent" width= "30" /> ' + '<p class="currenName">' + state.text.substr(0, 4) + '</p></span>'
  );
  return $state;
};

//Search for currencies

function matchCustom(params, data) {
   
    
  // If there are no search terms, return all of the data
  if ($.trim(params.term) === '') {
    return data;
  }

  // Do not display the item if there is no 'text' property
  if (typeof data.text === 'undefined') {
    return null;
  }

  // `params.term` should be the term that is used for searching
  // `data.text` is the text that is displayed for the data object
  if (data.text.toUpperCase().indexOf(params.term.toUpperCase()) > -1) {
    return data;
  }

  // custom search using lookup data
  if ($(data.element).data('lookup').toUpperCase().indexOf(params.term.toUpperCase()) > -1) {
    return data;
  }
    
   
  // Return `null` if the term should not be displayed
  return null;
}

//Select to   

$(".js-example-templating").select2({
    templateSelection: formatState,
    templateResult: formatState,
    matcher: matchCustom

});




