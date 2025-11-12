# Tips Calculator — GitHub-ready

এই ফোল্ডারটিতে আপনার Tip Calculator প্রজেক্ট GitHub-এ আপলোড করার জন্য প্রয়োজনীয় সব ফাইল আছে এবং ছোট কিছু বাগও ঠিক করা হয়েছে (ট্যাক্স 5% সঠিকভাবে গণনা করা ইত্যাদি)।

## যা দেয়ানো আছে
- `index.html` — প্রকল্প পেজ
- `style.css` — স্টাইলশীট
- `script.js` — জাভাস্ক্রিপ্ট (কিছু বাগ ফিক্স করা হয়েছে)
- `LICENSE` — MIT লাইসেন্স
- `README.md` — এই ফাইল

## লোকালভাবে চালানো
ফাইলগুলো একই ফোল্ডারে রেখে ব্রাউজারে `index.html` খুললেই কাজ করবে।

## GitHub-এ আপলোড (আমি `main` ব্রাঞ্চ` ধরে নিচ্ছি)
নীচের কমান্ডগুলো টার্মিনালে রান করান (নিজের `username` এবং `repo-name` ব্যবহার করবেন):

```bash
git init
git add .
git commit -m "Initial commit — Tip Calculator"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

> যদি আগে থেকে রিমোট থাকে, `git remote remove origin` করে পুনরায় `git remote add origin ...` ব্যবহার করতে পারেন।

## GitHub Pages (Live link পেতে)
1. GitHub এ আপনার রিপোজিটরি ওপেন করুন।
2. **Settings → Pages** এ যান।
3. **Source** থেকে `Branch: main` এবং `Folder: / (root)` সিলেক্ট করুন, তারপর Save করুন।
4. কয়েক মিনিটের মধ্যে পেজ বিল্ড হয়ে লাইভ হবে। লিংক হবে:

```
https://<your-username>.github.io/<your-repo-name>/
```

> নিশ্চিত করুন যে `index.html` রিপো রুটে আছে (কোন সাবফোল্ডারে নয়), এবং `total_per_person` সেকশন ডিফল্টরূপে লুকানো আছে—Calculate ক্লিক করলে দেখা যাবে।

## সমস্যা হলে
- যদি পেজ না আসে, GitHub Actions বা Pages এর বিলে ত্রুটি দেখুন (Settings → Pages section)।
- যদি কোনো ব্রাউজার কেশuing সমস্যা দেখেন, ব্রাউজার ক্যাশ ক্লিয়ার করে পেজ রিফ্রেশ করুন (Ctrl+F5)।

**শুভকামনা!** যদি চান আমি সরাসরি জিপ বানিয়ে দিই (আপনি ডাউনলোড করে GitHub-এ আপলোড করতে পারবেন)।  
