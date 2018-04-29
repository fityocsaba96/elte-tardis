# TARDIS - fejlesztői útmutató
[![Travis CI](https://travis-ci.org/fityocsaba96/elte-tardis.svg?branch=master)](https://travis-ci.org/fityocsaba96/elte-tardis)
[![Heroku](https://heroku-badge.herokuapp.com/?app=elte-tardis&svg=1)](https://elte-tardis.herokuapp.com/)
[![Greenkeeper](https://badges.greenkeeper.io/fityocsaba96/elte-tardis.svg)](https://greenkeeper.io/)

Kliens alkalmazás, amely **Angular 5** keretrendszer és **npm** csomagkezelő használatával valósul meg. Az alkalmazás CORS kéréseket is kezel, ennek érdekében készült egy proxy szerver is, **PHP** felhasználásával.

### Előfeltételek
Az alkalmazás kipróbálásához a következők telepítésére van szükség.
- [**Node.js**](https://nodejs.org/en/download/)
- [**PHP**](http://php.net/downloads.php)

### Telepítés, indítás
A repository leklónozása után a `client/tardis` mappából `npm run startup` futtatása. Ezzel települnek a szükséges dependenciák, elindul a kliens és a proxy szerver, illetve megnyílik a böngészőben az alkalmazás.

### Tesztelés
A component és service osztályokhoz készültek tesztek, **Karma** és **Jasmine** használatával. Ezeket az `npm run test` paranccsal lehet lefuttatni. A tesztek lefutása után code coverage jelentés található meg a `client/tardis/coverage` mappában.

### Automatizálás
Be lett vezetve CI rendszernek [**Travis CI**](https://travis-ci.org/fityocsaba96/elte-tardis). Minden commit esetén statikus kódellenőrzőket futtat, lefuttatja a teszteket, lebuildeli az alkalmazást, illetve ha masterbe történt a commit, akkor deployolja a klienst és szervert is [**Heroku**](https://elte-tardis.herokuapp.com/)-ra, ahol kipróbálható az alkalmazás.

### Extra eszközök
A **TSLint**-et használjuk statikus kódellenőrző eszköznek, az `npm run lint` paranccsal indítható. Az ajánlott szabálykészletén felül még hozzá lett építve a **Codelyzer** és a **SonarTS**, amik tovább bővítik szabályait. Ezeken kívül még használatban van a **Greenkeeper**, ami figyeli a repositoryt, és amint fontos frissítés érkezik egy dependenciához, pull requestet küld annak beépítésére, aminek biztonságosságát a hozzá lefuttatott CI tesztek alátámaszthatják.