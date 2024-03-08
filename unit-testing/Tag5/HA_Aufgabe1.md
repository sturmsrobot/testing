# Hausaufgabe vom 8.3.2024,

# Aufgabe 1:

## 1.1 Warum erstellt man verschiedene Umgebungen (dev,testing,staging,prd)?

-> Man erstellt verschiedene Umgebungen (dev, testing, staging, prd), um eine klare Trennung zwischen Entwicklungs-, Test- und Produktionsumgebungen zu haben. Dadurch können Änderungen und neue Funktionen zuerst in einer isolierten Umgebung getestet werden, bevor sie in die Produktionsumgebung übernommen werden. Dies hilft, Fehler zu vermeiden und die Stabilität des Systems sicherzustellen.

## 1.2 Welches Tool haben wir genutzt, um einen End-to-End Test zu simulieren (Falls du keinen Ansatz hast, gucke in die Vorlesung)?

-> Das Tool, das wir genutzt haben, um einen End-to-End Test zu simulieren, ist **Cypress**.

## 1.3 Versuche zu erklären, was wir mit diesem Tool versucht haben zu simulieren.

-> Mit Cypress haben wir versucht, den gesamten Ablauf einer Anwendung zu testen, indem wir verschiedene Interaktionen durchführen, wie z.B. Klicken, Eingaben in Formulare, Navigation zwischen Seiten usw. Dabei wird die Anwendung in einer realistischen Umgebung simuliert, um sicherzustellen, dass sie ordnungsgemäß funktioniert.

## 1.4 (Zusatz) Wie kann ich mit Hilfe von einer Datei verschiedene Umgebungen aufsetzen?

-> Mit Hilfe einer Datei können verschiedene Umgebungen aufgesetzt werden, indem Umgebungsvariablen entsprechend gesetzt werden. Diese Variablen können dann von der Anwendung genutzt werden, um spezifische Konfigurationen für jede Umgebung zu laden.

Die Umgebungen, die auf diese Weise eingerichtet werden können, umfassen typischerweise:

    Entwicklungsumgebung (dev): Hier werden neue Funktionen entwickelt und getestet. Die Umgebung ist oft lokal und spiegelt möglicherweise nicht die Produktionsumgebung genau wider. Entwickler verwenden diese Umgebung, um schnell Änderungen vorzunehmen und zu testen.

    Testumgebung (test): Dies ist eine Umgebung, in der automatisierte Tests durchgeführt werden, um sicherzustellen, dass die Anwendung ordnungsgemäß funktioniert, bevor sie in die Produktionsumgebung übernommen wird. Es können auch manuelle Tests durchgeführt werden, um spezifische Szenarien zu überprüfen.

    Staging-Umgebung (staging): Diese Umgebung ähnelt der Produktionsumgebung und wird oft verwendet, um Änderungen zu überprüfen, bevor sie in die Produktionsumgebung bereitgestellt werden. Es ermöglicht eine genauere Vorhersage des Verhaltens der Anwendung in der Produktionsumgebung.

    Produktionsumgebung (prd): Dies ist die tatsächliche Umgebung, in der die Anwendung live ist und von Endbenutzern genutzt wird. Änderungen werden hier erst nach gründlicher Überprüfung in den anderen Umgebungen bereitgestellt.

** Durch das Setzen von Umgebungsvariablen können spezifische Konfigurationen für jede dieser Umgebungen geladen werden, was eine flexiblere und sicherere Entwicklung und Bereitstellung ermöglicht. **
