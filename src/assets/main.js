$(function() {
    $.ajax({
    url: 'https://www.codeschool.com/users/3305732.json',
    dataType: 'jsonp',
    success: function(response) {
      const badges = response.courses.completed;
      for (let i in badges){
        $('#badges').append(
          `<div class="course">
            <h3>${badges[i].title}</h3>
            <img src="${badges[i].badge}">
            <a class="btn btn-primary" href="${badges[i].url}" target="_blank">See Course</a>
          </div>`
        )
      }
    }
  });
});
