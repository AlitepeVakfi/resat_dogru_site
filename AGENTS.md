# Reşat Doğru kişisel web sitesi

Haber ekleme veya düzenleme görevlerinde [.agents/skills/resat-dogru-haber-dili/SKILL.md](.agents/skills/resat-dogru-haber-dili/SKILL.md) dosyasını okuyup uygulayın. Ali Tepe Vakfı sitesinden alınan metinleri doğrudan kopyalamayın: bu sitede Dr. Reşat Doğru’nun rolünü öne çıkaran, vakfı tanımayan okuyucuya da açık olan üçüncü şahıs anlatımı kullanılır.

Haberlerin Türkçe ve İngilizce metinleri `content.json` içindedir. `news` listesi kimlikleri, adresleri, tarihleri ve fotoğrafları tutar. İçerik değişikliklerinden sonra `python3 scripts/build_news.py` çalıştırın; ana sayfa kartlarını ve `haberler/` altındaki statik HTML sayfalarını birlikte güncelleyin. Üretilen sayfaları elle düzenlemeyin. Türkçe başlangıç metinleri aynı `data-i18n` anahtarlarıyla üretilir.

Site statik HTML/CSS/JavaScript kullanır; haber sayfalarını üretmek için yalnızca Python 3 standart kütüphanesi gerekir. `main` dalına gönderim `.github/workflows/static.yml` üzerinden GitHub Pages yayını başlatır. Canlı adres `CNAME` dosyasında yer alır.
