---
author: kadimelifba
pubDatetime: 2024-12-02T07:44:00+03:00
# modDatetime: 2024-12-02T07:44:00+03:00
title: JPEG Nevi Resimlerin Tevcihi
slug: jpeg-nevi-resimlerin-tevcihi
featured: true
draft: false
tags:
  - jpeg
  - tevcih
  - exif
description:
  Bazı hallerde üzerinde çalıştığımız tarhları muhtelif Github hesaplarında muhafaza etmek isteriz.
  İşbu hallerde nasıl hareket edeceğimizi anlatan bir rehberdir.
---

İşbu neşrimiz, Magnus Hovland Hoff'un "JPEG Orientation" isimli makalesinin tercümesidir.

Müellifin Şahsî Sahifesi: [https://magnushoff.com/](https://magnushoff.com/) \
Makalenin Aslı: [https://magnushoff.com/articles/jpeg-orientation/](https://magnushoff.com/articles/jpeg-orientation/)

## Fihrist

## Mukaddime

Dikine cihetli (vesîkalık) bir aks-i şavk çekmek istediğimizde, çekekler ekseriya vaziyetin farkındadırlar ve
elde edilen tasvirin tepesi sahnenin tepesine denk gelecek şekilde ol tasviri kayıt edebilirler.
Her nasılsa, vesîkalıklar bazen yanlış tevcihle görünürler; mesela tasvirin tepesi ânîden sahnenin tepesi yerine tasvirin elde edildiği andaki çekeğin
tepesine denk düşmeye başlar. İşbu haldeki mücrim, EXIF'in tevcih yaftasının desteklenmemesidir.

## EXIF Tevcih Yaftası

JPEG is a standard for compressing and encoding images. However, a .jpg file generally contains information in addition to the image.
The file format of such a .jpg file is usually the Exchangeable image file format, EXIF, which specifies how to include these details,
including the geographic coordinates where the photo was taken, timestamp, details about the camera that was used and its settings and,
the subject of our study, specification of which orientation the the camera was held in as it took the photo.

A camera will always store the image data such that the top of the image corresponds to the top of the camera.
It will use its orientation sensor to find a value for the orientation tag to allow compliant software to show the photo the right way up.
This is a very simple strategy to implement in a camera compared to rotating the full image data to match,
at the expense of requiring all JPEG decoders to be able to compensate for this. As you no doubt have realized,
this is a complication many decoders simply ignore.

The orientation tag can assume one of eight values, one for each possible rotation as well as a mirrored version of each of those rotations.
We will develop an algorithm to correct the orientation of a .jpg file where the presence of the mirrored variants will make sense
even if they do not make sense from a camera user's perspective.

The eight possible orientations are presented in the following table. The correct rendering in all cases looks like a normal F. Software
that does not take the orientation tag into account will render a result that looks like the second row.
The images in this row do not have the EXIF orientation tag set. The images in the last row have the orientation tag set,
and compliant software should render the last row to look like the first row.
