# তোমার Portfolio — ডিপ্লয়/ইনস্ট্রাকশন (বাংলা)

আমি পুরো React + Vite + Tailwind প্রজেক্ট তৈরি করে zip করে দিয়েছি। নিচে ধাপে ধাপে কীভাবে তোমার সাইট লাইভ করতে হবে — GUI (কোড না জানলে) পদ্ধতি।

## ডাউনলোড
1. ChatGPT থেকে `my-portfolio.zip` ডাউনলোড করো এবং তোমার কম্পিউটারে আনজিপ করো।

## বিকল্প A — সহজ (GitHub ও Netlify দিয়ে, কেউ কোড না রান করে)
আমি সুপার-সহজ GUI পদ্ধতি বলছি (terminal না জানলেও পর্যাপ্ত):

### GitHub এ ফাইল আপলোড করা (ওয়েব ব্রাউজার থেকে)
1. যদি GitHub অ্যাকাউন্ট না থাকে: https://github.com/signup এ যান এবং একটা অ্যাকাউন্ট বানাও।
2. লগিন করার পর উপরে ডানদিকে "+" তে ক্লিক করে **New repository** বেছে নাও।
3. রেপো নাম দাও: `my-portfolio` (বা চাইলে অন্য নাম) — Public রেখে *Create repository* চাপো।
4. রেপো খোলার পর **Add file → Upload files** এ ক্লিক করো।
5. তোমারunzipped ফোল্ডারের ভিতরের সব ফাইল এবং ফোল্ডার (index.html, package.json, src/, public/...) drag & drop করে ও Commit changes করো।
   - যদি GitHub ওয়েব একসাথে অনেক বড় ফাইল আপলোডে সমস্যা করে, তাহলে ছোটগুলো আলাদাভাবে আপলোড করো বা ZIP আপলোড → Unzip করে GitHub এ আপলোড করো (GitHub ওয়েব UI তে ফোল্ডার structure ঠিক রেখে আপলোড করো)।

### Netlify এ রিপোজিটরি কানেক্ট করে Deploy করা
1. https://app.netlify.com/ এ গিয়ে সাইন আপ / লগইন করো।
2. "Add new site" → "Import from Git" নির্বাচন করো।
3. Git provider হিসেবে **GitHub** নির্বাচন করে Netlify কে GitHub অ্যাক্সেস দাও (Authorize)।
4. তোমার `my-portfolio` রেপো নির্বাচন করো।
5. Build command: `npm run build`
   Publish directory: `dist`
6. Deploy site চাপো — Netlify নিজেই GitHub থেকে কোড নিয়ে build করবে এবং সাইট লাইভ দিয়ে দেবে।
7. ডিপ্লয় সম্পন্ন হলে Netlify একটি URL দিবে (যেমন: `https://some-name.netlify.app`) — সেটাই তোমার লাইভ লিংক।

## বিকল্প B — যদি তুমি GitHub না করতে চাও (কিন্তু এই ক্ষেত্রে লোকালি build করতে হবে)
- তোমাকে Node.js (v16+) ইন্সটল করতে হবে, তারপর:
  ```bash
  npm install
  npm run build
  ```
  → এইটা `dist/` ফোল্ডার তৈরি করবে। তারপর Netlify এর ড্যাশবোর্ডে "Sites → Add new site → Deploy manually" → drag-and-drop করে dist ফোল্ডার আপলোড করো।

## ইমেইল (Contact button)
- `src/components/Contact.jsx` ভিতরে `mailto:youremail@example.com` আছে। তোমার ইমেইল রাখতে চাইলে GitHub এ আপলোড করার পর:
  - GitHub Repo → `src/components/Contact.jsx` → Edit → `youremail@example.com` পরিবর্তন করে Commit করো। Netlify auto-redeploy করবে এবং নতুন ইমেইল কাজ করবে।

## সমস্যা হলে
- যদি Netlify build fail করে, কপি করে build log এর error নীচে দিয়ে দিও; আমি দেখবো কী ভুল।
- যদি GitHub আপলোডে সমস্যা হয়, আমাকে বলো — আমি ধাপে ধাপে টেক্সট দিয়ে গাইড করবো।

**ভালো মনে রাখো:** আমি সার্ভারে তোমার জায়গায় push/কোনো অ্যাকাউন্টে লগইন করে deploy করতে পারি না। তবু আমি পুরো সোর্স কোড, assets ও রিডমি তৈরি করে দিলাম — তোমাকে জাস্ট জিপ ডাউনলোড করে GitHub/Netlify-এ আপলোড করতেই হবে। তুমি যদি আমাকে বলো, আমি প্রতিটি ধাপ ভিজিবলি গাইড করে থাকব। শুভকামনা! 😊
