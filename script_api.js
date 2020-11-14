// Medium’s API is a JSON-based OAuth2 API. All requests are made to endpoints beginning:
/*const medium_API_url = "https://api.medium.com/v1";

fetch(medium_API_url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });*/

  const fn = document.querySelector("#first-note");

  fn.addEventListener("click", test);

  function test() {
    console.log('link click');

    //redirect 
    location.href = 'https://fscheng4747.medium.com/algorithm-nodes-b5166a825c68';
  }