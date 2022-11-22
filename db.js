async function loadDB() {
    let DB = {}
    await fetch("db.json")
    .then(response => response.json())
    .then(json => DB = json)
    return DB
}