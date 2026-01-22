const DURATION = 10000; // 10 seconds
const STORAGE_KEY = "countdownEndTime";

function showCompleted() {
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
}

function startCountdown() {
	const now = Date.now();
	let endTime = sessionStorage.getItem(STORAGE_KEY);

	if (!endTime) {
		endTime = now + DURATION;
		sessionStorage.setItem(STORAGE_KEY, endTime);
	} else {
		endTime = parseInt(endTime, 10);
	}

	const remaining = endTime - now;

	if (remaining <= 0) {
		sessionStorage.removeItem(STORAGE_KEY);
		showCompleted();
	} else {
		setTimeout(() => {
			sessionStorage.removeItem(STORAGE_KEY);
			showCompleted();
		}, remaining);
	}
}

startCountdown();