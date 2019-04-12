$(function() {
  const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    output = $('.output');

  $('.some-submit').on('click', function() {
    const val = $('.some-input').val();
    const num = parseInt(val);
    let results = data.some(value => num === value);
    output.text(results? "The value is in the set" : "The value is not in the set");
  });

  $('.filter-submit').on('click', function(){
    const val = $('.filter-input').val();
    const num = parseInt(val);
    // let results = data.filter(value => num < value )
    let results = data.filter(function(value){
      return num < value;
    })
    output.text(results.length? results : "No Values");
  })

  $('.map-submit').on('click', function(){
    const val = $('.map-input').val();
    const num = parseInt(val);
    let results = data.map(function(value){
      return (value + num);
    })
    output.text(results);

  })

  $('.find-submit').on('click', function(){
    const val = $('.find-input').val();
    const num = parseInt(val);
    let results = data.find(function(value){
      return (value > num);
    })
    output.text(results);

  })
});


 // if (!isNaN(num)) {
    //   data.push(num);
    //   const sum = data.reduce((acc, curr) => acc + curr);
    //   resultSum.text(sum);
    //   input.val('');
    // }

    //   let results = data.every(function(value){
    //   return value > 25;

    // });
