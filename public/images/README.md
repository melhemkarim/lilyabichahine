# Where to put your photos

The site works fine with no images at all (empty spots show a soft warm
gradient), so you can preview and deploy first, then drop photos in whenever
you have them — no code changes needed, just matching file names.

```
public/images/
  about/
    portrait.jpg        → About page portrait
    portrait-wide.jpg   → Home page hero background (wide/landscape works best)
  work/
    our-sea-2/
      cover.jpg
      gallery-1.jpg
      gallery-2.jpg
      gallery-3.jpg
    abjad-hawwaz/
      cover.jpg
      gallery-1.jpg
      gallery-2.jpg
    extended-cities/
      cover.jpg
      gallery-1.jpg
    etreinte/
      cover.jpg
    exquisite-corpse/
      cover.jpg
      gallery-1.jpg
      gallery-2.jpg
    our-sea-1/
      cover.jpg
      gallery-1.jpg
      gallery-2.jpg
      gallery-3.jpg
    agreement-for-photography-provision/
      cover.jpg
```

Tips:

- Cover images look best around 1600×900px (16:9).
- Gallery stills look best square-ish, at least 1000×1000px.
- Keep file sizes reasonable (under ~500KB each) so pages load fast — export
  as JPG at ~80% quality.
- Adding, renaming, or removing a project? Edit `lib/data.ts` — the `coverImage`
  and `gallery` fields are just file paths, so point them at whatever you add
  here.
