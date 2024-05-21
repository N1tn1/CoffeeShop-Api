fetch('https://api.sampleapis.com/coffee/hot')
.then(response => response.json())
.then(hot => {
    console.log(hot);
})