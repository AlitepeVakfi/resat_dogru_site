---
name: resat-dogru-haber-dili
description: Reşat Doğru kişisel sitesine haber eklerken veya mevcut haberleri düzenlerken vakıf metnini kişisel site anlatımına uyarlayın; Türkçe ve İngilizce içerikleri eşleştirin.
---

# Reşat Doğru kişisel sitesinde haber dili

Bu site Dr. Reşat Doğru’nun kişisel sitesidir. Okuyucunun Ali Tepe Vakfı’nı veya Doğru’nun vakıftaki görevini önceden bildiğini varsaymayın. Vakıf sitesindeki aynı etkinliği aktarırken olayın gerçeklerini koruyun, anlatımı bu sitenin okuyucusuna göre yeniden yazın.

- Başlıkta ve girişte Dr. Reşat Doğru’nun somut rolünü öne çıkarın: katıldı, konuştu, kitabını tanıttı, imzaladı, hemşehrileriyle buluştu. Katılmadığı veya rolünün belgelenmediği bir etkinlikte katılım uydurmayın.
- İlk tanıtımda “Devlet Eski Bakanı Dr. Reşat Doğru” ifadesini kullanın. Sonraki cümlelerde “Dr. Reşat Doğru”, “Dr. Doğru” veya “Doğru” kullanılabilir. Unvanı her paragrafta tekrarlamayın.
- Üçüncü şahısla anlatın. Vakfın kurumsal sesi olan “vakfımız”, “mütevelli heyetimiz”, “öğrencilerimiz”, “gerçekleştirdik”, “buluştuk” gibi ifadeleri taşımayın. Kurumun teşekkürlerini ve doğrulanmamış gelecek vaatlerini kişisel siteye mal etmeyin.
- Vakıf olayın parçasıysa ilk anlamlı kullanımda “Ali Tepe Sağlık, Eğitim ve Teşvik Vakfı” olarak tanıtın; devamında “Ali Tepe Vakfı” veya “vakıf” diyebilirsiniz. Doğru’nun vakıftaki rolü gerekiyorsa “vakfın mütevelli heyeti başkanlığını yürüten” diye açıklayın. Haber sadece başlık/özet üzerinden okunabileceği için özeti de kendi başına anlaşılır yazın.
- Etkinlik tarihi, yeri, diğer katılımcılar, kitap adları ve açıklamalar kaynakla aynı kalmalı. Katılımcıyı düzenleyiciye dönüştürmeyin; yeni konuşma, alıntı, görev veya vaat eklemeyin.

Örnek giriş:

> Devlet Eski Bakanı Dr. Reşat Doğru, Ali Tepe Sağlık, Eğitim ve Teşvik Vakfı’nda düzenlenen “Bir Milletin Sessiz Çığlığı” adlı kitabın tanıtımına ve 2026-2027 eğitim öğretim yılı açılış programına katıldı.

## Bu repoda uygulama

Haber çevirileri `content.json` dosyasının `tr` ve `en` bölümlerindeki `news_<numara>_*` alanlarıdır. `index.html` aynı anahtarlarla işaretlenmiş Türkçe başlangıç metinlerini ve haber fotoğraflarını içerir. Türkçe başlık, özet ve paragrafları iki dosyada birlikte güncelleyin; JavaScript yüklenmeden de aynı metin görünmeli. Fotoğraf alt metinlerinde de kurumsal birinci şahıs anlatımını kaldırın.

İngilizce sürümü aynı olay ve rol bilgisiyle düzenleyin. “Former Minister of State Dr. Reşat Doğru” ve “Ali Tepe Health, Education and Incentive Foundation” kullanın; vakfa ait “we/our” anlatımını taşımayın. Kitabın özgün Türkçe adını koruyun.

Son kontrolde iki dilin haber alanlarını, HTML ile Türkçe metinlerin eşleşmesini, fotoğraf yollarını ve haber detaylarının açılmasını doğrulayın. Mevcut yayın akışı `.github/workflows/static.yml` ile `main` dalından GitHub Pages’e yapılır. Yayınlama için geçerli kullanıcı talimatını takip edin; bu yazım kılavuzu tek başına yayın yetkisi vermez.
