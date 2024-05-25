# API Documentation

## Overview

This API allows users to interact with the flight control system, providing functionalities for pilots and control center operators. It offers endpoints for flight status, control commands, and monitoring.

## User Guide

### Authentication

All endpoints require authentication via an API key. Include your API key in the header of each request.

**Header:**

```
Authorization: Bearer <API_KEY>
```

### Endpoints

#### 1. Get Flight Status

Retrieve the current status of a specific flight.

- **Endpoint:** `GET /api/v1/flights/{flight_id}/status`
- **Description:** Provides current flight status information.
- **Parameters:**
  - `flight_id` (string): Unique identifier for the flight.
- **Response:**
  ```json
  {
    "flight_id": "12345",
    "status": "in-flight",
    "altitude": 35000,
    "speed": 500,
    "location": {
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "destination": "JFK"
  }
  ```
- **Errors:**
  - `404 Not Found`: Flight not found.
  - `401 Unauthorized`: Invalid or missing API key.

#### 2. Send Control Command

Send a control command to a specific flight.

- **Endpoint:** `POST /api/v1/flights/{flight_id}/commands`
- **Description:** Sends a command to the flight control system.
- **Parameters:**
  - `flight_id` (string): Unique identifier for the flight.
  - `command` (string): The control command to be executed (e.g., "land", "increase altitude").
- **Request Body:**
  ```json
  {
    "command": "land"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Command sent successfully",
    "status": "pending"
  }
  ```
- **Errors:**
  - `404 Not Found`: Flight not found.
  - `400 Bad Request`: Invalid command.
  - `401 Unauthorized`: Invalid or missing API key.

#### 3. Get All Flights

Retrieve a list of all active flights.

- **Endpoint:** `GET /api/v1/flights`
- **Description:** Provides a list of all active flights with basic information.
- **Response:**
  ```json
  [
    {
      "flight_id": "12345",
      "status": "in-flight",
      "destination": "JFK"
    },
    {
      "flight_id": "67890",
      "status": "departed",
      "destination": "LAX"
    }
  ]
  ```
- **Errors:**
  - `401 Unauthorized`: Invalid or missing API key.

#### 4. Get Flight History

Retrieve the flight history of a specific flight.

- **Endpoint:** `GET /api/v1/flights/{flight_id}/history`
- **Description:** Provides the history of a specific flight.
- **Parameters:**
  - `flight_id` (string): Unique identifier for the flight.
- **Response:**
  ```json
  {
    "flight_id": "12345",
    "history": [
      {
        "timestamp": "2023-05-01T12:00:00Z",
        "status": "departed",
        "location": {
          "latitude": 40.7128,
          "longitude": -74.0060
        }
      },
      {
        "timestamp": "2023-05-01T14:00:00Z",
        "status": "in-flight",
        "location": {
          "latitude": 41.9028,
          "longitude": 12.4964
        }
      }
    ]
  }
  ```
- **Errors:**
  - `404 Not Found`: Flight not found.
  - `401 Unauthorized`: Invalid or missing API key.

## Technical Documentation

### API Authentication

The API uses token-based authentication. Each request must include a valid API key in the Authorization header.

**Example:**

```
Authorization: Bearer <API_KEY>
```

### Error Handling

The API uses standard HTTP status codes to indicate the success or failure of an API request. In the case of an error, the response will include an error message.

- `200 OK`: Request was successful.
- `400 Bad Request`: There was an error with the request parameters.
- `401 Unauthorized`: Authentication failed.
- `404 Not Found`: Resource not found.

### Rate Limiting

To ensure fair use, the API enforces rate limits. Users are allowed a maximum of 1000 requests per hour. If the limit is exceeded, a `429 Too Many Requests` status code will be returned.

### Data Formats

- **Request:** JSON
- **Response:** JSON

### Endpoint Details

#### Get Flight Status

- **Method:** `GET`
- **Path:** `/api/v1/flights/{flight_id}/status`
- **Response Codes:**
  - `200 OK`: Request was successful.
  - `401 Unauthorized`: Invalid or missing API key.
  - `404 Not Found`: Flight not found.

#### Send Control Command

