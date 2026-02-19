# Payment User Endpoints - Frontend Integration Guide

## Overview

These endpoints allow authenticated users to retrieve their own financial data from the Payment microservice. All endpoints are **user-facing** (not admin) and require JWT authentication.

**Key Features:**
- ✅ User ID is automatically extracted from JWT token (never sent by client)
- ✅ Users can only access their own financial data
- ✅ No manual user ID parameters accepted from frontend
- ✅ Secure token-based authentication via `protect` middleware

---

## Base URL

```
https://api.mytodoo.com/api/payment
```

**Local Development:**
```
http://localhost:5001/api/payment
```

---

## Authentication

All endpoints require a valid **JWT token** in the `Authorization` header:

```http
Authorization: Bearer <your-jwt-token>
```

The backend extracts the user's system ID from this token automatically.

---

## Endpoints

### 1. Get My Tasker Financial Summary

Retrieve the authenticated user's tasker financial summary (payouts, pending amounts, etc.).

**Endpoint:**
```
GET /payment/taskers/financial
```

**Full URL:**
```
https://api.mytodoo.com/api/payment/taskers/financial
```

**Headers:**
```http
Authorization: Bearer <jwt-token>
Content-Type: application/json
```

**Query Parameters:** None

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "user_id": "USR-332",
    "total_payout": 1500.50,
    "pending_payout": 170.00,
    "current_balance": 0
  }
}
```

**Example Request (JavaScript):**
```javascript
const response = await fetch('https://api.mytodoo.com/api/payment/taskers/financial', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${userToken}`,
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);
```

**Example Request (Axios):**
```javascript
import axios from 'axios';

const getTaskerFinancial = async (token) => {
  try {
    const response = await axios.get(
      'https://api.mytodoo.com/api/payment/taskers/financial',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching tasker financial:', error.response?.data);
    throw error;
  }
};
```

---

### 2. Get My Poster Financial Summary

Retrieve the authenticated user's poster financial summary (total payments, refunds, etc.).

**Endpoint:**
```
GET /payment/posters/financial
```

**Full URL:**
```
https://api.mytodoo.com/api/payment/posters/financial
```

**Headers:**
```http
Authorization: Bearer <jwt-token>
Content-Type: application/json
```

**Query Parameters:** None

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "user_id": "USR-333",
    "total_payment": 2200.00,
    "total_refund": 150.00,
    "current_balance": 2050.00
  }
}
```

**Example Request (JavaScript):**
```javascript
const response = await fetch('https://api.mytodoo.com/api/payment/posters/financial', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${userToken}`,
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);
```

**Example Request (Axios):**
```javascript
import axios from 'axios';

const getPosterFinancial = async (token) => {
  try {
    const response = await axios.get(
      'https://api.mytodoo.com/api/payment/posters/financial',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching poster financial:', error.response?.data);
    throw error;
  }
};
```

---

### 3. Get My Tasker Task Financial History

Retrieve paginated task financial history for the authenticated user as a **tasker**.

**Endpoint:**
```
GET /payment/tasks/tasker/financial-history
```

**Full URL:**
```
https://api.mytodoo.com/api/payment/tasks/tasker/financial-history
```

**Headers:**
```http
Authorization: Bearer <jwt-token>
Content-Type: application/json
```

**Query Parameters:**

| Parameter | Type    | Required | Default | Max | Description                |
|-----------|---------|----------|---------|-----|----------------------------|
| `page`    | integer | No       | 1       | -   | Page number (starts at 1)  |
| `limit`   | integer | No       | 20      | 100 | Records per page (max 100) |

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "ae606f45-48eb-4d72-b050-adce8dcf05dd",
      "task_id": "TSK-337",
      "poster_user_id": "USR-333",
      "tasker_user_id": "USR-332",
      "task_price": 100.00,
      "status": "complete",
      "penalty_owner": "none",
      "penalty_amount": 0,
      "refund_amount": 0,
      "payout_amount": 85.00,
      "createdAt": "2026-02-18T11:16:41.000Z"
    },
    {
      "id": "bf707g56-59fc-5e83-c161-bedf9eeg16ee",
      "task_id": "TSK-340",
      "poster_user_id": "USR-335",
      "tasker_user_id": "USR-332",
      "task_price": 200.00,
      "status": "complete",
      "penalty_owner": "none",
      "penalty_amount": 0,
      "refund_amount": 0,
      "payout_amount": 170.00,
      "createdAt": "2026-02-19T09:30:22.000Z"
    }
  ],
  "total_records": 45,
  "total_pages": 3,
  "current_page": 1
}
```

**Example Request (JavaScript):**
```javascript
const page = 1;
const limit = 20;

const response = await fetch(
  `https://api.mytodoo.com/api/payment/tasks/tasker/financial-history?page=${page}&limit=${limit}`,
  {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json'
    }
  }
);

