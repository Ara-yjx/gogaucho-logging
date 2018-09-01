# GoGaucho Statistics Backend

## Anything

Route: /anything

Method: POST

Header: 

```Content-Type:application/json ```

Body Content
(JSON)
| name  | type | 
|:------|:-----|
| tag | text[] |
| data | JSON |
| timestamp | timestamptz |

(deprecated) 'tag' is an contenation of string segments seperated by ',' and has a max length of 63; can end with ','

Example:
```
{
  "tag": "cat,pet,",
  "data": {
    "#cat": 3,
    "Did Petry managed to lu the cat today?": "No.",
  },
}
```