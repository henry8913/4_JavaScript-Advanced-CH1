// 4_JavaScript-Advanced-CH1
        // Funzione 1
        function checkFifty(a, b) {
            return a == 50 || b == 50 || (a + b == 50);
        }

        function testCheckFifty() {
            let num1 = parseInt(document.getElementById("num1").value);
            let num2 = parseInt(document.getElementById("num2").value);
            let result = checkFifty(num1, num2);
            document.getElementById("result1").innerText = "Risultato: " + result;
        }

        // Funzione 2
        function removeChar(str, position) {
            return str.slice(0, position) + str.slice(position + 1);
        }

        function testRemoveChar() {
            let text = document.getElementById("textInput").value;
            let pos = parseInt(document.getElementById("positionInput").value);
            let result = removeChar(text, pos);
            document.getElementById("result2").innerText = "Risultato: " + result;
        }

        // Funzione 3
        function checkRange(num1, num2) {
            let range1 = (num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60);
            let range2 = (num1 >= 70 && num1 <= 100) && (num2 >= 70 && num2 <= 100);
            return range1 || range2;
        }

        function testCheckRange() {
            let num1 = parseInt(document.getElementById("rangeNum1").value);
            let num2 = parseInt(document.getElementById("rangeNum2").value);
            let result = checkRange(num1, num2);
            document.getElementById("result3").innerText = "Risultato: " + result;
        }

        // Funzione 4
        function checkCityName(city) {
            return city.startsWith("Los") || city.startsWith("New") ? city : false;
        }

        function testCityName() {
            let city = document.getElementById("cityName").value;
            let result = checkCityName(city);
            document.getElementById("result4").innerText = "Risultato: " + result;
        }

        // Funzione 5
        function sumArray(arr) {
            return arr.reduce((sum, num) => sum + num, 0);
        }

        function testSumArray() {
            let arr = document.getElementById("arrayInput").value.split(",").map(Number);
            let result = sumArray(arr);
            document.getElementById("result5").innerText = "Risultato: " + result;
        }

        // Funzione 6
        function checkArray(arr) {
            return !arr.includes(1) && !arr.includes(3);
        }

        function testCheckArray() {
            let arr = document.getElementById("arrayCheckInput").value.split(",").map(Number);
            let result = checkArray(arr);
            document.getElementById("result6").innerText = "Risultato: " + result;
        }

        // Funzione 7
        function angleType(degrees) {
            if (degrees < 90) return "acuto";
            if (degrees === 90) return "retto";
            if (degrees > 90 && degrees < 180) return "ottuso";
            if (degrees === 180) return "piatto";
            return "Valore non valido";
        }

        function testAngleType() {
            let degrees = parseInt(document.getElementById("angleInput").value);
            let result = angleType(degrees);
            document.getElementById("result7").innerText = "Risultato: " + result;
        }

        // Funzione 8
        function createAcronym(phrase) {
            return phrase.split(" ").map(word => word.charAt(0).toUpperCase()).join("");
        }

        function testAcronym() {
            let phrase = document.getElementById("phraseInput").value;
            let result = createAcronym(phrase);
            document.getElementById("result8").innerText = "Risultato: " + result;
        }