const data = await response.json();
console.log(data);
```

**Example Request (Axios):**
```javascript
import axios from 'axios';

const getTaskerHistory = async (token, page = 1, limit = 20) => {
  try {
    const response = await axios.get(
      'https://api.mytodoo.com/api/payment/tasks/tasker/financial-history',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        params: { page, limit }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching tasker history:', error.response?.data);
    throw error;
  }
};
```

---

### 4. Get My Poster Task Financial History

Retrieve paginated task financial history for the authenticated user as a **poster**.

**Endpoint:**
```
GET /payment/tasks/poster/financial-history
```

**Full URL:**
```
https://api.mytodoo.com/api/payment/tasks/poster/financial-history
```

**Headers:**
```http
Authorization: Bearer <jwt-token>
Content-Type: application/json
```

**Query Parameters:**

| Parameter | Type    | Required | Default | Max | Description                |
|-----------|---------|----------|---------|-----|----------------------------|
| `page`    | integer | No       | 1       | -   | Page number (starts at 1)  |
| `limit`   | integer | No       | 20      | 100 | Records per page (max 100) |

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "cf808h67-60gd-6f94-d272-cfeg0ffh27ff",
      "task_id": "TSK-350",
      "poster_user_id": "USR-333",
      "tasker_user_id": "USR-340",
      "task_price": 150.00,
      "status": "complete",
      "penalty_owner": "none",
      "penalty_amount": 0,
      "refund_amount": 0,
      "payout_amount": 127.50,
      "createdAt": "2026-02-17T14:22:15.000Z"
    },
    {
      "id": "dg909i78-71he-7g05-e383-dghf1ggi38gg",
      "task_id": "TSK-355",
      "poster_user_id": "USR-333",
      "tasker_user_id": "USR-342",
      "task_price": 75.00,
      "status": "cancelled",
      "penalty_owner": "tasker",
      "penalty_amount": 15.00,
      "refund_amount": 60.00,
      "payout_amount": 0,
      "createdAt": "2026-02-18T10:45:30.000Z"
    }
  ],
  "total_records": 28,
  "total_pages": 2,
  "current_page": 1
}
```

**Example Request (JavaScript):**
```javascript
const page = 1;
const limit = 20;

const response = await fetch(
  `https://api.mytodoo.com/api/payment/tasks/poster/financial-history?page=${page}&limit=${limit}`,
  {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json'
    }
  }
);

const data = await response.json();
console.log(data);
```

**Example Request (Axios):**
```javascript
import axios from 'axios';

