# WebView Integration Guide for Mobile Developers

This guide explains how to integrate the **MyToDoo WebView** pages into your Android and iOS applications.

## 🌐 Base URL
- **UAT / Staging**: `https://uat-webview.mytodoo.com` (Use for testing)
- **Live Production**: `https://webview.mytodoo.com`
- **Development**: `http://<your-local-ip>:4000`

---

## 🔗 Available Endpoints (Routes)

Append these paths to the Base URL to load the specific page.

### 1. Public Pages (No Authentication Required)
These pages display static content and are fully responsive.
| Page Name | Endpoint | Full URL Example (UAT) |
| :--- | :--- | :--- |
| **Terms & Conditions** | `/TermsAndConditions` | `https://uat-webview.mytodoo.com/TermsAndConditions` |
| **Privacy Policy** | `/PrivacyPolicy` | `https://uat-webview.mytodoo.com/PrivacyPolicy` |
| **Insurance Protection** | `/InsuranceProtection` | `https://uat-webview.mytodoo.com/InsuranceProtection` |
| **Community Guidelines** | `/CommunityGuideline` | `https://uat-webview.mytodoo.com/CommunityGuideline` |
| **FAQ** | `/FrequentlyAskedQuestions` | `https://uat-webview.mytodoo.com/FrequentlyAskedQuestions` |

### 2. Protected Pages (Authentication Required 🔒)
This page calls the API to fetch user-specific data.
| Page Name | Endpoint | Full URL Example (UAT) |
| :--- | :--- | :--- |
| **Payment Details** | `/payment-details` | `https://uat-webview.mytodoo.com/payment-details` |

---

## 🔑 Authentication Implementation

The `/payment-details` page generally requires an API Token (Bearer Token) to function. It does **NOT** use cookies.
The Mobile App must **inject** this token into the browser's JavaScript environment.

### Protocol
1.  **Variable Name**: `window.APP_AUTH_TOKEN`
2.  **Value**: A valid JWT Bearer String (e.g., `eyJhbG...`)
3.  **Timing**: The token must be injected **as soon as the page starts loading** or **immediately after it finishes**.

### 🤖 Android Implementation (Kotlin)
Use `evaluateJavascript` inside `onPageFinished` to ensure the DOM is ready to receive the variable.
```kotlin
webView.webViewClient = object : WebViewClient() {
    override fun onPageFinished(view: WebView?, url: String?) {
        super.onPageFinished(view, url)
        
        // 1. Get your actual User Token from SharedPreferences/DataStore
        val userToken = "YOUR_ACTUAL_BEARER_TOKEN_HERE"

        // 2. Inject it into the window object
        val jsCode = "window.APP_AUTH_TOKEN = '$userToken';"
        
        view?.evaluateJavascript(jsCode, null)
    }
}
```

### 🍎 iOS Implementation (Swift)
Use `WKUserScript` to inject the token at `atDocumentStart` or `evaluateJavaScript`.
**Recommended: Inject at Document Start**
This ensures the token is available instantly when the React components mount.
```swift
let userToken = "YOUR_ACTUAL_BEARER_TOKEN_HERE"
let jsCode = "window.APP_AUTH_TOKEN = '\(userToken)';"

let userScript = WKUserScript(
    source: jsCode,
    injectionTime: .atDocumentStart, // Inject before page loads
    forMainFrameOnly: true
)

let contentController = WKUserContentController()
contentController.addUserScript(userScript)

let config = WKWebViewConfiguration()
config.userContentController = contentController

let webView = WKWebView(frame: .zero, configuration: config)
// Now load the request
webView.load(URLRequest(url: URL(string: "https://webview.mytodoo.com/payment-details")!))
```

---

## 🛠️ Testing & Debugging

If you see an **"Unauthorized access"** message:
1.  The token was not injected correctly.
2.  The token was injected *after* the React component tried to fetch data.

**Resolution:**
- Use the **"Check Token Again"** button on the page to retry the fetch without reloading the WebView.
- Ensure your injection code runs correctly (verify logs).
- **Manual Test**: Connect your phone to Chrome/Safari Inspector, go to Console, type `window.APP_AUTH_TOKEN`, and verify it returns the token string.
