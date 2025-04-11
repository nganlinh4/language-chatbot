import { useState } from 'react';
import translations from '../utils/translations';

function MetaSeoGenerator({ language = 'en' }) {
  const [destinationUrl, setDestinationUrl] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [metaImage, setMetaImage] = useState('');
  const [redirectDelay, setRedirectDelay] = useState(3);
  const [redirectMethod, setRedirectMethod] = useState('both'); // 'both', 'meta', or 'js'
  const [generatedCode, setGeneratedCode] = useState('');
  const [copied, setCopied] = useState(false);

  // Get translations based on current interface language
  const t = translations[language];

  const generateCode = () => {
    if (!destinationUrl) {
      alert(t.metaSeoUrlRequired);
      return;
    }

    // Determine which redirect methods to include
    const includeMetaRefresh = redirectMethod === 'meta' || redirectMethod === 'both';
    const includeJsRedirect = redirectMethod === 'js' || redirectMethod === 'both';

    // Create the HTML template with meta tags and redirect script
    const htmlTemplate = `<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${metaTitle || t.metaSeoRedirectPage}</title>

    <!-- Standard SEO meta tags -->
    <meta name="description" content="${metaDescription || ''}" />
    <meta name="robots" content="noindex, follow" />
    <link rel="canonical" href="${destinationUrl}" />

    <!-- Open Graph meta tags for Facebook, LinkedIn, etc. -->
    <meta property="og:title" content="${metaTitle || t.metaSeoRedirectPage}" />
    <meta property="og:description" content="${metaDescription || ''}" />
    ${metaImage ? `<meta property="og:image" content="${metaImage}" />` : ''}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${destinationUrl}" />

    <!-- Twitter Card meta tags -->
    <meta name="twitter:card" content="${metaImage ? 'summary_large_image' : 'summary'}" />
    <meta name="twitter:title" content="${metaTitle || t.metaSeoRedirectPage}" />
    <meta name="twitter:description" content="${metaDescription || ''}" />
    ${metaImage ? `<meta name="twitter:image" content="${metaImage}" />` : ''}

    ${includeMetaRefresh ? `<!-- Meta refresh (search engine friendly fallback) -->
    <meta http-equiv="refresh" content="${redirectDelay}; url=${destinationUrl}" />` : ''}

    ${includeJsRedirect ? `<!-- JavaScript redirect (for browsers with JS enabled) -->
    <script type="text/javascript">
        setTimeout(function() {
            window.location.href = "${destinationUrl}";
        }, ${redirectDelay * 1000});
    </script>` : ''}

    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #f5f5f5;
            text-align: center;
            padding: 20px;
        }
        .container {
            max-width: 600px;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
            margin-bottom: 20px;
        }
        .loader {
            border: 5px solid #f3f3f3;
            border-top: 5px solid #3498db;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: 20px auto;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>

    <!-- Schema.org structured data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "${metaTitle || t.metaSeoRedirectPage}",
        "description": "${metaDescription || ''}",
        ${metaImage ? `"image": "${metaImage}",` : ''}
        "url": "${destinationUrl}"
    }
    </script>
</head>
<body>
    <div class="container">
        <h1>${metaTitle || t.metaSeoRedirecting}</h1>
        <p>${metaDescription || t.metaSeoRedirectDesc}</p>
        <div class="loader"></div>
        <p>${t.metaSeoRedirectingIn.replace('{seconds}', redirectDelay)}</p>
    </div>
</body>
</html>`;

    setGeneratedCode(htmlTemplate);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="meta-seo-generator">
      <h2>{t.metaSeoTitle}</h2>
      <p className="meta-seo-description">{t.metaSeoDescription}</p>

      <div className="seo-tips">
        <h3>{t.metaSeoSeoTips}</h3>
        <p>{t.metaSeoSeoTip1}</p>
        <p>{t.metaSeoSeoTip2}</p>
        <p>{t.metaSeoSeoTip3}</p>
      </div>

      <div className="meta-seo-form">
        <div className="form-group">
          <label htmlFor="destination-url">{t.metaSeoDestinationUrl}</label>
          <input
            type="url"
            id="destination-url"
            value={destinationUrl}
            onChange={(e) => setDestinationUrl(e.target.value)}
            placeholder={t.metaSeoDestinationUrlPlaceholder}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="meta-title">{t.metaSeoTitleLabel}</label>
          <input
            type="text"
            id="meta-title"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            placeholder={t.metaSeoTitlePlaceholder}
          />
        </div>

        <div className="form-group">
          <label htmlFor="meta-description">{t.metaSeoDescriptionLabel}</label>
          <textarea
            id="meta-description"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            placeholder={t.metaSeoDescriptionPlaceholder}
            rows="3"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="meta-image">{t.metaSeoImageLabel}</label>
          <input
            type="url"
            id="meta-image"
            value={metaImage}
            onChange={(e) => setMetaImage(e.target.value)}
            placeholder={t.metaSeoImagePlaceholder}
          />
        </div>

        <div className="form-group">
          <label htmlFor="redirect-delay">{t.metaSeoRedirectDelayLabel}</label>
          <input
            type="number"
            id="redirect-delay"
            value={redirectDelay}
            onChange={(e) => setRedirectDelay(Math.max(1, parseInt(e.target.value) || 1))}
            min="1"
            max="30"
          />
          <span className="input-suffix">{t.metaSeoSeconds}</span>
        </div>

        <div className="form-group">
          <label htmlFor="redirect-method">{t.metaSeoRedirectMethodLabel || 'Redirect Method:'}</label>
          <select
            id="redirect-method"
            value={redirectMethod}
            onChange={(e) => setRedirectMethod(e.target.value)}
          >
            <option value="both">{t.metaSeoRedirectMethodBoth || 'Both (Meta + JavaScript)'}</option>
            <option value="meta">{t.metaSeoRedirectMethodMeta || 'Meta Refresh (SEO Friendly)'}</option>
            <option value="js">{t.metaSeoRedirectMethodJs || 'JavaScript (Smoother UX)'}</option>
          </select>
        </div>

        <button className="generate-button" onClick={generateCode}>
          {t.metaSeoGenerateButton}
        </button>
      </div>

      {generatedCode && (
        <div className="generated-code-container">
          <div className="generated-code-header">
            <h3>{t.metaSeoGeneratedCodeTitle}</h3>
            <button
              className={`copy-button ${copied ? 'copied' : ''}`}
              onClick={copyToClipboard}
            >
              {copied ? t.metaSeoCodeCopied : t.metaSeoCodeCopy}
            </button>
          </div>
          <pre className="generated-code">
            <code>{generatedCode}</code>
          </pre>
          <p className="usage-instructions">{t.metaSeoUsageInstructions}</p>
        </div>
      )}
    </div>
  );
}

export default MetaSeoGenerator;
