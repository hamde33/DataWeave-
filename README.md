# DataWeave- — Data Synchronization Engine

[![License](https://img.shields.io/badge/license-AGPLv3-blue.svg)]()
[![CI](https://img.shields.io/badge/ci-passing-brightgreen)]()

ملخّص
-----
DataWeave- هو محرك مزامنة بيانات مرن وخفيف يسمح بمزامنة جداول بين قواعد بيانات متعددة (MySQL, PostgreSQL, MSSQL) و/أو CSV. مناسب للـ ETL البسيط، التكامل بين أنظمة داخلية، أو كقاعدة لبناء خدمة مزامنة أكبر.

لماذا DataWeave-؟
--------------
- مرن: يدعم connectors متعددة وملف إعدادات قابل للتعديل.
- موثوق: checkpoints، retry، سجلّات مفصّلة.
- قابل للتوسيع: تصميم modular لسهولة إضافة connectors أو سياسات تعارض.

الميزات الأساسية (MVP)
-----------------------
- One-way sync بين مصدر وهدف.
- Initial full load + incremental (timestamp/hash).
- Mapping بسيط للأعمدة + تحويلات بسيطة.
- تسجيل structured logs وملف أخطاء يومي.
- Scheduler بسيط وواجهات API أساسية.

المتطلبات السريعة
-----------------
- Node.js >= 18
- Docker (اختياري لاختبارات التكامل)

بدء سريع (محلي)
----------------
1. انسخ المستودع
   ```bash
   git clone https://github.com/hamde33/DataWeave-.git
   cd DataWeave-
   ```
2. تثبيت الحزم
   ```bash
   npm ci
   ```
3. تشغيل build
   ```bash
   npm run build
   ```
4. تشغيل اختبارات الوحدة
   ```bash
   npm run test:unit
   ```

مساهمة / حقوق الاستخدام
-----------------------
المشروع مرخّص تحت GNU AGPLv3 — راجع ملف LICENSE. للمساهمة، اتبع إرشادات CONTRIBUTING.md وأضف توقيع DCO أو CLA حسب الإجراء المتّبع.

روابط سريعة
-----------
- ملف الإعدادات: src/config/default.ts
- أمثلة: ./examples/sample-config.yaml
- اختبارات: ./tests

Contact
-------
email: your-email@example.com

English summary
---------------
DataWeave- is a modular data sync engine for simple one-way and two-way syncs between DBs and CSV. See documentation above for quick start.