# Reşat Doğru kişisel web sitesi

Haber ekleme veya düzenleme görevlerinde [.agents/skills/resat-dogru-haber-dili/SKILL.md](.agents/skills/resat-dogru-haber-dili/SKILL.md) dosyasını okuyup uygulayın. Ali Tepe Vakfı sitesinden alınan metinleri doğrudan kopyalamayın: bu sitede Dr. Reşat Doğru’nun rolünü öne çıkaran, vakfı tanımayan okuyucuya da açık olan üçüncü şahıs anlatımı kullanılır.

Haberlerin Türkçe ve İngilizce metinleri `content.json` içindedir. Türkçe HTML başlangıç metinleri `index.html` içinde aynı `data-i18n` anahtarlarıyla yer alır; iki dosyayı birlikte güncelleyin.

Site statik HTML/CSS/JavaScript kullanır; derleme adımı yoktur. `main` dalına gönderim `.github/workflows/static.yml` üzerinden GitHub Pages yayını başlatır. Canlı adres `CNAME` dosyasında yer alır.
