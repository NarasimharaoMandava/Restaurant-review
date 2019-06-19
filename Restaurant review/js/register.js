if ('serviceWorker' in navigator) {
  console.log("Yes");
  navigator.serviceWorker.register("serviceWorker.js", {
    scope: "./"
  }).then(response => {
    console.log("Success");
  }).catch(error => {
    console.log("Fail");
  })
} else {
  console.log("No");
}
