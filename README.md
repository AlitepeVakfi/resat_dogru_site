# Dr. Reşat Doğru kişisel web sitesi

Canlı site: https://www.resatdogru.com.tr/

Haber ekleme ve düzenleme kuralları: [.agents/skills/resat-dogru-haber-dili/SKILL.md](.agents/skills/resat-dogru-haber-dili/SKILL.md).

Türkçe ve İngilizce haber içerikleri `content.json` dosyasındadır. `index.html` içindeki Türkçe başlangıç metinleri de eş zamanlı güncellenmelidir. Haberlerde Dr. Reşat Doğru’nun rolü öne çıkarılır; vakıf adına birinci şahıs anlatımı kullanılmaz.

Statik siteyi yerelde önizlemek için `python -m http.server 8000` çalıştırın. `main` dalına gönderilen değişiklikler GitHub Actions üzerinden GitHub Pages’e yayımlanır.
