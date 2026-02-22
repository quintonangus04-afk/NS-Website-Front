const token = document.cookie

async function verify() {

    const cookieCheck = await fetch('https://ns-backend-215034531154.europe-west1.run.app/cookieVerify', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        cookie: token
    })
})
    
    const vetifyResponse = await cookieCheck.json()

    if (verify.vetifyResponse.outcome === true) {
        localStorage.setItem('username', vetifyResponse.username)
        document.body.style.display = 'flex'
        document.getElementById('text').innerHTML = `Welcome ${localStorage.username}, your logged in.`
    } else {
        window.location.href = 'index.html'
    }

    
}
