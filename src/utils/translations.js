// UI translations for English and Vietnamese
const translations = {
  en: {
    // App title and description
    appTitle: 'Translator',
    appDescription: 'Enter text or use voice to translate between English and Vietnamese.',

    // Chat interface
    emptyChatMessage: 'Start typing or use the microphone to translate between English and Vietnamese',
    inputPlaceholder: 'Type a message in English or Vietnamese...',
    sendButton: 'Send',
    micButton: 'Mic',
    micButtonTitle: 'Record voice message',
    stopRecording: 'Stop',
    loadingMessage: 'Translating...',

    // Settings
    settingsTitle: 'Settings',
    apiKeyLabel: 'Gemini API Key:',
    apiKeyPlaceholder: 'Enter your Gemini API key',
    getApiKeyLink: 'Get your API key from Google AI Studio',
    modelLabel: 'Model:',
    themeLabel: 'Theme:',
    systemTheme: 'System Default',
    lightTheme: 'Light',
    darkTheme: 'Dark',
    interfaceLanguageLabel: 'Interface Language:',
    cachingLabel: 'Conversation History:',
    cachingEnabled: 'Enabled',
    cachingDisabled: 'Disabled',
    cachingDescription: 'Includes previous messages for better context',
    saveButton: 'Save',
    cancelButton: 'Cancel',

    // Models
    modelFast: 'Gemini 2.0 Flash Lite (Fast)',
    modelMedium: 'Gemini 2.0 Flash (Medium)',
    modelSlow: 'Gemini 2.5 Pro Experimental (Slow)',

    // Font Size Slider
    fontSizeLabel: 'Text Size:',
    fontSizeAdjustTitle: 'Adjust text size for easier reading',
    fontSizeAdjustAriaLabel: 'Adjust text size',

    // Font Selection
    fontFamilyLabel: 'Font:',
    fontQuestrial: 'Questrial',
    fontSourceCodePro: 'Source Code Pro',

    // Errors
    apiKeyError: 'Please configure your Gemini API key in settings',
    voiceMessageSent: 'Voice message sent...',
    micAccessError: 'Could not access microphone. Please check your browser permissions.',
    micPermissionDenied: 'Microphone access denied',
    errorPrefix: 'Error:',

    // Voice Recording
    autoStopLabel: 'Auto-Stop Voice Recording:',
    autoStopEnabled: 'Enabled',
    autoStopDisabled: 'Disabled',
    autoStopDescription: 'Automatically stop recording after detecting silence',

    // PWA
    pwaMode: 'App Mode',
    pwaModeDescription: 'Running as installed application',
    installApp: 'Install App',
    installAppDescription: 'Install this app on your device for better experience',

    // Meta SEO Generator
    metaSeoTitle: 'Meta SEO Generator',
    metaSeoDescription: 'Create a redirect page with custom meta tags for social media sharing.',
    metaSeoDestinationUrl: 'Destination URL:',
    metaSeoDestinationUrlPlaceholder: 'https://example.com/landing-page/',
    metaSeoTitleLabel: 'Meta Title:',
    metaSeoTitlePlaceholder: 'Enter title for social media sharing',
    metaSeoDescriptionLabel: 'Meta Description:',
    metaSeoDescriptionPlaceholder: 'Enter description for social media sharing',
    metaSeoImageLabel: 'Meta Image URL:',
    metaSeoImagePlaceholder: 'https://example.com/image.jpg',
    metaSeoRedirectDelayLabel: 'Redirect Delay:',
    metaSeoSeconds: 'seconds',
    metaSeoGenerateButton: 'Generate Code',
    metaSeoGeneratedCodeTitle: 'Generated HTML Code',
    metaSeoCodeCopy: 'Copy Code',
    metaSeoCodeCopied: 'Copied!',
    metaSeoUsageInstructions: 'Save this code as an HTML file and upload it to your web server.',
    metaSeoUrlRequired: 'Destination URL is required',
    metaSeoRedirectingIn: 'Redirecting in {seconds} seconds...',
    metaSeoTabTitle: 'Meta SEO',
    metaSeoRedirectPage: 'Redirect Page',
    metaSeoRedirecting: 'Redirecting...',
    metaSeoRedirectDesc: 'You will be redirected to the destination page in a few seconds.',
    metaSeoRedirectMethodLabel: 'Redirect Method:',
    metaSeoRedirectMethodBoth: 'Both (Meta + JavaScript)',
    metaSeoRedirectMethodMeta: 'Meta Refresh (SEO Friendly)',
    metaSeoRedirectMethodJs: 'JavaScript (Smoother UX)',
    metaSeoSeoTips: 'SEO Best Practices:',
    metaSeoSeoTip1: '• Use this for social sharing landing pages only',
    metaSeoSeoTip2: '• For permanent redirects, use server-side 301 redirects',
    metaSeoSeoTip3: '• Add these meta tags to your main page when possible',

    // Login
    loginTitle: 'Login to Translator',
    usernameLabel: 'Username:',
    usernamePlaceholder: 'Enter your username',
    passwordLabel: 'Password:',
    passwordPlaceholder: 'Enter your password',
    loginButton: 'Login',
    logoutButton: 'Logout',
    loginError: 'Invalid username or password',
    loginHelp: 'Use one of the following credentials:',
    loginHint: 'For demo purposes, try simple credentials like "user" and "password".',
    welcomeMessage: 'Welcome, {username}!'
  },
  vi: {
    // App title and description
    appTitle: 'Công cụ Dịch',
    appDescription: 'Nhập văn bản hoặc sử dụng giọng nói để dịch giữa tiếng Anh và tiếng Việt.',

    // Chat interface
    emptyChatMessage: 'Bắt đầu nhập hoặc sử dụng micrô để dịch giữa tiếng Anh và tiếng Việt',
    inputPlaceholder: 'Nhập tin nhắn bằng tiếng Anh hoặc tiếng Việt...',
    sendButton: 'Gửi',
    micButton: 'Mic',
    micButtonTitle: 'Ghi âm tin nhắn thoại',
    stopRecording: 'Dừng',
    loadingMessage: 'Đang dịch...',

    // Settings
    settingsTitle: 'Cài đặt',
    apiKeyLabel: 'Khóa API Gemini:',
    apiKeyPlaceholder: 'Nhập khóa API Gemini của bạn',
    getApiKeyLink: 'Lấy khóa API từ Google AI Studio',
    modelLabel: 'Mô hình:',
    themeLabel: 'Giao diện:',
    systemTheme: 'Mặc định hệ thống',
    lightTheme: 'Sáng',
    darkTheme: 'Tối',
    interfaceLanguageLabel: 'Ngôn ngữ giao diện:',
    cachingLabel: 'Lịch sử hội thoại:',
    cachingEnabled: 'Bật',
    cachingDisabled: 'Tắt',
    cachingDescription: 'Bao gồm các tin nhắn trước đó để có ngữ cảnh tốt hơn',
    saveButton: 'Lưu',
    cancelButton: 'Hủy',

    // Models
    modelFast: 'Gemini 2.0 Flash Lite (Nhanh)',
    modelMedium: 'Gemini 2.0 Flash (Trung bình)',
    modelSlow: 'Gemini 2.5 Pro Experimental (Chậm)',

    // Font Size Slider
    fontSizeLabel: 'Cỡ chữ:',
    fontSizeAdjustTitle: 'Điều chỉnh kích thước chữ để dễ đọc hơn',
    fontSizeAdjustAriaLabel: 'Điều chỉnh kích thước chữ',

    // Font Selection
    fontFamilyLabel: 'Phông chữ:',
    fontQuestrial: 'Questrial',
    fontSourceCodePro: 'Source Code Pro',

    // Errors
    apiKeyError: 'Vui lòng cấu hình khóa API Gemini trong phần cài đặt',
    voiceMessageSent: 'Đã gửi tin nhắn thoại...',
    micAccessError: 'Không thể truy cập micrô. Vui lòng kiểm tra quyền truy cập trên trình duyệt của bạn.',
    micPermissionDenied: 'Quyền truy cập micrô bị từ chối',
    errorPrefix: 'Lỗi:',

    // Voice Recording
    autoStopLabel: 'Tự động dừng ghi âm:',
    autoStopEnabled: 'Bật',
    autoStopDisabled: 'Tắt',
    autoStopDescription: 'Tự động dừng ghi âm sau khi phát hiện im lặng',

    // PWA
    pwaMode: 'Chế độ ứng dụng',
    pwaModeDescription: 'Đang chạy như ứng dụng đã cài đặt',
    installApp: 'Cài đặt ứng dụng',
    installAppDescription: 'Cài đặt ứng dụng này trên thiết bị của bạn để có trải nghiệm tốt hơn',

    // Meta SEO Generator
    metaSeoTitle: 'Công cụ tạo Meta SEO',
    metaSeoDescription: 'Tạo trang chuyển hướng với thẻ meta tùy chỉnh cho chia sẻ trên mạng xã hội.',
    metaSeoDestinationUrl: 'URL đích:',
    metaSeoDestinationUrlPlaceholder: 'https://example.com/trang-dich/',
    metaSeoTitleLabel: 'Tiêu đề Meta:',
    metaSeoTitlePlaceholder: 'Nhập tiêu đề cho chia sẻ mạng xã hội',
    metaSeoDescriptionLabel: 'Mô tả Meta:',
    metaSeoDescriptionPlaceholder: 'Nhập mô tả cho chia sẻ mạng xã hội',
    metaSeoImageLabel: 'URL hình ảnh Meta:',
    metaSeoImagePlaceholder: 'https://example.com/hinh-anh.jpg',
    metaSeoRedirectDelayLabel: 'Thời gian chuyển hướng:',
    metaSeoSeconds: 'giây',
    metaSeoGenerateButton: 'Tạo mã',
    metaSeoGeneratedCodeTitle: 'Mã HTML đã tạo',
    metaSeoCodeCopy: 'Sao chép mã',
    metaSeoCodeCopied: 'Đã sao chép!',
    metaSeoUsageInstructions: 'Lưu mã này dưới dạng tệp HTML và tải lên máy chủ web của bạn.',
    metaSeoUrlRequired: 'URL đích là bắt buộc',
    metaSeoRedirectingIn: 'Chuyển hướng trong {seconds} giây...',
    metaSeoTabTitle: 'Meta SEO',
    metaSeoRedirectPage: 'Trang chuyển hướng',
    metaSeoRedirecting: 'Đang chuyển hướng...',
    metaSeoRedirectDesc: 'Bạn sẽ được chuyển hướng đến trang đích trong vài giây.',
    metaSeoRedirectMethodLabel: 'Phương thức chuyển hướng:',
    metaSeoRedirectMethodBoth: 'Cả hai (Meta + JavaScript)',
    metaSeoRedirectMethodMeta: 'Meta Refresh (Thân thiện với SEO)',
    metaSeoRedirectMethodJs: 'JavaScript (Trải nghiệm mượt mà hơn)',
    metaSeoSeoTips: 'Các phương pháp SEO tốt nhất:',
    metaSeoSeoTip1: '• Chỉ sử dụng cho trang đích chia sẻ mạng xã hội',
    metaSeoSeoTip2: '• Đối với chuyển hướng vĩnh viễn, hãy sử dụng chuyển hướng 301 phía máy chủ',
    metaSeoSeoTip3: '• Thêm các thẻ meta này vào trang chính của bạn khi có thể',

    // Login
    loginTitle: 'Đăng nhập vào Công cụ Dịch',
    usernameLabel: 'Tên đăng nhập:',
    usernamePlaceholder: 'Nhập tên đăng nhập của bạn',
    passwordLabel: 'Mật khẩu:',
    passwordPlaceholder: 'Nhập mật khẩu của bạn',
    loginButton: 'Đăng nhập',
    logoutButton: 'Đăng xuất',
    loginError: 'Tên đăng nhập hoặc mật khẩu không hợp lệ',
    loginHelp: 'Sử dụng một trong các thông tin đăng nhập sau:',
    loginHint: 'Với mục đích trình diễn, hãy thử thông tin đăng nhập đơn giản như "user" và "password".',
    welcomeMessage: 'Chào mừng, {username}!'
  }
};

export default translations;
