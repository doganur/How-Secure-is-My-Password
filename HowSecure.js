<script>
        window.onload = function() { //ABe
            let password = "";
            const input = document.getElementById('password')

            input.addEventListener('input', (event) => {
                const password = input.value
                console.log(password);
                checkPassword(password);
            })
        }

        const checkPassword = (pass) => {
            const length = pass.length;

            const possibilities = checkPossibilities(pass);

            const timeToCrack = avarageTime(length, possibilities)

            const finalEstimate = convertSeconds(timeToCrack)

            document.getElementById("time").innerHTML = finalEstimate

        }


        const checkPossibilities = (pass) => {

            let lower = Boolean(false)
            let upper = Boolean(false)
            let num = Boolean(false)
            let special = Boolean(false)


            for (let i = 0; i < pass.length; i++) {
                if (pass[i] >= "A" && pass[i] <= "Z") {
                    upper = true
                } else if (pass[i] >= "a" && pass[i] <= "z") {
                    lower = true
                } else if (pass[i] >= "0" && pass[i] <= "9") {
                    num = true
                } else {
                    special = true
                }

            }
            if (num && lower && upper && special) { //   Ah1*
                return 101
            } else if (special && lower && upper) { //   Ah*
                return 91
            } else if ((num && lower && special) || (num && upper && special)) { //    1*A    1*a
                return 72
            } else if (num && lower && upper) { // 5Af
                return 68
            } else if ((lower && special) || (upper && special)) { //    a*   A*
                return 62
            } else if (lower && upper) { // Af
                return 58
            } else if (num && special) { //5*
                return 43
            } else if ((num && lower) || (num && upper)) { // 5A     5a
                return 39
            } else if (special) { //*
                return 33
            } else if (lower || upper) {
                return 29
            } else {
                return 10
            }

        }


        const avarageTime = (length, possibities) => {
            const out = possibities ** length / 30000000

            return out
        }
        const convertSeconds = (n) => {

            var year = n / (3.2 * (10 ** 7))
            if (year < 1) {
                year = 0
            }

            var day = year % 365;
            if (day < 1) {
                day = 0
            }

            n = n % (24 * 3600);
            var hour = (n / 3600);
            if (hour < 1) {
                hour = 0
            }

            n = n % 3600;

            var min = n / 60;

            if (min < 1) {
                min = 0;
            }
            n %= 60;
            var sec = n;
            if (sec > 1.0) {
                sec = Number(sec.toFixed(2));
            } else {
                sec = Number(sec.toFixed(6));
            }

            if (year < 10000) {
                return `${year.toFixed(0)} yıl ${parseInt(day)} gün ${parseInt(hour)} saat ${parseInt(min)} dakika ${(sec)} saniye`
            } else {
                return `${(year/1000).toFixed(0)} yüzyıl`
            }
        }
    </script>