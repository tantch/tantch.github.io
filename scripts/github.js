
$( window ).load(function(){
  $.getJSON("https://api.github.com/users/tantch/repos",{
    format: "json"
  }).done(function(data){
    console.log(data.length);
      var i=1;
    data.forEach(function(entry){
      $("#github-projects-"+ i).append("<li class='list-group-item'>"+entry.name+"</li>");
      i++;
      if(i==4){
        i=1;
      }
    });
  });
});