- **Method:** `POST`
- **Path:** `/api/v1/flights/{flight_id}/commands`
- **Response Codes:**
  - `200 OK`: Command sent successfully.
  - `400 Bad Request`: Invalid command.
  - `401 Unauthorized`: Invalid or missing API key.
  - `404 Not Found`: Flight not found.

#### Get All Flights

- **Method:** `GET`
- **Path:** `/api/v1/flights`
- **Response Codes:**
  - `200 OK`: Request was successful.
  - `401 Unauthorized`: Invalid or missing API key.

#### Get Flight History

- **Method:** `GET`
- **Path:** `/api/v1/flights/{flight_id}/history`
- **Response Codes:**
  - `200 OK`: Request was successful.
  - `401 Unauthorized`: Invalid or missing API key.
  - `404 Not Found`: Flight not found.

#### Get Control Command History

Retrieve the history of control commands sent to a specific flight.

- **Method:** `GET`
- **Path:** `/api/v1/flights/{flight_id}/commands/history`
- **Description:** Provides a history of all control commands issued to the specified flight.
- **Parameters:**
  - `flight_id` (string): Unique identifier for the flight.
- **Response:**
  ```json
  {
    "flight_id": "12345",
    "commands_history": [
      {
        "timestamp": "2023-05-01T12:05:00Z",
        "command": "increase altitude",
        "status": "executed"
      },
      {
        "timestamp": "2023-05-01T13:00:00Z",
        "command": "turn left",
        "status": "executed"
      }
    ]
  }
  ```
- **Errors:**
  - `401 Unauthorized`: Invalid or missing API key.
  - `404 Not Found`: Flight not found.

#### Get Aircraft Information

Retrieve detailed information about a specific aircraft.

- **Method:** `GET`
- **Path:** `/api/v1/aircraft/{aircraft_id}`
- **Description:** Provides detailed information about the specified aircraft.
- **Parameters:**
  - `aircraft_id` (string): Unique identifier for the aircraft.
- **Response:**
  ```json
  {
    "aircraft_id": "A123",
    "model": "Boeing 747",
    "manufacturer": "Boeing",
    "capacity": 416,
    "current_status": "in-service"
  }
  ```
- **Errors:**
  - `401 Unauthorized`: Invalid or missing API key.
  - `404 Not Found`: Aircraft not found.

## Error Codes and Responses

The following table summarizes the error codes and their corresponding descriptions.

| HTTP Status Code | Error Code | Description                               |
|------------------|------------|-------------------------------------------|
| 200              | OK         | Request was successful                    |
| 400              | BAD_REQUEST| The request parameters are invalid        |
| 401              | UNAUTHORIZED| Authentication failed                    |
| 404              | NOT_FOUND  | The requested resource was not found      |
| 429              | TOO_MANY_REQUESTS| The request limit has been exceeded |

## Example Requests

### cURL Examples

#### Get Flight Status

```sh
curl -X GET "https://api.flightcontrol.com/api/v1/flights/12345/status" -H "Authorization: Bearer YOUR_API_KEY"
```

#### Send Control Command

```sh
curl -X POST "https://api.flightcontrol.com/api/v1/flights/12345/commands" -H "Authorization: Bearer YOUR_API_KEY" -H "Content-Type: application/json" -d '{"command": "land"}'
```

#### Get All Flights

```sh
curl -X GET "https://api.flightcontrol.com/api/v1/flights" -H "Authorization: Bearer YOUR_API_KEY"
```

#### Get Flight History

```sh
curl -X GET "https://api.flightcontrol.com/api/v1/flights/12345/history" -H "Authorization: Bearer YOUR_API_KEY"
```

## Rate Limiting

To ensure fair usage of the API, rate limiting is implemented. Each user can make a maximum of 1000 requests per hour. If the rate limit is exceeded, the API will respond with a `429 Too Many Requests` status code.

## Versioning

This API follows semantic versioning. The current version is `v1`. The version is included in the URL path.

Example: `/api/v1/flights`

## Support and Contact Information

For support or additional information, please contact our technical support team at support@flightcontrol.com.

## Changelog

### Version 1.0.0

- Initial release with endpoints for flight status, control commands, flight history, and aircraft information.

---

This documentation provides a comprehensive guide to using the Flight Control API, covering all necessary aspects from authentication and endpoints to error handling and rate limiting. For any further assistance, please refer to the support contact information provided.

