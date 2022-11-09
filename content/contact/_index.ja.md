---
title: "お問い合わせ先"
date: 2022-02-23T17:03:34+09:00
weight: 12
 
---

# お問い合わせ先

{{< smtpjs-form >}}
    <!-- todo: input系(input,select,textarea) をショートコード化する -->
    <div>
        {{< label text="お名前" name="full_name" required="true" >}}
        <input
            class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
            id="full_name" name="お名前" type="text" placeholder="Example : 新井 美奈" required>
    </div>

    <div>
        {{< label text="会社名" name="company_name" required="true" >}}
        <input
            class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
            id="company_name" name="会社名" type="text" placeholder="Example : アンダース" required>
    </div>

    <div>
        {{< label text="メールアドレス" name="email" required="true" >}}
        <input
            class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
            id="email" name="email" type="text" placeholder="Example : andaze@example.com" required>
    </div>

    <div>
        {{< label text="電話番号" name="contact_number" >}}
        <input
            class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
            id="contact_number" name="電話番号" type="text" placeholder="Example : 1234567890">
    </div>

    <div>
        {{< label text="部門" name="department" required="true" >}}
        <select 
            name="部門"
            class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
            id="department"
            required
        >
            <option class="text-gray-500 bg-gray-100 bg-opacity-50" selected>--選択してください--</option>
            <option value="経営全般">経営全般</option>
            <option value="営業">営業</option>
            <option value="マーケティング・広報・企画">マーケティング・広報・企画</option>
            <option value="情報システム">情報システム</option>
            <option value="人事・総務">人事・総務</option>
            <option value="その他">その他</option>
        </select>
    </div>

    <div>
        {{< label text="役職" name="post" required="true" >}}
        <select 
            name="役職"
            class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
            id="post"
            required
        >
            <option class="text-gray-500 bg-gray-100 bg-opacity-50" selected>--選択してください--</option>
            <option value="経営者・役員">経営者・役員</option>
            <option value="部長クラス">部長クラス</option>
            <option value="課長・係長・主任クラス">課長・係長・主任クラス</option>
            <option value="一般社員">一般社員</option>
            <option value="個人">個人</option>
            <option value="学生">学生</option>
            <option value="その他">その他</option>
        </select>
    </div>

    <div>
        {{< label text="お問い合わせ内容" name="inquiry_content" required="true" >}}
        <textarea
            class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
            rows="6" name="お問い合わせ内容" id="inquiry_content" placeholder="2,000字以内でお書きください。"
        >
            </textarea>
    </div>

    {{< agreement-to-terms >}}

    <div class="text-center">
    {{< submit class="transition rounded p-5 lg:p-6 bg-black text-white hover:text-black hover:bg-white border border-black" >}}
    </div>

{{< /smtpjs-form >}}
