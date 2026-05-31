
# Tree Model Schema

```javascript
{
  speciesName: {
    type: String,
    required: true
  },

  latitude: {
    type: Number,
    required: true
  },

  longitude: {
    type: Number,
    required: true
  },

  plantingDate: {
    type: Date,
    required: true
  },

  healthStatus: {
    type: String,
    enum: ['Good', 'Fair', 'Poor'],
    required: true
  }
}
```

# Example Document
```javascript
{
  "_id": "6840f1f8c7b4f7f0d2a1c111",
  "speciesName": "Neem",
  "latitude": 28.6139,
  "longitude": 77.209,
  "plantingDate": "2026-05-01T00:00:00.000Z",
  "healthStatus": "Good",
  "createdAt": "2026-05-31T08:15:20.000Z",
  "updatedAt": "2026-05-31T08:15:20.000Z"
}
```
