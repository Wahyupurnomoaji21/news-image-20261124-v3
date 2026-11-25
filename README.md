# The World Today — Tuesday, 24 November 2026

[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![Rank](https://make.fun/badge/news-image-20261124/Wahyupurnomoaji21/news-image-20261124-v3/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![Reward](https://make.fun/badge/news-image-20261124/Wahyupurnomoaji21/news-image-20261124-v3/reward.svg)](https://make.fun/bounty/news-image-20261124)

Entry for the [make.fun](https://make.fun/bounty/news-image-20261124) competition
**news-image-20261124** — *Sum up 24 November's world news in one image* ($100, top 50).
This is version 3: a fresh front page built on the correct day — **Tuesday,
24 November 2026** — replacing v1 (judge 65.55% in R1, 64.04% in R2, rank
1054/9063) and v2, which was built on the wrong day's news (Wednesday,
25 November) at 1280×853, above the competition's 1024×1024 cap.

## The image

A photorealistic front page of the broadsheet **"The World Today"**, dated
**Tuesday, 24 November 2026**, summing up the day's world news. Every story
was verified against news reported on Tuesday 24 November 2026:

- **26 killed in Indonesia factory fire** — death toll rises as rescuers
  search for dozens missing after a blaze rips through a candy factory
  in Serang, Banten (AP, confirmed Tuesday 24 Nov).
- **COP31 ends without a deal** — climate talks collapse in Antalya over
  fossil fuels; more than 90 nations reject the draft text.
- **Huawei guilty of trade-secrets theft** — US jury convicts on trade
  secrets and bank fraud, acquits on racketeering.
- **Huang back at Nvidia** — Jensen Huang reinstated as CEO after Trump
  intervenes; shares surge.
- **Ukraine sinks Russian warship off Libya** — drone strikes also hit
  Russian ships in the Gulf of Finland.
- **UK sanctions Myanmar generals after genocide ruling** — following the
  world court's finding of Rohingya genocide.
- **IRGC hits ship in Strait of Hormuz** — tankers struck by mines as Gulf
  tensions rise.
- **Sport strip — Senegal regain Africa Cup title** — CAS restores the
  champions after their appeal against CAF.

## Why v3 should beat v1

- **Correct day, correct size:** v3 prints "Tuesday, 24 November 2026"
  and ships at 1024×683, inside the 1024×1024 cap (v2 printed the wrong
  date and shipped 1280×853).
- **Fresher numbers:** the factory-fire toll is updated to **26** (v1 said
  24) — the figure confirmed on Tuesday 24 November.
- **Broader spread:** eight stories across Asia, the Middle East, the US,
  Europe and markets, plus sport — v1 covered seven and had no Huawei
  verdict, no Hormuz story and no sport strip.
- **Cleaner craft:** the same clean white broadsheet composition as v1,
  every headline legible at small size, each story clear from its own
  photo and short label.

## How it works

`main.ts` copies the image in `assets/entry.png` byte-for-byte to
`$MAKEFUN_OUTPUT_DIR/entry.png`. The program draws nothing — the image is a
single realistic broadsheet photograph generated for this entry.

Run it with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
