async function exportjson() {
    const data = await fetch("lang.json");
    data = await data.json();
    console.log(data)
}

exportjson();