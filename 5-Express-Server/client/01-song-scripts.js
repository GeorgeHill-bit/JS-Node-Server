/***************************************
 * 4 POST /one : write data to html
***************************************/
function postData() {
    let content = { testdata: { item: 'This was saved!' } };

    let testDataAfterFetch = document.getElementById('test-data');
    let createdAtAfterFetch = document.getElementById('created-at');

    fetch('http://localhost:3000/test/seven', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)  //3
    })
    .then(response => response.json())
    .then(function (text) {
        console.log(text);
        testDataAfterFetch.innerHTML = text.testdata.testdata; 
        createdAtAfterFetch.innerHTML = text.testdata.createdAt;
    });
}