# AngularProjekt

## Beskrivning

Projektet är en enkel Angular-applikation som demonstrerar grundläggande funktionalitet i Angular, inklusive komponenter, routing, services, och användning av Material Design-komponenter.

Målet med projektet var att skapa en webbplats för ett fiktivt universitet eller högskola, där det 
ska gå att lista tillgängliga kurser - samt kunna skapa ett ramschema av en upp
sättning kurser.

## Teknologier

- **Angular**: För att bygga och strukturera applikationen.
- **Angular Material**: För att skapa en responsiv och användarvänlig design.
- **HttpClient**: För att hämta data från ett API.
- **LocalStorage**: För att spara och hämta användardata lokalt i webbläsaren.

## Struktur

- **app.component.html**: Innehåller struktur för header, router outlet, och footer.
- **header.component.ts**: Innehåller navigeringslogik för applikationen.
- **kurser.component.ts**: Hanterar visning och filtrering av kurser.
- **courses.service.ts**: Service för att hämta kursdata från API och `localStorage`.
