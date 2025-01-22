const apiKey = 'up:yeah:8yUTY4o4WauKy5rGw46OaQ1Bn67RER0sacEohM0Tkg2IYpQL5aBoHX0BqCOvuopvvNLY1O645gQH7TS3d9n9mACyzStVx8Tgb3VoLGLWFq1ggBXEPcfHOBT2QuU7NLUc';

function UpAccount() {
    return fetch('https://api.up.com.au/api/v1/accounts?filter[accountType]=SAVER', {
        method: "GET",
        headers: {'Authorization': `Bearer ${apiKey}`}
    })
    .then(function(res){
        return res.json()
    })
    .then(
        (results) => {
            const accountName = results.data[1].attributes.displayName
            const balance = results.data[1].attributes.balance.value
            console.log(`${accountName} and ${balance}`)
        }
    )
    // (error) => {
    //     console.log(error)
    // }
}

export default UpAccount