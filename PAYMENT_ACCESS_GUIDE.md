# How to Access Payment Details Page

This guide explains how to access the **Payment Details** page in the frontend application, specifically detailing the authentication mechanism required for it to work inside a mobile app WebView.

## 1. The URL
The Payment Details page is located at:
- **Local Development**: `http://localhost:4000/payment-details`
- **Production URL**: `https://<your-domain>/payment-details`

## 2. Authentication Requirement (IMPORTANT)
This page is **protected**. It does not use cookies or standard login navigation. Instead, it relies on the mobile app "injecting" an authentication token directly into the WebView's JavaScript environment.

**Key Mechanism:**
- The page looks for a global variable: `window.APP_AUTH_TOKEN`
- If this variable exists, it uses the value as a Bearer token to call the API.
- If this variable is missing, the page displays: **"Unauthorized access"**.

## 3. How to Test in a Browser (Chrome/Edge)
Since a standard browser doesn't automatically inject this token, you must simulate the mobile app's behavior manually.

### Step-by-Step Testing Guide:
1.  **Open the Page**:
    Go to [http://localhost:4000/payment-details](http://localhost:4000/payment-details).
    *You will see "Unauthorized access" because the token is missing.*

2.  **Open Developer Tools**:
    Press `F12` or right-click anywhere on the page and select **Inspect**.

3.  **Inject the Token**:
    - Go to the **Console** tab in Developer Tools.
    - Type the following command and press Enter:
      ```javascript
      window.APP_AUTH_TOKEN = "your_token_here";
      ```
      *(Note: If you reload the page now, this variable will be lost unless you stick it in a snippet or use a browser extension.)*

4.  **Click "Check Token Again"**:
    - Do **NOT** reload the page.
    - Click the **"Check Token Again"** button on the page directly.
    - The component will re-run its check, find the global variable you just set, and load the data.
    - You will see the user details and a **full-height, auto-expanding JSON view** of the raw API response for debugging.

### Troubleshooting "undefined" Error
If you see `Checking for token in window.APP_AUTH_TOKEN: undefined` in the console:
- This matches the error you saw earlier.
- **Reason**: The page loaded *before* you set the variable. React checked `window`, found nothing, and stopped.
- **Fix**: Set the variable in the console FIRST, then click **"Check Token Again"** (or use the retry mechanism). Do not simply reload the page (`F5`) because that wipes the console variable.

## 4. Instructions for Mobile App Developers

### Android (Kotlin/Java)
The Android app must inject the token into the WebView using `evaluateJavascript` or `addJavascriptInterface`.

**Method A: evaluateJavascript (Simpler, onPageFinished)**
```kotlin
webView.webViewClient = object : WebViewClient() {
    override fun onPageFinished(view: WebView?, url: String?) {
        super.onPageFinished(view, url)
        val token = "user_actual_bearer_token"
        // Inject the token as a global window variable
        webView.evaluateJavascript("window.APP_AUTH_TOKEN = '$token';", null)
    }
}
```

### iOS (Swift/WKWebView)
The iOS app uses `evaluateJavaScript`.

```swift
func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
    let token = "user_actual_bearer_token"
    let js = "window.APP_AUTH_TOKEN = '\(token)';"
    
    webView.evaluateJavaScript(js) { (result, error) in
        if let error = error {
            print("Error injecting token: \(error)")
        }
    }
}
```

## 5. Summary
- **Page**: `/payment-details`
- **Requires**: `window.APP_AUTH_TOKEN` (String)
- **Failure State**: "Unauthorized access" message.
- **Success State**: Shows user profile/payment info fetched from API.
