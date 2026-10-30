# MTG Life Counter

A two-player life counter for Magic: The Gathering. No ads, works offline, and installs to your home screen.

Set the phone between the two players. Each half faces one player.

## How to use

- **Tap** the left side of your half to lose 1 life, or the right side to gain 1.
- **Hold** either side to keep counting. After a couple of seconds it counts by 5.
- **✦ button** in the corner of your half: changes your background. There are six themes to cycle through.
- **↺** (left of the center bar): tap it twice to start a new game.
- **Medallion** (center): set the starting life (20 / 30 / 40), start a new game, or pick who goes first.
- **Coin** (right of the center bar): randomly picks who goes first.

Life totals and backgrounds are saved, so closing the app won't lose your game. The screen stays on while you play, on phones that support it.

## Put it on your phone

1. On GitHub, go to **Settings → Pages**, set the source to **Deploy from a branch**, and pick `main` / root.
2. Open the URL GitHub gives you (`https://<user>.github.io/mtg/`) on your phone.
3. **iPhone:** Share → *Add to Home Screen*. **Android:** ⋮ menu → *Install app* / *Add to Home screen*.

It opens full screen like a normal app.

## Files

- `index.html`: the whole app (HTML, CSS and JS in one file)
- `manifest.webmanifest`, `icon*.{svg,png}`: home-screen install (currently the Arcane Gem icon)
- `icons/`: all four icon options (gem, duel, flame, heart). To switch, copy `icons/<name>-{180,192,512}.png` over `icon-{180,192,512}.png`.
- `sw.js`: offline caching
