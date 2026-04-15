# Custom DuelingBook (Chrome Extension)

A Chrome extension that adds customization options to [DuelingBook](https://www.duelingbook.com/) and makes it more streamer friendly.

> **Forked from [killburne/custom-duelingbook](https://github.com/killburne/custom-duelingbook)** and converted from a Tampermonkey userscript to a standalone Chrome extension. No Tampermonkey required.

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (toggle in the top right)
4. Click **Load unpacked** and select the `custom-duelingbook` folder
5. Go to [DuelingBook](https://www.duelingbook.com/) — you'll see a gear icon in the bottom left corner to open settings

## What Changed from the Original

- **No Tampermonkey needed** — runs as a native Chrome extension (Manifest V3)
- `GM_config` replaced with a built-in settings panel (stored in localStorage)
- `GM_xmlhttpRequest` replaced with standard `fetch()`
- `GM_openInTab` replaced with `window.open()`
- All features from the original userscript are preserved

## Features

- Custom sleeves and profile pictures
- Background image customization
- Dark mode for chat, log, and cards
- Macro system with variables and automation
- Chat censoring with customizable word lists
- Custom button images (dice, coin, token, etc.)
- Field zone and deck zone graphic replacements
- Phase and turn button styling
- Full-art card support and custom card artwork
- RPS game customization
- Summon chant system
- YDKE deck import/export (Ctrl+C / Ctrl+V in deck constructor)
- Hotkey to open ruling database (F2 by default)
- Watcher name obfuscation and duel notes hiding
- Token image customization
- Import/Export settings as JSON

## Hotkeys

- `F2` (configurable): Opens the ruling database entry for the current card in the detail view
- `Ctrl+C` (in deck constructor): Copies deck as YDKE URL
- `Ctrl+V` (in deck constructor): Imports deck from YDKE URL in clipboard

## Macros

Using the macro function you can do many things, for example:
- Send a message in chat
- Add cards from the Deck to your hand
- Special Summon monsters from the Deck in Attack/Defense Position
- Send a card from the Deck to the GY

### Syntax
- Categories: `-- My Category Name`
- Macros: `Button Name | message to send`
- Multiple actions in one Macro: `Button name | message 1 | message 2 | message 3`
- Variables: `${variableName}`
- Functions: `${functionName(param)}`
- Functions with multiple parameters: `${functionName(param1~param2~param3)}`

### Variables

|Variable|Holds|
|---|---|
|`currentLP`|Your current lifepoints|
|`halfOfLP`|Half of your current lifepoints|
|`topUsername`|The username of the player at the top|
|`botUsername`|The username of the player at the bottom (usually yourself)|
|`atkAllMonsters`|The combined ATK of all monsters on the field|
|`defAllMonsters`|The combined DEF of all monsters on the field|
|`atkAllFaceUpMonsters`|The combined ATK of all face up monsters on the field|
|`defAllFaceUpMonsters`|The combined DEF of all face up monsters on the field|

### Functions

|Function|Action Performed|
|---|---|
|`waitInMs(number)`|Waits for the specified amount of milliseconds before the next action|
|`addFromDeckToHand(cardNames)`|Adds cards from your Deck to your hand|
|`sendFromDeckToGY(cardNames)`|Sends cards from your Deck to your GY|
|`specialFromDeckInAtk(cardName)`|Opens zone selection and SS from Deck in ATK|
|`specialFromDeckInDef(cardName)`|Opens zone selection and SS from Deck in DEF|
|`specialFromDeckInAtkRandomZone(cardNames)`|SS from Deck to random zone in ATK|
|`specialFromDeckInDefRandomZone(cardNames)`|SS from Deck to random zone in DEF|
|`specialFromDeckInAtkToZone(cardName~zone)`|SS from Deck to specific zone in ATK|
|`specialFromDeckInDefToZone(cardName~zone)`|SS from Deck to specific zone in DEF|
|`specialFromExtraDeckInAtk(cardName)`|Opens zone selection and SS from Extra Deck in ATK|
|`specialFromExtraDeckInDef(cardName)`|Opens zone selection and SS from Extra Deck in DEF|
|`specialFromExtraDeckInAtkRandomZone(cardNames)`|SS from Extra Deck to random zone in ATK|
|`specialFromExtraDeckInDefRandomZone(cardNames)`|SS from Extra Deck to random zone in DEF|
|`specialFromExtraDeckInAtkToZone(cardName~zone)`|SS from Extra Deck to specific zone in ATK|
|`specialFromExtraDeckInDefToZone(cardName~zone)`|SS from Extra Deck to specific zone in DEF|
|`sendFromExtraDeckToGY(cardNames)`|Sends cards from Extra Deck to GY|
|`specialSummonToken()`|Special Summons a token|
|`specialSummonTokenToZone(zone)`|SS a token to specific zone|
|`specialSummonMultipleTokens(count)`|Summons multiple tokens|
|`sendAllControllingMonstersFromFieldToGY(position~faceUpDown)`|Sends all your monsters to GY|
|`sendAllOwnSpellTrapsFromFieldToGY()`|Sends all your Spells/Traps to GY|
|`sendFromFieldToGY(cardNames)`|Sends specific cards from field to GY|
|`banishFromGY(cardNames)`|Banishes cards from GY|
|`banishFromHand(cardNames)`|Banishes cards from hand|
|`banishFromDeck(cardNames)`|Banishes cards from Deck|
|`activateSpellTrapFromDeck(cardNames)`|Activates a Spell/Trap from Deck|
|`activateSpellTrapFromDeckToZone(cardName~zone)`|Activates a Spell/Trap from Deck to specific zone|
|`specialFromGYInAtk(cardName)`|Opens zone selection and SS from GY in ATK|
|`specialFromGYInDef(cardName)`|Opens zone selection and SS from GY in DEF|
|`specialFromGYInAtkRandomZone(cardNames)`|SS from GY to random zone in ATK|
|`specialFromGYInDefRandomZone(cardNames)`|SS from GY to random zone in DEF|
|`specialFromGYInAtkToZone(cardName~zone)`|SS from GY to specific zone in ATK|
|`specialFromGYInDefToZone(cardName~zone)`|SS from GY to specific zone in DEF|
|`discard(cardNames)`|Discards cards from hand to GY|
|`addFromGYToHand(cardNames)`|Adds cards from GY to hand|
|`fromBanishToTopOfDeck(cardNames)`|Returns banished cards to top of Deck|
|`fromGYToTopOfDeck(cardNames)`|Returns GY cards to top of Deck|
|`fromFieldToTopOfDeck(cardNames)`|Returns field cards to top of Deck|
|`shuffleDeck()`|Shuffles your Deck|
|`moveZone(cardName~zone)`|Moves a card to a specific zone|
|`overlayMonsters(cardName~materialName)`|Overlays a monster with materials|
|`returnAllFromHandToTopOfDeck()`|Returns all hand cards to top of Deck|
|`flipDownMonsters(cardNames)`|Flips down monsters|
|`flipUpMonsters(cardNames)`|Flips up monsters|
|`changeToAtk(cardNames)`|Changes monsters to ATK|
|`changeToDef(cardNames)`|Changes monsters to DEF|
|`normalSetToRandomZone(cardName)`|Normal Sets to random zone|
|`normalSetToZone(cardName~zone)`|Normal Sets to specific zone|
|`normalSummonToRandomZone(cardName)`|Normal Summons to random zone|
|`normalSummonToZone(cardName~zone)`|Normal Summons to specific zone|
|`addCountersToCards(count~cardNames)`|Adds counters to cards|
|`removeCountersFromCards(count~cardNames)`|Removes counters from cards|

### Zones
- Monster zones: M1 - M5
- Extra monster zones: EL (left) and ER (right)
- Spell/Trap zones: S1 - S5
- Opponent's monster zones: OM1 - OM5

### Examples
- Greet opponent: `Hello | Hello ${topUsername}, good luck have fun.`
- Halve LP: `LP/2 | /sub ${halfOfLP}`
- Send garnets to GY: `Send DPE Garnets | ${sendFromDeckToGY(Destiny HERO - Celestial~Destiny HERO - Dasher)}`
- SS from Deck: `SS Driver | ${specialFromDeckInAtkRandomZone(PSY-Frame Driver)}`

## License

MIT (original by Killburne)
