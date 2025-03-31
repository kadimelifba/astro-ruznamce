---
author: kadimelifba
pubDatetime: 2025-03-30T09:00:00+03:00
# modDatetime: 2024-11-24T10:37:00+03:00
title: Mâliyetsiz Ağnâme İbdâı ve Neşri
slug: maliyetsiz-agname-ibdai-ve-nesri
featured: true
draft: false
tags:
  - ağnâme
  - ferman
  - ruznamçe
description: Yazmayı sevenler ve yazdıklarını kendi ağnâmelerinde neşretmek isteyenler için hazırladığım bir derstir.
---

Yazmayı sevenler ve yazdıklarını kendi ağnâmelerinde neşretmek isteyenler için hazırladığım bir derstir.
Bu derste, hiç bir ücret ödemeden yazılarınızı nasıl neşredebileceğinizi, emirgâh kullanmayı, NPM ile çalışmayı, Git ile saklarınızı muhâfaza etmeyi ilh. taallüm edeceksiniz.

Haydi gayrete gelelim!

## Fihrist

## Girizgâh

### Kuracağımız Nerm-efzârlar

- PowerShell
- Node.js ve NPM
- Git Kademe İdâresi
- Visual Studio Code
- Cloudflare Wrangler

### Kullanacağımız Hizmetler

- Cloudflare
- GitHub
- AstroPaper

### Yazma Usûlümüz

- Markdown

## Birinci Fasıl: Nerm-efzârların Kurulması:

### PowerShell Kurma

