const totalClick = async (url) => {
    const parts = url.split("/")
    const shortId = parts[parts.length - 1]
    const response = await fetch(`https://url-xd46.onrender.com/url/analytics/${shortId}`,{
        method: 'get'
    })

    const data = await response.json()

    if(!data){
        return "This is invalid URL"
    }
    return data.totalClicks
}

module.exports = totalClick