fetch('books.json')
.then((data) => data.json())
.then((objectData) => {
    console.table(objectData[0].author);
    let tableData = "";
    objectData.map((values) => {
        tableData += `<tr>
            <td>${values.title}</td>
            <td>${values.author} - <a href=${values.link}>Book Details</a></td>
            <td>${values.language} - ${values.year}</td>
      </tr>`
    })
    document.getElementById('tablebody').innerHTML = tableData;
})  
.catch((error) => {
    console.log(`Error occures while fetching data ${error}`);
    document.getElementById('bookssection').innerHTML = 'Error Loading Data'
})