PowerShell bir emirgâhtır(command line). Bu nerm-efzârı(software) cihâzımıza tâlîmat vermek için kullanacağız.
Evvela emirgâhı [buradan](https://GitHub.com/PowerShell/PowerShell/releases) indirelim.
İndirirken kendi cihâzımıza münasip olan mazrûfu(packet) ve nihaî kademeyi(version) seçmeye dikkat edelim.

İndirme tamamlanınca, mazrûfu kullanarak nerm-efzârı kuralım. Kurma tamamlanınca fermanı koşalım ve alttaki resimdekini kendi cihâzımızda gördüğümüzden emin olalım.

![PowerShell Emirgâhı!](https://ambar.kadimelifba.com/ruznamce/maliyetsiz-agname-ibdai-ve-nesri/emirgah.jpg "PowerShell Emirgâhı")

### Node.js Kurma

Node.js mizban(server) fermanlarını koşmak için kullanılan bir saygâhdır(runtime). Node.js sâyesinde JavaScript ile yazılmış fermanları mizban tarafında koşabiliriz. Lâkin, biz JavaScript ile sak(code) yazmayacağız. Node.js kurmamızın asıl sebebi Node.js ile beraber gelen NPM nerm-efzârını elde etmektir. NPM bir menba takip fermanıdır. Evvelce kurduğumuz PowerShell üzerinde çalışacak ve tarhımızda(project) kullanacağımız menbaları indirme, berûzlama(update) ilh. gibi işlerde kullanılacaktır.

[Buradaki](https://nodejs.org/en/download) tâlîmatları takip edip Node.js ve NPM'i cihâzımıza kuralım.

Kurma tamamlanınca fermanlarımızın kademelerine bakalım. Kademeleri görmek için alttaki tâlîmatları emirgâh vâsıtasıyla cihâzımıza verip cevapları tetkik edelim:

```ps1

# fnm üzerinde seçili olan Node.js kademesi
fnm current

# Node.js kademesi:
node -v

# npm kademesi:
npm -v

```

![PowerShell Emirgâhı!](https://ambar.kadimelifba.com/ruznamce/maliyetsiz-agname-ibdai-ve-nesri/emirgah-kademeler.jpg "PowerShell Emirgâhı")

### Git Kurma

Git bir kademe idâresi nerm-efzârıdır. Yazmak bir vetîredir. Bugün bir mevzûda yazarız, yarın başka bir mevzûda. İşbu sebeple yazdıklarımızı kısım kısım neşretmemiz gerekir.
İşte burada kademelendirme devreye girer. Kademe, 1.3.7 gibi bir sayıdır. Her yeni yazımızda, yâhut yazımızdaki bir hatâyı giderdiğimizde bu kademeyi yükseltiriz. İlaveten, her kademenin yanına şerh düşeriz ki istikbalden dönüp baktığımızda yaptığımız işleri görebilelim ve neyi niye yaptığımızı da bilebilelim.

Kademeyi a.b.c şeklinde şifrelersek:

- yaptığımız iş büyük bir işe ise a'yı bir arttırırız, (misâl: arayüzü ya nesakı(theme) değiştirdik)
- yaptığımız nispeten orta ehemmiyette ise b'yi bir arttırırız, (misâl: yeni bir kabiliyet ilâve ettik)
- yaptığımız küçük bir iş ise c'yi bir arttırırız. (misâl: bir hatâyı giderdik)

Git'in kademe idâresinden hariç olarak teşrîk-i mesâi ve tarhları muhâfaza gibi kullanma sahaları da vardır. Biz Git'i evvela yazılarımızı muhâfaza için kullanacağız. Ve eğer talep olursa ilerde izâh ederim, Git'i neşir vetîresinde de kullanmak mümkündür ve hatta tavsiye edilir.

[Buradaki](https://git-scm.com/downloads) tâlîmatları takip edip Git'i cihâzımıza kuralım.

### VS Code Kurma

VS Code bir sak tertipçisidir. Yani bu nerm-efzârı kullanarak ferman yazarız. Biz ise makālelerimizi yazmak için kullanacağız.

[Buradaki](https://code.visualstudio.com/download) tâlîmatları takip edip VS Code'u cihâzımıza kuralım.

### Cloudflare Wrangler Kurma

Node.js ve NPM kurmuşturk Cloudflare Wrangle nerm-efzârı NPM ile kurulur ve Node.js vâsıtasıyla kullanılır. Bu nerm-efzârı her ibdâ ettiğimiz tarhın içine kurarız ve mevzubahis tarhı neşretmek için kullanırız. Âtî bablarda, tarh ibdâsına geldiğimizde Wrangler'i nasıl kuracağımızı ve nasıl kullanacağımızı göreceğiz.

## İkinci Fasıl: Hizmetler için Hesapların Açılması:

Yazılarımızı neşretmek için faydalanmamız gereken bazı hizmetler var. Bu fasılda işbu hizmetleri anlatacağız.

### GitHub Hesabı Açma

Yazılarımızı kendi cihâzımızda muhâfaza etmemiz mümkündür. Lâkin, bir ârıza anında o vakte kadar yazdıklarımızı kaybedebiliriz. Aqlın alâmeti tedbirdir diyerek, yazılarımızı kendi cihâzımıza ilaveten haricî bir mizbanda muhâfaza edeceğiz. İşte bu hizmeti GitHub vermektedir. GitHub'ı nasıl kullanacağız diye sorarsanız, Git ile beraber kullanacağız.

[Bu sayfadan](https://dash.cloudflare.com/login) yeni bir GitHub hesabı açalım.

#### Emirgâhta GitHub Ayarlarını Yapma

#### AstroPaper'ı Çekme

### Cloudflare Hesabı Açma

Ağnâmemizi neşredebilmek için yazdıklarımızı herkesin erişebileceği bir yere koymamız lâzımdır. Bu yere beled(hosting) diyeceğiz. Cloudflare bize işbu beled hizmetini ücretsiz vermektedir.

[Bu sayfadan](https://dash.cloudflare.com/login) yeni bir Cloudflare hesabı açalım.

## Üçüncü Fasıl: Markdown Dersi

### Numune Bir Sayfa Hazırla

## Dördüncü Fasıl: Neşir

## Mehazlar

https://docs.GitHub.com/en/get-started/using-git/about-git
https://GitHub.com/satnaing/astro-paper

https://developers.cloudflare.com/workers/wrangler/install-and-update/
https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/

Wrangler ile neşretme
https://docs.astro.build/en/guides/deploy/cloudflare/#how-to-deploy-a-site-using-wrangler
