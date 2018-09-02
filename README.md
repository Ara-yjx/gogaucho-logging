# GoGaucho Logging Backend

## Anything

**Route:** /anything

**Method:** POST

**Request Header:**

Content-Type: application/json 

**Request Body**
(JSON)
| name | type | 
|:-----|:-----|
| tag | String[] |
| data | JSON Object |

Add "?mode=test" as url query to prevent test data from going into the database, and check whether the body data is processed properly according to the response

**Example:**
```
URL: 
gogaucho.host.address/anything?mode=test

Request Header:
Content-Type: application/json 

Request Body:
{
  "tags": ["cat","pet"],
  "data": {
    "#cat": 3,
    "Did Petry managed to lu the cat today?": "No.",
  },
}
```