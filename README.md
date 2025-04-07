# Ứng dụng Dịch Anh-Việt (English-Vietnamese Translation Chatbot)

Ứng dụng dịch văn bản và giọng nói giữa tiếng Anh và tiếng Việt sử dụng API Gemini của Google.

![Ứng dụng Dịch Anh-Việt](https://i.imgur.com/placeholder.png)

## Demo

Bạn có thể dùng thử ứng dụng tại: [https://language-chatbot-kvrdm1cy6-nganlinh4s-projects.vercel.app](https://language-chatbot-kvrdm1cy6-nganlinh4s-projects.vercel.app)

## Tính năng

- Dịch văn bản giữa tiếng Anh và tiếng Việt
- Tự động nhận diện ngôn ngữ đầu vào
- Hỗ trợ nhập liệu bằng giọng nói
- Giao diện chat thân thiện
- Tùy chọn mô hình Gemini (nhanh, trung bình, chậm)

## Cài đặt và Chạy Ứng dụng

### Yêu cầu

- [Node.js](https://nodejs.org/) (phiên bản 14.0 trở lên)
- [npm](https://www.npmjs.com/) hoặc [yarn](https://yarnpkg.com/)
- API key của Google Gemini (lấy tại [Google AI Studio](https://aistudio.google.com/app/apikey))

### Các bước cài đặt

1. **Tải mã nguồn về máy**

   ```bash
   git clone https://github.com/your-username/language-chatbot.git
   cd language-chatbot
   ```

   Hoặc tải xuống file ZIP từ GitHub và giải nén.

2. **Cài đặt các gói phụ thuộc**

   ```bash
   npm install
   ```

   hoặc nếu bạn dùng yarn:

   ```bash
   yarn install
   ```

3. **Chạy ứng dụng ở môi trường phát triển**

   ```bash
   npm run dev
   ```

   hoặc:

   ```bash
   yarn dev
   ```

   Ứng dụng sẽ chạy tại địa chỉ [http://localhost:5173](http://localhost:5173)

4. **Xây dựng ứng dụng cho môi trường sản xuất**

   ```bash
   npm run build
   ```

   hoặc:

   ```bash
   yarn build
   ```

   Kết quả build sẽ được lưu trong thư mục `dist`.

## Cách sử dụng

1. **Cấu hình API key**
   - Nhấp vào biểu tượng cài đặt (bánh răng) ở góc trên bên phải
   - Nhập API key Gemini của bạn
   - Chọn mô hình phù hợp với nhu cầu của bạn:
     - Gemini 2.0 Flash Lite (Nhanh)
     - Gemini 2.0 Flash (Trung bình)
     - Gemini 2.5 Pro Preview (Chậm)
   - Nhấn "Lưu"

2. **Dịch văn bản**
   - Nhập văn bản tiếng Anh hoặc tiếng Việt vào ô nhập liệu
   - Nhấn "Gửi" hoặc phím Enter
   - Ứng dụng sẽ tự động nhận diện ngôn ngữ và dịch sang ngôn ngữ còn lại

3. **Dịch giọng nói**
   - Nhấp vào nút "Mic"
   - Nói bằng tiếng Anh hoặc tiếng Việt
   - Nhấp "Dừng" khi bạn đã nói xong
   - Ứng dụng sẽ chuyển giọng nói thành văn bản và dịch sang ngôn ngữ còn lại

## Triển khai lên Vercel

Để triển khai ứng dụng lên Vercel:

1. Tạo tài khoản tại [Vercel](https://vercel.com)
2. Cài đặt Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Đăng nhập vào Vercel:
   ```bash
   vercel login
   ```
4. Triển khai ứng dụng:
   ```bash
   vercel
   ```
5. Để triển khai phiên bản sản xuất:
   ```bash
   vercel --prod
   ```

## Triển khai lên GitHub Pages

Để triển khai ứng dụng lên GitHub Pages:

### Triển khai tự động với GitHub Actions

1. Đẩy mã nguồn lên GitHub repository của bạn
2. GitHub Actions sẽ tự động xây dựng và triển khai ứng dụng khi bạn đẩy mã lên nhánh `main`
3. Ứng dụng sẽ được triển khai tại `https://your-username.github.io/language-chatbot`

### Triển khai thủ công

1. Cài đặt gói gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Xây dựng và triển khai ứng dụng:
   ```bash
   npm run deploy
   ```
   hoặc:
   ```bash
   node deploy.js
   ```

## Công nghệ sử dụng

- [React](https://reactjs.org/) - Thư viện JavaScript để xây dựng giao diện người dùng
- [Vite](https://vitejs.dev/) - Công cụ xây dựng frontend hiện đại
- [Google Gemini API](https://ai.google.dev/) - API dịch thuật và xử lý ngôn ngữ tự nhiên

## Lưu ý

- Ứng dụng này sử dụng API Gemini trực tiếp từ trình duyệt của người dùng
- API key được lưu trong localStorage của trình duyệt
- Trong môi trường sản xuất thực tế, bạn nên xem xét việc tạo một backend để xử lý các cuộc gọi API và bảo vệ API key

## Giấy phép

[MIT](LICENSE)
