# Moment 4.2 i kursen DT207G, Backend-baserad webbutveckling
**Namn:** Emma Larsson\
**Student-ID:** emla2309

### Beskrivning av lösning
Detta är en webbplats som används för att hantera ett CV med arbetslivserfarenheter. Innehållet på webbplatsen är skyddat och kräver registrering och inloggning för att kunna nås.

Webbplatsen använder sig av Fetch API för att hämta data (GET) och skicka data (POST) från och till en extern webbtjänst. Metoden POST används både för att skapa en ny användare och för att logga in en redan existerande användare. GET används för att hämta information om arbetslivserfarenheter.

När en användare loggas in skapas en JWT-token på den anropade webbtjänsten som skickas till klienten. Denna sparas i användarens localStorage. Tokenet används för att bibehålla användarens autetiseringsstatus mellan olika sessioner. Webbläsaren kontrollerar autentiseringen vid varje förfrågan till en skyddad resurs. Om tokenet är giltigt ges användaren tillgång till resursen, annars krävs en ny inloggning.

### Länk till publicerad webbplats
https://moment42dt207g.netlify.app

### Länk till APIets GitHub-repo
https://github.com/QmmaLarsson/moment4.1_dt207g.git 