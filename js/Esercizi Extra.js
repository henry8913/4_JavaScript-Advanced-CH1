// Esercizi Extra
        // Funzione 1
        function removeCharacter(str, char) {
            return str.replace(new RegExp(char, 'g'), '');
        }

        function testRemoveCharacter() {
            let str = document.getElementById("stringInput").value;
            let char = document.getElementById("charToRemove").value;
            document.getElementById("result1").innerText = removeCharacter(str, char);
        }

        // Funzione 2
        function areAnagrams(str1, str2) {
            return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("");
        }

        function testAnagram() {
            let str1 = document.getElementById("anagram1").value;
            let str2 = document.getElementById("anagram2").value;
            document.getElementById("result2").innerText = areAnagrams(str1, str2);
        }

        // Funzione 3
        function findAnagrams(word) {
            let anagramList = ["carenti", "incerta", "espatrio"];
            return anagramList.filter(w => w.split("").sort().join("") === word.split("").sort().join(""));
        }

        function testFindAnagrams() {
            let word = document.getElementById("wordInput").value.trim().toLowerCase();
            let result = findAnagrams(word);
            
            if (result.length > 0) {
                document.getElementById("result3").innerText = `Anagrammi trovati: ${result.join(", ")}`;
            } else {
                document.getElementById("result3").innerText = "Nessun anagramma trovato nel set predefinito.";
            }
        }

        // Funzione 4
        function isPalindrome(str) {
            let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
            return cleanStr === cleanStr.split("").reverse().join("");
        }

        function testPalindrome() {
            let str = document.getElementById("palindromeInput").value;
            document.getElementById("result4").innerText = isPalindrome(str);
        }

        // Funzione 5
        function reorderNumber(num) {
            return parseInt(num.toString().split("").sort().join(""));
        }

        function testReorderNumber() {
            let num = document.getElementById("numberInput").value;
            document.getElementById("result5").innerText = reorderNumber(num);
        }

        // Funzione 6
        function createStaircase(n) {
            let result = "";
            for (let i = 1; i <= n; i++) {
                result += "#".repeat(i) + "\n";
            }
            return result;
        }

        function testCreateStaircase() {
            let n = document.getElementById("stepsInput").value;
            document.getElementById("result6").innerText = createStaircase(n);
        }

        // Funzione 7
        function reverseString(str) {
            return str.split("").reverse().join("");
        }

        function testReverseString() {
            let str = document.getElementById("reverseInput").value;
            document.getElementById("result7").innerText = reverseString(str);
        }

        // Funzione 8
        function splitArray(arr, size) {
            let result = [];
            while (arr.length) result.push(arr.splice(0, size));
            return result;
        }

        function testSplitArray() {
            let arr = document.getElementById("arraySplitInput").value.split(",").map(Number);
            let size = document.getElementById("splitSize").value;
            document.getElementById("result8").innerText = JSON.stringify(splitArray(arr, size));
        }

        // Funzione 9
        function createPyramid(n) {
            let result = "";
            for (let i = 1; i <= n; i++) {
                let spaces = " ".repeat(n - i);
                let hashes = "#".repeat(2 * i - 1);
                result += spaces + hashes + spaces + "\n";
            }
            return result;
        }

        function testCreatePyramid() {
            let n = document.getElementById("pyramidInput").value;
            document.getElementById("result9").innerText = createPyramid(n);
        }

        // Funzione 10
        function generateSpiralMatrix(n) {
            let matrix = Array.from({ length: n }, () => Array(n).fill(0));
            let value = 1, top = 0, bottom = n - 1, left = 0, right = n - 1;

            while (value <= n * n) {
                for (let i = left; i <= right; i++) matrix[top][i] = value++;
                top++;
                for (let i = top; i <= bottom; i++) matrix[i][right] = value++;
                right--;
                for (let i = right; i >= left; i--) matrix[bottom][i] = value++;
                bottom--;
                for (let i = bottom; i >= top; i--) matrix[i][left] = value++;
                left++;
            }
            return matrix.map(row => row.join(" ")).join("\n");
        }

        function testSpiralMatrix() {
            let n = document.getElementById("matrixInput").value;
            document.getElementById("result10").innerText = generateSpiralMatrix(n);
        }