const getPosterHistory = async (token, page = 1, limit = 20) => {
  try {
    const response = await axios.get(
      'https://api.mytodoo.com/api/payment/tasks/poster/financial-history',
      {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        params: { page, limit }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching poster history:', error.response?.data);
    throw error;
  }
};
```

---

## Error Responses

### 401 Unauthorized
Missing or invalid JWT token.

```json
{
  "status": "error",
  "message": "Not authorized, token failed"
}
```

**Causes:**
- No `Authorization` header provided
- Invalid or expired JWT token
- Token format incorrect

**Frontend Action:** Redirect user to login page.

---

### 502 Bad Gateway
Payment microservice is unavailable.

```json
{
  "success": false,
  "error": "Payment Service is unreachable",
  "message": "The payment microservice is currently unavailable. Please try again later."
}
```

**Causes:**
- Payment service is down
- Network connectivity issues
- Service timeout

**Frontend Action:** Show user-friendly error message and retry button.

---

## Data Field Descriptions

### Financial Summary Fields

| Field             | Type   | Description                                      |
|-------------------|--------|--------------------------------------------------|
| `user_id`         | string | System user ID (e.g., "USR-332")                 |
| `total_payout`    | number | Total amount paid out to tasker                  |
| `pending_payout`  | number | Amount pending payout (awaiting transfer)        |
| `current_balance` | number | Current available balance                        |
| `total_payment`   | number | Total amount paid by poster                      |
| `total_refund`    | number | Total amount refunded to poster                  |

### Financial History Fields

| Field           | Type   | Description                                   |
|-----------------|--------|-----------------------------------------------|
| `id`            | string | Unique financial record ID (UUID)             |
| `task_id`       | string | Task ID (e.g., "TSK-337")                     |
| `poster_user_id`| string | Poster's user ID                              |
| `tasker_user_id`| string | Tasker's user ID                              |
| `task_price`    | number | Original task price                           |
| `status`        | string | `complete`, `pending`, `cancelled`            |
| `penalty_owner` | string | `none`, `tasker`, `poster`                    |
| `penalty_amount`| number | Penalty amount (if applicable)                |
| `refund_amount` | number | Amount refunded (if applicable)               |
| `payout_amount` | number | Amount paid to tasker                         |
| `createdAt`     | string | ISO 8601 timestamp                            |

---

## React Integration Example

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FinancialDashboard = () => {
  const [taskerSummary, setTaskerSummary] = useState(null);
  const [posterSummary, setPosterSummary] = useState(null);
  const [taskerHistory, setTaskerHistory] = useState([]);
  const [posterHistory, setPosterHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('authToken'); // Your JWT token
  const API_BASE = 'https://api.mytodoo.com/api/payment';

  useEffect(() => {
    fetchFinancialData();
  }, []);

  const fetchFinancialData = async () => {
    try {
      setLoading(true);
      
      // Fetch all financial data in parallel
      const [taskerSum, posterSum, taskerHist, posterHist] = await Promise.all([
        axios.get(`${API_BASE}/taskers/financial`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get(`${API_BASE}/posters/financial`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get(`${API_BASE}/tasks/tasker/financial-history?page=1&limit=10`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get(`${API_BASE}/tasks/poster/financial-history?page=1&limit=10`, {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      setTaskerSummary(taskerSum.data.data);
      setPosterSummary(posterSum.data.data);
      setTaskerHistory(taskerHist.data.data);
      setPosterHistory(posterHist.data.data);
      
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch financial data');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading financial data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="financial-dashboard">
      <h1>Financial Dashboard</h1>
      
      {/* Tasker Summary */}
      <section>
        <h2>Tasker Financials</h2>
        <div>Total Payout: ${taskerSummary?.total_payout}</div>
        <div>Pending Payout: ${taskerSummary?.pending_payout}</div>
        <div>Current Balance: ${taskerSummary?.current_balance}</div>
      </section>

      {/* Poster Summary */}
      <section>
        <h2>Poster Financials</h2>
        <div>Total Payment: ${posterSummary?.total_payment}</div>
        <div>Total Refund: ${posterSummary?.total_refund}</div>
        <div>Current Balance: ${posterSummary?.current_balance}</div>
      </section>

      {/* Transaction History */}
      <section>
        <h2>Recent Tasker History</h2>
        <table>
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Price</th>
              <th>Status</th>
              <th>Payout</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {taskerHistory.map(item => (
              <tr key={item.id}>
                <td>{item.task_id}</td>
                <td>${item.task_price}</td>
                <td>{item.status}</td>
                <td>${item.payout_amount}</td>
                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default FinancialDashboard;
```

---

## Important Security Notes

⚠️ **DO NOT:**
- Never send user IDs in request parameters or body
- Never hardcode JWT tokens in your code
- Never store tokens in plain text

✅ **DO:**
- Always send JWT token in `Authorization` header
- Store tokens securely (httpOnly cookies or secure storage)
- Handle token expiration gracefully
- Let the backend extract user ID from the token

---

## Pagination Best Practices

**For Financial History Endpoints:**

1. **Start with reasonable defaults:**
   ```javascript
   const DEFAULT_PAGE = 1;
   const DEFAULT_LIMIT = 20;
   const MAX_LIMIT = 100;
   ```

2. **Implement pagination UI:**
   ```javascript
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);

   // Fetch function
   const fetchHistory = async (page) => {
     const response = await axios.get(
       `${API_BASE}/tasks/tasker/financial-history?page=${page}&limit=20`,
       { headers: { Authorization: `Bearer ${token}` }}
     );
     setTotalPages(response.data.total_pages);
     return response.data;
   };
   ```

3. **Handle pagination controls:**
   ```jsx
   <button 
     disabled={currentPage === 1}
     onClick={() => setCurrentPage(prev => prev - 1)}
   >
     Previous
   </button>
   
   <span>Page {currentPage} of {totalPages}</span>
   
   <button 
     disabled={currentPage === totalPages}
     onClick={() => setCurrentPage(prev => prev + 1)}
   >
     Next
   </button>
   ```

---

## Testing

You can test these endpoints using:

### cURL
```bash
# Get tasker financial summary
curl -X GET https://api.mytodoo.com/api/payment/taskers/financial \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Get poster history with pagination
curl -X GET "https://api.mytodoo.com/api/payment/tasks/poster/financial-history?page=1&limit=20" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Postman
1. Set method to `GET`
2. Add URL: `https://api.mytodoo.com/api/payment/taskers/financial`
3. Add header: `Authorization: Bearer YOUR_JWT_TOKEN`
4. Send request

---

## Support

For issues or questions:
- **API Documentation:** https://api.mytodoo.com/api-docs
- **Backend Team:** Contact backend developers
- **Related Docs:** 
  - [PAYMENT_FLOW.md](./PAYMENT_FLOW.md)
  - [STRIPE_CONNECT_PAYOUT_SYSTEM.md](./STRIPE_CONNECT_PAYOUT_SYSTEM.md)

---

**Last Updated:** February 19, 2026
