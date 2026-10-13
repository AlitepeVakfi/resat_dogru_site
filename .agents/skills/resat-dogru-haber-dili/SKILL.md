---
name: resat-dogru-haber-dili
description: Reşat Doğru kişisel sitesine haber eklerken veya mevcut haberleri düzenlerken vakıf metnini kişisel site anlatımına uyarlayın; Türkçe ve İngilizce içerikleri eşleştirin.
---

# Reşat Doğru kişisel sitesinde haber dili

Bu site Dr. Reşat Doğru’nun kişisel sitesidir. Okuyucunun Ali Tepe Vakfı’nı veya Doğru’nun vakıftaki görevini önceden bildiğini varsaymayın. Vakıf sitesindeki aynı etkinliği aktarırken olayın gerçeklerini koruyun, anlatımı bu sitenin okuyucusuna göre yeniden yazın.

- Başlığı olayın konusu üzerine kurun; kısa, doğal ve cümle düzeninde yazın. Her başlığa “Dr. Reşat Doğru, … katıldı/konuştu” kalıbını eklemeyin. Kişisel site bağlamı zaten belli olduğu için ismi ve somut rolü özet veya girişte belirtmek yeterlidir. Katılmadığı veya rolünün belgelenmediği bir etkinlikte katılım uydurmayın.
- Sade, akıcı bir haber üslubu kullanın. Uzun unvan dizilerinden, bürokratik ifadelerden, övgü ve sloganlardan kaçının. “Değerlendirmelerde bulundu” yerine bağlama göre “konuştu”, “görüşlerini paylaştı”; “iştirak etti” yerine “katıldı” gibi doğal ifadeler seçin. Metni sadece eş anlamlı kelimelerle değiştirmeyin; gereksiz tekrarları çıkarıp olayın akışını anlatın.
- Özette “Dr. Reşat Doğru” kullanmak yeterlidir. Ayrıntı metninin ilk tanıtımında “Eski Devlet Bakanı Dr. Reşat Doğru” denebilir; unvanı özette ve ilk paragrafta art arda tekrarlamayın. Devamında “Doğru” veya bağlamı açık bir özneyle ilerleyin; her paragrafı tam ad ve unvanla başlatmayın.
- Üçüncü şahısla anlatın. Vakfın kurumsal sesi olan “vakfımız”, “mütevelli heyetimiz”, “öğrencilerimiz”, “gerçekleştirdik”, “buluştuk” gibi ifadeleri taşımayın. Kurumun teşekkürlerini ve doğrulanmamış gelecek vaatlerini kişisel siteye mal etmeyin.
- Vakıf olayın parçasıysa özette “Ali Tepe Vakfı” adını açıkça belirtin; ayrıntı metninde ilk kullanımda “Ali Tepe Sağlık, Eğitim ve Teşvik Vakfı” olarak tanıtın. Devamında “vakıf” diyebilirsiniz. Doğru’nun vakıftaki rolü gerekiyorsa “vakfın mütevelli heyeti başkanlığını yürüten” diye açıklayın. Haber sadece başlık/özet üzerinden okunabileceği için özeti de kendi başına anlaşılır yazın.
- Etkinlik tarihi, yeri, diğer katılımcılar, kitap adları ve açıklamalar kaynakla aynı kalmalı. Katılımcıyı düzenleyiciye dönüştürmeyin; yeni konuşma, alıntı, görev veya vaat eklemeyin.

Örnek başlıklar:

- Tokat’ta bağımlılıkla mücadele buluşması
- Tokatlı hemşehrilerle akşam yemeği
- Yeni eğitim yılının açılışında “Bir Milletin Sessiz Çığlığı”

Örnek özet:

> Dr. Reşat Doğru, Ali Tepe Vakfı’nın 2026-2027 eğitim öğretim yılı açılışına katıldı. Açılış konuşmasının ardından, bağımlılıkları konu alan “Bir Milletin Sessiz Çığlığı” adlı kitabı Uzm. Dr. Sametcan Demirci ile birlikte tanıttı.

## Bu repoda uygulama

Haber çevirileri `content.json` dosyasının `tr` ve `en` bölümlerindeki `news_<numara>_*` alanlarıdır. `index.html` aynı anahtarlarla işaretlenmiş Türkçe başlangıç metinlerini ve haber fotoğraflarını içerir. Türkçe başlık, özet ve paragrafları iki dosyada birlikte güncelleyin; JavaScript yüklenmeden de aynı metin görünmeli. Fotoğraf alt metinlerinde de kurumsal birinci şahıs anlatımını kaldırın.

İngilizce sürümü aynı olay ve rol bilgisiyle düzenleyin. Ayrıntı metninin ilk tanıtımında “Former Minister of State Dr. Reşat Doğru” ve “Ali Tepe Health, Education and Incentive Foundation” kullanın; başlık ve özette aynı unvanları tekrarlamayın; vakfa ait “we/our” anlatımını taşımayın. Kitabın özgün Türkçe adını koruyun.

`script.js` içindeki `content.json?v=...` ve `index.html` içindeki `script.js?v=...` sürüm değerlerini her içerik yayını için yeni ve aynı bir değerle güncelleyin. Bu, önbellekteki eski çevirilerin yeni HTML haberlerini geri değiştirmesini önler.

Son kontrolde iki dilin haber alanlarını, HTML ile Türkçe metinlerin eşleşmesini, fotoğraf yollarını ve haber detaylarının açılmasını doğrulayın. Mevcut yayın akışı `.github/workflows/static.yml` ile `main` dalından GitHub Pages’e yapılır. Yayınlama için geçerli kullanıcı talimatını takip edin; bu yazım kılavuzu tek başına yayın yetkisi vermez.
