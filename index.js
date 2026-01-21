 setTimeout(function () {
            document.body.innerHTML = `
                <div style='
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                    height:100vh;
                    font-family:Inter,system-ui,sans-serif;
                    background:#0f172a;
                '>
                    <div style='
                        width:80px;
                        height:80px;
                        border-radius:50%;
                        background:#059669;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-size:42px;
                        color:white;
                        margin-bottom:16px;
                    '>
                        ✓
                    </div>

                    <div style='
                        font-size:1.6rem;
                        font-weight:700;
                        color:#22c55e;
                    '>
                        Completed
                    </div>
                </div>
            `;
        }, 10000);
