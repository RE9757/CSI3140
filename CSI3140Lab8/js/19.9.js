document.getElementById('urlForm').onsubmit = function (e) {
    e.preventDefault()
    const url = document.getElementById('url').value
    const description = document.getElementById('description').value

    fetch('../php/19.9.php', {
        method: 'POST',
        body: JSON.stringify({
            url: url,
            description: description
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then(data => {
            const table = document.getElementById('result')
            while (table.rows.length > 1) {
                table.deleteRow(1)
            }
            data.forEach(row => {
                const newRow = table.insertRow()
                newRow.innerHTML = `<td>${row.ID}</td><td>${row.URL}</td><td>${row.description}</td>`
            })
        }).catch(error => console.error('Error:', error))
}

document.getElementById('init').onclick = function (e) {
    e.preventDefault()
    fetch('../php/19.9_init.php', {
        method: 'POST',
    }).then(response => response.text())
        .then(text => {
            if (text === 'OK') {
                document.getElementById('initResult').innerHTML = 'Database initialized'
                document.getElementById('initResult').style.color = 'green'
            } else {
                console.error('Error initializing database' + "\n" + text)
            }
        }).catch(error => console.error('Error:', error))
}
