# Dr. Reşat Doğru kişisel web sitesi

Canlı site: https://www.resatdogru.com.tr/

Haber ekleme ve düzenleme kuralları: [.agents/skills/resat-dogru-haber-dili/SKILL.md](.agents/skills/resat-dogru-haber-dili/SKILL.md).

Türkçe ve İngilizce haber içerikleri `content.json` dosyasındadır. Haberlerde Dr. Reşat Doğru’nun rolü öne çıkarılır; vakıf adına birinci şahıs anlatımı kullanılmaz.

Haber kartları ana sayfada kısa özetlerle gösterilir. Haber listesi `/haberler/`, her haberin metni ve fotoğrafları `/haberler/<slug>/` adresindedir. Bu adresler gerçek statik HTML dosyalarıdır; doğrudan açılabilir ve yenilenebilir.

Haber eklemek veya düzenlemek için `content.json` içindeki `tr` ve `en` haber alanlarını, ayrıca `news` listesindeki kimlik, adres, tarih ve fotoğraf bilgilerini güncelleyin. Sonra `python3 scripts/build_news.py` çalıştırın. Bu komut ana sayfadaki haber kartlarını ve `haberler/` altındaki sayfaları birlikte yeniler. Üretilen HTML dosyalarını da commit edin; doğrudan düzenlemeyin. Yayın akışı aynı komutu otomatik çalıştırır. Sayfalar JavaScript kapalıyken de Türkçe içerikleri gösterir.

Statik siteyi yerelde önizlemek için `python -m http.server 8000` çalıştırın. `main` dalına gönderilen değişiklikler GitHub Actions üzerinden GitHub Pages’e yayımlanır.
