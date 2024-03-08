// 2.1 Kopiert euch die Datei Quiz.js in euer Repo
// 2.2 Erstellt einen Datei Quiz.test.js und Erstellt einen neuen Testfall

const { isRightSolutionForQuestion } = require("./Quiz");

// jetzt erstelle ich einen neuen Testfall:

describe("isRightSolutionForQuestion", () => {
  test("sollte true zurückgeben, wenn die antwort korrekt ist", () => {
    // Hier der Testfall für die erste Frage:
    const result = isRightSolutionForQuestion(
      "frage_1",
      "Weil er immer kalt gelötet ist."
    );
    expect(result).toBeTruthy(); // hier wird erwartet, dass die Funktion true zurückgibt
  });

  // 2.3 Erreicht eine Zeilen Abdeckung von 100% (line coverage)
  // hier erstelle ich nun Testfälle für die restlichen Fragen:

  test("sollte true zurückgeben, wenn die antwort korrekt ist", () => {
    const result = isRightSolutionForQuestion(
      "frage_2",
      "Weil sie sich ständig im Code verheddern."
    );
    expect(result).toBeTruthy();
  });

  test("sollte true zurückgeben, wenn die antwort korrekt ist", () => {
    const result = isRightSolutionForQuestion(
      "frage_3",
      "Weil er einen Virus hatte."
    );
    expect(result).toBeTruthy();
  });

  test("sollte true zurückgeben, wenn die antwort korrekt ist", () => {
    const result = isRightSolutionForQuestion("frage_4", "Logout.");
    expect(result).toBeTruthy();
  });

  test("sollte true zurückgeben, wenn die antwort korrekt ist", () => {
    const result = isRightSolutionForQuestion(
      "frage_5",
      "Sie hatte zu viele Back-End-Probleme."
    );
    expect(result).toBeTruthy();
  });
});

// 2.4 Schreibt in die Beschreibung von euren Test cases welche Zeilen ihr abdeckt
// 1. Z11-16 Überprüft, ob die Funktion isRightSolutionForQuestion die erste Frage korrekt beantwortet.
// 2. Z21-27Überprüft, ob die Funktion isRightSolutionForQuestion die zweite Frage korrekt beantwortet.
// 3. Z29-35 Überprüft, ob die Funktion isRightSolutionForQuestion die dritte Frage korrekt beantwortet.
// 4. Z37-40 Überprüft, ob die Funktion isRightSolutionForQuestion die vierte Frage korrekt beantwortet.
// 5. Z42-48 Überprüft, ob die Funktion isRightSolutionForQuestion die fünfte Frage korrekt beantwortet.
