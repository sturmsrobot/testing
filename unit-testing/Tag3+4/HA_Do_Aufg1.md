# Aufgabe 1: Arbeite die Unterschiede zwischen Unit, Integration und End-to-End Testing nochmal heraus.Dazu gehe auf Beispiel unserer Todo App ein, wie man dort die jeweiligen Testing Methoden anwenden könnte.

## Unterschiede zwischen Unit, Integration und End-to-End Testing

# 1. Unit-Testing:

Unit Testing konzentriert sich auf das Testen einzelner isolierter Einheiten oder Komponenten einer Anwendung. Diese Einheiten können Funktionen, Methoden oder Klassen sein. Das Ziel von Unit Tests ist es, sicherzustellen, dass jede Einheit der Software ordnungsgemäß funktioniert und die erwarteten Ergebnisse liefert.

**Beispiel für die Todo-App:**

Unit Testing: Wir könnten einzelne Funktionen oder Methoden innerhalb unserer Todo-App testen, z.B. eine Funktion zum Hinzufügen eines neuen Tasks oder eine Methode zum Löschen eines vorhandenen Tasks.

# 2. Integration Testing:

Integration Testing befasst sich mit dem Testen von Interaktionen zwischen verschiedenen Komponenten oder Einheiten einer Anwendung. Es überprüft, ob diese Komponenten ordnungsgemäß zusammenarbeiten und integriert sind.

**Beispiel für die Todo-App:**

Integration Testing: Wir könnten testen, ob die Funktion zum Hinzufügen eines neuen Tasks erfolgreich mit der Datenbank kommuniziert und den Task korrekt speichert. Dies würde die Interaktion zwischen der Benutzeroberfläche und der Datenbank überprüfen.

# 3. End-to-End Testing:

End-to-End Testing beinhaltet das Testen einer vollständigen Anwendung oder eines kompletten Workflows, wie sie von einem Benutzer durchgeführt wird. Es simuliert den gesamten Ablauf einer Anwendung von Anfang bis Ende, um sicherzustellen, dass alle Komponenten ordnungsgemäß zusammenarbeiten und das gewünschte Verhalten liefern.

**Beispiel für die Todo-App:**

End-to-End Testing: Hier würden wir den gesamten Workflow eines Benutzers simulieren, angefangen vom Öffnen der App über das Hinzufügen eines neuen Tasks bis hin zum Anzeigen und Löschen von vorhandenen Tasks. Wir würden überprüfen, ob alle Funktionen nahtlos zusammenarbeiten und das erwartete Verhalten zeigen.

## Zusammenfassung:

# Unit Testing:

    überprüft einzelne Einheiten oder Komponenten der Anwendung.

# Integration Testing:

    testet die Interaktionen zwischen den verschiedenen Einheiten.

# End-to-End Testing:

    überprüft den gesamten Ablauf einer Anwendung vom Start bis zum Ziel.

Für jede Art von Test gibt es spezifische Tools und Methoden, die angewendet werden können, um sicherzustellen, dass die Anwendung ordnungsgemäß funktioniert und den Anforderungen entspricht.
