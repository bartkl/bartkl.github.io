```python
@dataclass
class Customer:
	first_name: Optional[str]
	last_name: str
	subscribed_newsletter: bool
```


```json
{
  "$id": "https://example.com/customer.schema.json",
  "title": "Customer",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string",
      "required": true
    },
    "subscribedNewsletter": {
      "type": "boolean",
      "required": true
    }
  }
}
```

```sql
CREATE TABLE Customer (
	firstName VARCHAR(255),
	lastName VARCHAR(255) NOT NULL,
	subscribedNewsletter BOOL NOT NULL
)
```
