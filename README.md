# TARDIS

[![Greenkeeper badge](https://badges.greenkeeper.io/fityocsaba96/elte-tardis.svg)](https://greenkeeper.io/)

Optimális órarend készítő webalkalmazás az ELTE lágymányosi karainak használatára

### Mi ez?

Egy webes frontend alkalmazás Angular (2+) használatával, aminek segítségével optimális IK-s, TTK-s vagy TÁTK-s órarendet lehet készíteni egyszerűen. A felhasználónak csak minimális időbefektetésre van szüksége, ennek ellenére megkapja a kívánságainak megfelelő órarendet.

### Használat

- Először hozzá kell adnia a kívánt tárgyakat a tárgyak neveinek megadásával
- Ezután már csak ki kell választania, hogy milyen kényelmi feltételeket szeretne
  - Alapértelmezett feltétel a gyakorlatoknál az ütközések elkerülése
  - Ezen kívül több választható feltétel is van
    - Előadás ütköztetése vagy ütközés elkerülése előadásonként
    - Kurzus oktatójának minimum átlagértékelése Markmyprofessor-on
    - Szabad idősávok és egyéb elfoglaltságok megadása (ebéd, munka stb.)
    - Minimum kezdési időpont
    - Maximum végzési időpont
    - Maximum szünet órák között

### Működés

A program megvizsgálja a hozzáadott tárgyak kurzusainak minden kombinációját a TTK TO adatbázisában található aktuális adatok alapján és összeállítja az összes olyan lehetséges órarendet, ami megfelel az összes kiválasztott feltételnek. Végül megjeleníti ezeket az optimális órarendeket.
