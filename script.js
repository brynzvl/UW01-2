$(function() {
  // Declaring the Set and the Output Variable
  const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    output = $('.output');

    // Some ES6 Function
  $('.some-submit').on('click', function() {
    const val = $('.some-input').val();
    // Changing the input into an integer
    const num = parseInt(val);
    // Checking to see if the value is in the set
    let results = data.some(value => num === value);
    // Ternary Operator for Results
    output.text(results? "The value is in the set" : "The value is not in the set");
  });

    // Filter ES6 Function
  $('.filter-submit').on('click', function(){
    const val = $('.filter-input').val();
    const num = parseInt(val);
    // Filtering numbers greater than the input
    let results = data.filter(function(value){
      return num < value;
    })
    // Ternary Operator for Results if not, then say "No Values"
    output.text(results.length? results : "No Values");
  })

  // Map ES6 Function
  $('.map-submit').on('click', function(){
    const val = $('.map-input').val();
    const num = parseInt(val);
  // Add the input to each number in the set
    let results = data.map(function(value){
      return (value + num);
    })
    output.text(results);

  })

  // Find ES6 Function
  $('.find-submit').on('click', function(){
    const val = $('.find-input').val();
    const num = parseInt(val);
    // Return the first value that is greater than the input
    let results = data.find(function(value){
      return (value > num);
    })
    output.text(results);

  })
});
