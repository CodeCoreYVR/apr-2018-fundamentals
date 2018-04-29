// Form Exercise
// Name Collector

// Create a user form with a text field and a submit button. As well create a
// table that will display the names entered. When the submit button is clicked:

// 1. prevent the default action of reloading the page: event.preventDefault();
// 2. get the text in the input text field using val();
// 3. populate the table with the name entered using append();

$(document).ready(function() {
  $('form#my-form').on('submit', function(event) {
    event.preventDefault()

    let inputText = $('input#funny_input').val()

    $('table#my-table tbody').append('<tr><td>' + inputText + '</td></tr>')
  })
})
