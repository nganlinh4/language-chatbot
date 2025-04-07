// UI translations for English and Vietnamese
const translations = {
  en: {
    // App title and description
    appTitle: 'English-Vietnamese Translator',
    appDescription: 'Enter text or use voice to translate between English and Vietnamese.',
    
    // Chat interface
    emptyChatMessage: 'Start typing or use the microphone to translate between English and Vietnamese',
    inputPlaceholder: 'Type a message in English or Vietnamese...',
    sendButton: 'Send',
    micButton: 'Mic',
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
    saveButton: 'Save',
    cancelButton: 'Cancel',
    
    // Models
    modelFast: 'Gemini 2.0 Flash Lite (Fast)',
    modelMedium: 'Gemini 2.0 Flash (Medium)',
    modelSlow: 'Gemini 2.5 Pro Preview (Slow)',
    
    // Errors
    apiKeyError: 'Please configure your Gemini API key in settings',
    voiceMessageSent: 'Voice message sent...',
  },
  vi: {
    // App title and description
    appTitle: 'Công cụ Dịch Anh-Việt',
    appDescription: 'Nhập văn bản hoặc sử dụng giọng nói để dịch giữa tiếng Anh và tiếng Việt.',
    
    // Chat interface
    emptyChatMessage: 'Bắt đầu nhập hoặc sử dụng micrô để dịch giữa tiếng Anh và tiếng Việt',
    inputPlaceholder: 'Nhập tin nhắn bằng tiếng Anh hoặc tiếng Việt...',
    sendButton: 'Gửi',
    micButton: 'Mic',
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
    saveButton: 'Lưu',
    cancelButton: 'Hủy',
    
    // Models
    modelFast: 'Gemini 2.0 Flash Lite (Nhanh)',
    modelMedium: 'Gemini 2.0 Flash (Trung bình)',
    modelSlow: 'Gemini 2.5 Pro Preview (Chậm)',
    
    // Errors
    apiKeyError: 'Vui lòng cấu hình khóa API Gemini trong phần cài đặt',
    voiceMessageSent: 'Đã gửi tin nhắn thoại...',
  }
};

export default translations;
