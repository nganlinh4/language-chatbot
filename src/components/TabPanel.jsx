import React, { useState } from 'react';
import translations from '../utils/translations';
import FontSizeSlider from './FontSizeSlider';

function TabPanel({ children, activeTab, onTabChange, language = 'en', onSettingsClick, fontSize = 1, onFontSizeChange, username, onLogout }) {
  const t = translations[language];

  return (
    <div className="tab-panel">
      <div className="unified-header">
        <div className="header-left">
          <button
            className={`tab-button ${activeTab === 'chat' ? 'active' : ''}`}
            onClick={() => onTabChange('chat')}
          >
            <span className="tab-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
              </svg>
            </span>
            <span className="tab-text">
              {t.appTitle.split('  ').map((part, index, array) => (
                <React.Fragment key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="translation-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.5 21L3 16.5L7.5 12L9 13.5L7.05 15.45H15V10.5H18V18.45H7.05L9 20.4L7.5 21ZM16.5 12L15 10.5L16.95 8.55H9V13.5H6V5.55H16.95L15 3.6L16.5 2.1L21 6.6L16.5 12Z"/>
                      </svg>
                    </span>
                  )}
                </React.Fragment>
              ))}
            </span>
          </button>
          <button
            className={`tab-button ${activeTab === 'metaseo' ? 'active' : ''}`}
            onClick={() => onTabChange('metaseo')}
          >
            <span className="tab-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3A8.994 8.994 0 0013 3.06V1h-2v2.06A8.994 8.994 0 003.06 11H1v2h2.06A8.994 8.994 0 0011 20.94V23h2v-2.06A8.994 8.994 0 0020.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
              </svg>
            </span>
            <span className="tab-text">{t.metaSeoTabTitle}</span>
          </button>
        </div>

        <div className="header-controls">
          {username && (
            <button className="logout-button" onClick={onLogout}>
              {t.logoutButton}
            </button>
          )}
          {onFontSizeChange && (
            <FontSizeSlider
              initialValue={fontSize}
              onChange={onFontSizeChange}
              language={language}
            />
          )}
          {onSettingsClick && (
            <button
              className="settings-button"
              onClick={onSettingsClick}
              title={t.settingsTitle}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
              </svg>
            </button>
          )}
        </div>
      </div>
      <div className="tab-content">
        {children}
      </div>
    </div>
  );
}

export default TabPanel;
