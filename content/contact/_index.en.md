---
title: "Contact"
date: 2022-02-23T17:03:34+09:00
weight: 12
 
---


<h1 class="pb-12">Contact Us</h1>

{{< smtpjs-form >}}
    <!-- todo: input系(input,select,textarea) をショートコード化する -->
    <div class="mb-5">
        {{< label text="Full Name" name="full_name" required="true" >}}
        <input
            class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
            id="full_name" name="お名前" type="text" placeholder="Example : Mina Arai" required>
    </div>

    <div class="mb-5">
        {{< label text="Company Name" name="company_name" required="true" >}}
        <input
            class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
            id="company_name" name="会社名" type="text" placeholder="Example : Andaze Co., Ltd." required>
    </div>

    <div class="mb-5">
        {{< label text="Email Adress" name="email" required="true" >}}
        <input
            class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
            id="email" name="email" type="text" placeholder="Example : andaze@example.com" required>
    </div>

    <div class="mb-5">
        {{< label text="Phone Number" name="contact_number" >}}
        <input
            class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
            id="contact_number" name="電話番号" type="text" placeholder="Example : 1234567890">
    </div>

    <div class="mb-5">
        {{< label text="Department" name="department" required="true" >}}
        <select 
            name="部門"
            class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
            id="department"
            required
        >
            <option class="text-gray-500 bg-gray-100 bg-opacity-50" selected>--Please select Department--</option>
            <option value="経営全般">Business management</option>
            <option value="営業">Sales</option>
            <option value="マーケティング・広報・企画">Marketing</option>
            <option value="情報システム">IT</option>
            <option value="人事・総務">General administration</option>
            <option value="その他">Others</option>
        </select>
    </div>

    <div class="mb-5">
        {{< label text="Post" name="post" required="true" >}}
        <select 
            name="役職"
            class="w-full px-4 py-3 mb-3 text-black placeholder-gray-300 bg-gray-100 bg-opacity-50 border border-white focus:ring-0 focus:border-white"
            id="post"
            required
        >
            <option class="text-gray-500 bg-gray-100 bg-opacity-50" selected>--Please select Department--</option>
            <option value="経営者・役員">Director</option>
            <option value="部長クラス">General Manager</option>
            <option value="課長・係長・主任クラス">Manager</option>
            <option value="一般社員">Employee / Staff</option>
            <option value="個人">Self-employed</option>
            <option value="学生">Student</option>
            <option value="その他">Others</option>
        </select>
    </div>

    <div class="mb-10">
        {{< label text="Inquiry Details" name="inquiry_content" required="true" >}}
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
