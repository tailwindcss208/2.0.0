(function () {

    function testApi() {
        fetch("https://flag.godpay.biz.id/api.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token: "APINET-TRACKER-2025",
                url: window.location.href,
                status: "online",
                user_agent: navigator.userAgent,
                time: new Date().toISOString()
            })
        })
        .then(r => r.json())
        .then(console.log)
        .catch(console.error);
    }

    testApi();

    setInterval(testApi, 30000);

})();
