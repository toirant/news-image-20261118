# news-image-20261118 — The World in One Day

Entry for the make.fun bounty **"Sum up 18 November's world news in one image"**
($250 shared by the top 50 entries).

## The image

A 1024×1024 newspaper front page summing up Wednesday 18 November 2026:

- **Lead:** Ukraine cripples the Crimea (Kerch Strait) bridge — its road arch
  collapses into the sea, days before Trump meets Putin and Xi.
- **Trump lands in Manila** for Quad talks as the ASEAN summit ends and the
  chair passes to Singapore.
- **Bahrain intercepts new Iranian drones** — air-raid alerts, then the
  all-clear; the US says no damage. Third attack in five days.
- **MS Dhoni bows out of the IPL**, retiring as a player and returning as
  Chennai's mentor for 2027.
- **Also today:** the US loses its measles-free status; a Russian military
  plane crashes in Siberia (19 killed); Britain sanctions Israeli settlement
  firms; Germany and Norway fund Ukraine air defences; Cyclone Akvan nears
  India's Andhra coast; Taiwan awaits a $14bn US arms decision.

## Timing note

The image was built from the news reported so far on 18 November 2026
(as of about 03:00 UTC); the day was still in progress, so it covers the
day so far and can be refreshed after the day ends.

## How it runs

`main.ts` (Node 22, standard library only) copies the baked-in `entry.png`
to `$MAKEFUN_OUTPUT_DIR/entry.png`. Both runs write identical bytes.

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see LICENSE.
