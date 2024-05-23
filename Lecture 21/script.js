        // Stopwatch Counter Section
        let stopwatch = 0;
        const stopwatchElement = document.getElementById('stopwatch');
        let stopwatchInterval = setInterval(() => {
            if (stopwatch < 20) {
                stopwatch++;
                stopwatchElement.textContent = stopwatch;
            } else {
                clearInterval(stopwatchInterval);
            }
        }, 1000);

        // Reverse Stopwatch Counter Section
        let reverseStopwatch = 20;
        const reverseStopwatchElement = document.getElementById('reverseStopwatch');
        let reverseStopwatchInterval = setInterval(() => {
            if (reverseStopwatch > 0) {
                reverseStopwatch--;
                reverseStopwatchElement.textContent = reverseStopwatch;
            } else {
                clearInterval(reverseStopwatchInterval);
            }
        }, 1000);

        // Timer Section
        let hour = 0;
        let minute = 1;
        let second = 59;

        let id = setInterval(() => {
            document.getElementById('hour').innerText = hour < 10 ? '0' + hour : hour;
            document.getElementById('minute').innerText = minute < 10 ? '0' + minute : minute;
            document.getElementById('second').innerText = second < 10 ? '0' + second : second;

            if (hour === 0 && minute === 0 && second === 0) {
                clearInterval(id);
            }
            if (second === 0) {
                if (minute === 0) {
                    hour--;
                    minute = 59;
                } else {
                    minute--;
                }
                second = 59;
            } else {
                second--;
            }
        }, 1000);

        // Third Counter Section
        let A = 0, B = 0, C = 0, D = 0;

        const displayCounter = () => {
            document.getElementById('counterA').textContent = `A: ${A}`;
            document.getElementById('counterB').textContent = `B: ${B}`;
            document.getElementById('counterC').textContent = `C: ${C}`;
            document.getElementById('counterD').textContent = `D: ${D}`;
        };

        let counterTimerId = setInterval(() => {
            if (A < 100) {
                A++;
            } else if (B < 237) {
                B++;
            } else if (C < 339) {
                C++;
            } else if (D < 779) {
                D++;
            }

            if (A >= 100 && B >= 237 && C >= 339 && D >= 779) {
                clearInterval(counterTimerId);
            }

            displayCounter();
        }, 10);

        displayCounter();