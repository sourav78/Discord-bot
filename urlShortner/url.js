async function shortUrl(url) {

    const urlData = {
        url: url
    }

    const response = await fetch("https://url-xd46.onrender.com/url", {
        method: 'post',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(urlData)
    })

    const { id } = await response.json()

    return id
}

module.exports = shortUrl