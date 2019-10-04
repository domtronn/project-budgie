import fetch from 'node-fetch'

const data = [
  {
    "index": {
      "cost-of-living-index": 128.87,
      "restaurant-price-index": 125.55,
      "groceries-index": 128.75,
      "rent-index": 46.57
    },
    "type": "city",
    "city": "Basel",
    "id": "switzerland-basel",
    "country": "Switzerland",
    "location": {
      "latitude": "47.5804",
      "longitude": "7.5900"
    }
  },
  {
    "index": {
      "cost-of-living-index": 128.3,
      "restaurant-price-index": 126.1,
      "groceries-index": 129.71,
      "rent-index": 59.66
    },
    "type": "city",
    "city": "Zurich",
    "id": "switzerland-zurich",
    "country": "Switzerland",
    "location": {
      "latitude": "47.3800",
      "longitude": "8.5500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 123.98,
      "restaurant-price-index": 124.62,
      "groceries-index": 125.82,
      "rent-index": 49.6
    },
    "type": "city",
    "city": "Lausanne",
    "id": "switzerland-lausanne",
    "country": "Switzerland",
    "location": {
      "latitude": "46.5304",
      "longitude": "6.6500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 122.3,
      "restaurant-price-index": 123.14,
      "groceries-index": 118.83,
      "rent-index": 69.18
    },
    "type": "city",
    "city": "Geneva",
    "id": "switzerland-geneva",
    "country": "Switzerland",
    "location": {
      "latitude": "46.2100",
      "longitude": "6.1400"
    }
  },
  {
    "index": {
      "cost-of-living-index": 118.22,
      "restaurant-price-index": 113.54,
      "groceries-index": 113.91,
      "rent-index": 38.35
    },
    "type": "city",
    "city": "Bern",
    "id": "switzerland-bern",
    "country": "Switzerland",
    "location": {
      "latitude": "46.9167",
      "longitude": "7.4670"
    }
  },
  {
    "index": {
      "cost-of-living-index": 107.21,
      "restaurant-price-index": 133.82,
      "groceries-index": 91.84,
      "rent-index": 37.39
    },
    "type": "city",
    "city": "Stavanger",
    "id": "norway-stavanger",
    "country": "Norway",
    "location": {
      "latitude": "58.9700",
      "longitude": "5.6800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 105.29,
      "restaurant-price-index": 119.8,
      "groceries-index": 93.35,
      "rent-index": 44.96
    },
    "type": "city",
    "city": "Oslo",
    "id": "norway-oslo",
    "country": "Norway",
    "location": {
      "latitude": "59.9167",
      "longitude": "10.7500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 101.74,
      "restaurant-price-index": 107.05,
      "groceries-index": 93.48,
      "rent-index": 37.97
    },
    "type": "city",
    "city": "Trondheim",
    "id": "norway-trondheim",
    "country": "Norway",
    "location": {
      "latitude": "63.4167",
      "longitude": "10.4167"
    }
  },
  {
    "index": {
      "cost-of-living-index": 100,
      "restaurant-price-index": 100,
      "groceries-index": 100,
      "rent-index": 100
    },
    "type": "city",
    "city": "New York",
    "id": "united-states-new-york",
    "country": "United States",
    "location": {
      "latitude": "40.6943",
      "longitude": "-73.9249"
    }
  },
  {
    "index": {
      "cost-of-living-index": 99.22,
      "restaurant-price-index": 111.34,
      "groceries-index": 85.22,
      "rent-index": 36.77
    },
    "type": "city",
    "city": "Bergen",
    "id": "norway-bergen",
    "country": "Norway",
    "location": {
      "latitude": "60.3910",
      "longitude": "5.3245"
    }
  },
  {
    "index": {
      "cost-of-living-index": 97.59,
      "restaurant-price-index": 120.39,
      "groceries-index": 81.82,
      "rent-index": 48.64
    },
    "type": "city",
    "city": "Reykjavik",
    "id": "iceland-reykjavik",
    "country": "Iceland",
    "location": {
      "latitude": "64.1500",
      "longitude": "-21.9500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 91.14,
      "restaurant-price-index": 74.65,
      "groceries-index": 93.7,
      "rent-index": 39.62
    },
    "type": "city",
    "city": "Anchorage",
    "id": "united-states-anchorage",
    "country": "United States",
    "location": {
      "latitude": "61.1508",
      "longitude": "-149.1091"
    }
  },
  {
    "index": {
      "cost-of-living-index": 90.6,
      "restaurant-price-index": 60.54,
      "groceries-index": 88.51,
      "rent-index": 41.19
    },
    "type": "city",
    "city": "Tokyo",
    "id": "japan-tokyo",
    "country": "Japan",
    "location": {
      "latitude": "35.6850",
      "longitude": "139.7514"
    }
  },
  {
    "index": {
      "cost-of-living-index": 89.36,
      "restaurant-price-index": 93.33,
      "groceries-index": 84.35,
      "rent-index": 114.06
    },
    "type": "city",
    "city": "San Francisco",
    "id": "united-states-san-francisco",
    "country": "United States",
    "location": {
      "latitude": "37.7562",
      "longitude": "-122.4430"
    }
  },
  {
    "index": {
      "cost-of-living-index": 88.84,
      "restaurant-price-index": 84.15,
      "groceries-index": 90.13,
      "rent-index": 63.21
    },
    "type": "city",
    "city": "Honolulu",
    "id": "united-states-honolulu",
    "country": "United States",
    "location": {
      "latitude": "21.3294",
      "longitude": "-157.8460"
    }
  },
  {
    "index": {
      "cost-of-living-index": 88.17,
      "restaurant-price-index": 88.21,
      "groceries-index": 89.43,
      "rent-index": 76.29
    },
    "type": "city",
    "city": "Washington",
    "id": "united-states-washington",
    "country": "United States",
    "location": {
      "latitude": "38.5515",
      "longitude": "-91.0151"
    }
  },
  {
    "index": {
      "cost-of-living-index": 87.77,
      "restaurant-price-index": 95.67,
      "groceries-index": 75.22,
      "rent-index": 56.54
    },
    "type": "city",
    "city": "Luxembourg",
    "id": "luxembourg-luxembourg",
    "country": "Luxembourg",
    "location": {
      "latitude": "49.6117",
      "longitude": "6.1300"
    }
  },
  {
    "index": {
      "cost-of-living-index": 87.44,
      "restaurant-price-index": 98.49,
      "groceries-index": 74.88,
      "rent-index": 25.05
    },
    "type": "city",
    "city": "Aalborg",
    "id": "denmark-aalborg",
    "country": "Denmark",
    "location": {
      "latitude": "57.0337",
      "longitude": "9.9166"
    }
  },
  {
    "index": {
      "cost-of-living-index": 87.06,
      "restaurant-price-index": 105.73,
      "groceries-index": 65.33,
      "rent-index": 46.58
    },
    "type": "city",
    "city": "Copenhagen",
    "id": "denmark-copenhagen",
    "country": "Denmark",
    "location": {
      "latitude": "55.6761",
      "longitude": "12.5683"
    }
  },
  {
    "index": {
      "cost-of-living-index": 86.95,
      "restaurant-price-index": 93.81,
      "groceries-index": 80.38,
      "rent-index": 80.39
    },
    "type": "city",
    "city": "Brooklyn",
    "id": "united-states-brooklyn",
    "country": "United States",
    "location": {
      "latitude": "41.4349",
      "longitude": "-81.7498"
    }
  },
  {
    "index": {
      "cost-of-living-index": 86.65,
      "restaurant-price-index": 83.43,
      "groceries-index": 88.46,
      "rent-index": 73.94
    },
    "type": "city",
    "city": "Boston",
    "id": "united-states-boston",
    "country": "United States",
    "location": {
      "latitude": "42.3188",
      "longitude": "-71.0846"
    }
  },
  {
    "index": {
      "cost-of-living-index": 86.59,
      "restaurant-price-index": 81.59,
      "groceries-index": 84.43,
      "rent-index": 66.1
    },
    "type": "city",
    "city": "Seattle",
    "id": "united-states-seattle",
    "country": "United States",
    "location": {
      "latitude": "47.6211",
      "longitude": "-122.3244"
    }
  },
  {
    "index": {
      "cost-of-living-index": 86.43,
      "restaurant-price-index": 92.15,
      "groceries-index": 68.39,
      "rent-index": 32.57
    },
    "type": "city",
    "city": "Arhus",
    "id": "denmark-arhus",
    "country": "Denmark",
    "location": {
      "latitude": 56.1629,
      "longitude": 10.2039
    }
  },
  {
    "index": {
      "cost-of-living-index": 85.42,
      "restaurant-price-index": 86.37,
      "groceries-index": 77.22,
      "rent-index": 46.84
    },
    "type": "city",
    "city": "Paris",
    "id": "france-paris",
    "country": "France",
    "location": {
      "latitude": "48.8667",
      "longitude": "2.3333"
    }
  },
  {
    "index": {
      "cost-of-living-index": 85.21,
      "restaurant-price-index": 78.07,
      "groceries-index": 85.64,
      "rent-index": 50.3
    },
    "type": "city",
    "city": "Toronto",
    "id": "canada-toronto",
    "country": "Canada",
    "location": {
      "latitude": "43.7000",
      "longitude": "-79.4200"
    }
  },
  {
    "index": {
      "cost-of-living-index": 84.48,
      "restaurant-price-index": 48.23,
      "groceries-index": 101.34,
      "rent-index": 27.68
    },
    "type": "city",
    "city": "Seoul",
    "id": "south-korea-seoul",
    "country": "South Korea"
  },
  {
    "index": {
      "cost-of-living-index": 83.74,
      "restaurant-price-index": 93.66,
      "groceries-index": 70.12,
      "rent-index": 42.92
    },
    "type": "city",
    "city": "Tel Aviv-Yafo",
    "id": "israel-tel-aviv-yafo",
    "country": "Israel",
    "location": {
      "latitude": "32.0800",
      "longitude": "34.7700"
    }
  },
  {
    "index": {
      "cost-of-living-index": 83.49,
      "restaurant-price-index": 74.92,
      "groceries-index": 85.6,
      "rent-index": 46.51
    },
    "type": "city",
    "city": "Philadelphia",
    "id": "united-states-philadelphia",
    "country": "United States",
    "location": {
      "latitude": "32.7761",
      "longitude": "-89.1221"
    }
  },
  {
    "index": {
      "cost-of-living-index": 81.5,
      "restaurant-price-index": 86.26,
      "groceries-index": 58.16,
      "rent-index": 68.87
    },
    "type": "city",
    "city": "London",
    "id": "united-kingdom-london",
    "country": "United Kingdom",
    "location": {
      "latitude": "51.5000",
      "longitude": "-0.1167"
    }
  },
  {
    "index": {
      "cost-of-living-index": 80.31,
      "restaurant-price-index": 87.9,
      "groceries-index": 73.4,
      "rent-index": 82.33
    },
    "type": "city",
    "city": "San Jose",
    "id": "united-states-san-jose",
    "country": "United States",
    "location": {
      "latitude": "37.3018",
      "longitude": "-121.8485"
    }
  },
  {
    "index": {
      "cost-of-living-index": 80.23,
      "restaurant-price-index": 55.41,
      "groceries-index": 68.28,
      "rent-index": 61.99
    },
    "type": "city",
    "city": "Singapore",
    "id": "singapore-singapore",
    "country": "Singapore",
    "location": {
      "latitude": "1.2930",
      "longitude": "103.8558"
    }
  },
  {
    "index": {
      "cost-of-living-index": 79.91,
      "restaurant-price-index": 83.43,
      "groceries-index": 61.73,
      "rent-index": 53.91
    },
    "type": "city",
    "city": "Amsterdam",
    "id": "netherlands-amsterdam",
    "country": "Netherlands",
    "location": {
      "latitude": "52.3500",
      "longitude": "4.9166"
    }
  },
  {
    "index": {
      "cost-of-living-index": 79.74,
      "restaurant-price-index": 74.77,
      "groceries-index": 70.43,
      "rent-index": 55.42
    },
    "type": "city",
    "city": "Sydney",
    "id": "australia-sydney",
    "country": "Australia",
    "location": {
      "latitude": "-33.9200",
      "longitude": "151.1852"
    }
  },
  {
    "index": {
      "cost-of-living-index": 79.52,
      "restaurant-price-index": 88.99,
      "groceries-index": 63.65,
      "rent-index": 20.54
    },
    "type": "city",
    "city": "Haifa",
    "id": "israel-haifa",
    "country": "Israel",
    "location": {
      "latitude": "32.8204",
      "longitude": "34.9800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 79.21,
      "restaurant-price-index": 55.62,
      "groceries-index": 79.4,
      "rent-index": 79.72
    },
    "type": "city",
    "city": "Hong Kong",
    "id": "hong-kong-hong-kong",
    "country": "Hong Kong",
    "location": {
      "latitude": "22.3050",
      "longitude": "114.1850"
    }
  },
  {
    "index": {
      "cost-of-living-index": 79.17,
      "restaurant-price-index": 78.67,
      "groceries-index": 74.38,
      "rent-index": 56.63
    },
    "type": "city",
    "city": "Chicago",
    "id": "united-states-chicago",
    "country": "United States",
    "location": {
      "latitude": "41.8373",
      "longitude": "-87.6861"
    }
  },
  {
    "index": {
      "cost-of-living-index": 78.99,
      "restaurant-price-index": 83.9,
      "groceries-index": 74.25,
      "rent-index": 72.16
    },
    "type": "city",
    "city": "Los Angeles",
    "id": "united-states-los-angeles",
    "country": "United States",
    "location": {
      "latitude": "34.1139",
      "longitude": "-118.4068"
    }
  },
  {
    "index": {
      "cost-of-living-index": 78.88,
      "restaurant-price-index": 84.77,
      "groceries-index": 60.09,
      "rent-index": 62.03
    },
    "type": "city",
    "city": "Dublin",
    "id": "ireland-dublin",
    "country": "Ireland",
    "location": {
      "latitude": "53.3331",
      "longitude": "-6.2489"
    }
  },
  {
    "index": {
      "cost-of-living-index": 78.4,
      "restaurant-price-index": 75.75,
      "groceries-index": 76.96,
      "rent-index": 42.32
    },
    "type": "city",
    "city": "Charlotte",
    "id": "united-states-charlotte",
    "country": "United States",
    "location": {
      "latitude": "42.5662",
      "longitude": "-84.8304"
    }
  },
  {
    "index": {
      "cost-of-living-index": 78.13,
      "restaurant-price-index": 72.45,
      "groceries-index": 75.06,
      "rent-index": 49.12
    },
    "type": "city",
    "city": "Portland",
    "id": "united-states-portland",
    "country": "United States",
    "location": {
      "latitude": "45.5372",
      "longitude": "-122.6500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 78.12,
      "restaurant-price-index": 87.68,
      "groceries-index": 62.15,
      "rent-index": 32.37
    },
    "type": "city",
    "city": "Jerusalem",
    "id": "israel-jerusalem",
    "country": "Israel",
    "location": {
      "latitude": "31.7784",
      "longitude": "35.2066"
    }
  },
  {
    "index": {
      "cost-of-living-index": 77.79,
      "restaurant-price-index": 71.29,
      "groceries-index": 72.75,
      "rent-index": 45.27
    },
    "type": "city",
    "city": "Sacramento",
    "id": "united-states-sacramento",
    "country": "United States",
    "location": {
      "latitude": "38.5667",
      "longitude": "-121.4683"
    }
  },
  {
    "index": {
      "cost-of-living-index": 77.51,
      "restaurant-price-index": 74.56,
      "groceries-index": 67.36,
      "rent-index": 41.36
    },
    "type": "city",
    "city": "Auckland",
    "id": "new-zealand-auckland",
    "country": "New Zealand",
    "location": {
      "latitude": "-36.8481",
      "longitude": "174.7630"
    }
  },
  {
    "index": {
      "cost-of-living-index": 77.29,
      "restaurant-price-index": 83.2,
      "groceries-index": 58.72,
      "rent-index": 33.35
    },
    "type": "city",
    "city": "Ramat Gan",
    "id": "israel-ramat-gan",
    "country": "Israel"
  },
  {
    "index": {
      "cost-of-living-index": 77.25,
      "restaurant-price-index": 72.8,
      "groceries-index": 68.04,
      "rent-index": 26.3
    },
    "type": "city",
    "city": "Lyon",
    "id": "france-lyon",
    "country": "France",
    "location": {
      "latitude": "45.7700",
      "longitude": "4.8300"
    }
  },
  {
    "index": {
      "cost-of-living-index": 77.13,
      "restaurant-price-index": 82.05,
      "groceries-index": 63.53,
      "rent-index": 39.9
    },
    "type": "city",
    "city": "Cork",
    "id": "ireland-cork",
    "country": "Ireland",
    "location": {
      "latitude": "51.8986",
      "longitude": "-8.4958"
    }
  },
  {
    "index": {
      "cost-of-living-index": 77.12,
      "restaurant-price-index": 82.25,
      "groceries-index": 65.61,
      "rent-index": 37.47
    },
    "type": "city",
    "city": "Stockholm",
    "id": "sweden-stockholm",
    "country": "Sweden",
    "location": {
      "latitude": "59.3508",
      "longitude": "18.0973"
    }
  },
  {
    "index": {
      "cost-of-living-index": 76.8,
      "restaurant-price-index": 83.9,
      "groceries-index": 59.22,
      "rent-index": 35.45
    },
    "type": "city",
    "city": "The Hague (Den Haag)",
    "id": "netherlands-the-hague-den-haag",
    "country": "Netherlands"
  },
  {
    "index": {
      "cost-of-living-index": 76.64,
      "restaurant-price-index": 80.31,
      "groceries-index": 71.39,
      "rent-index": 59.13
    },
    "type": "city",
    "city": "Miami",
    "id": "united-states-miami",
    "country": "United States",
    "location": {
      "latitude": "36.8877",
      "longitude": "-94.8718"
    }
  },
  {
    "index": {
      "cost-of-living-index": 76.07,
      "restaurant-price-index": 79.61,
      "groceries-index": 67.81,
      "rent-index": 47.54
    },
    "type": "city",
    "city": "Minneapolis",
    "id": "united-states-minneapolis",
    "country": "United States",
    "location": {
      "latitude": "44.9635",
      "longitude": "-93.2678"
    }
  },
  {
    "index": {
      "cost-of-living-index": 76.05,
      "restaurant-price-index": 83.8,
      "groceries-index": 58.98,
      "rent-index": 34.78
    },
    "type": "city",
    "city": "Utrecht",
    "id": "netherlands-utrecht",
    "country": "Netherlands",
    "location": {
      "latitude": "52.1003",
      "longitude": "5.1200"
    }
  },
  {
    "index": {
      "cost-of-living-index": 75.8,
      "restaurant-price-index": 79.49,
      "groceries-index": 66.11,
      "rent-index": 25.87
    },
    "type": "city",
    "city": "Linz",
    "id": "austria-linz",
    "country": "Austria",
    "location": {
      "latitude": "48.3192",
      "longitude": "14.2888"
    }
  },
  {
    "index": {
      "cost-of-living-index": 75.79,
      "restaurant-price-index": 82.36,
      "groceries-index": 69.4,
      "rent-index": 32.9
    },
    "type": "city",
    "city": "Albany",
    "id": "united-states-albany",
    "country": "United States",
    "location": {
      "latitude": "44.6274",
      "longitude": "-123.0966"
    }
  },
  {
    "index": {
      "cost-of-living-index": 75.2,
      "restaurant-price-index": 81.08,
      "groceries-index": 63.21,
      "rent-index": 39.18
    },
    "type": "city",
    "city": "Milan",
    "id": "italy-milan",
    "country": "Italy",
    "location": {
      "latitude": "45.4700",
      "longitude": "9.2050"
    }
  },
  {
    "index": {
      "cost-of-living-index": 75,
      "restaurant-price-index": 73.64,
      "groceries-index": 70.74,
      "rent-index": 22.77
    },
    "type": "city",
    "city": "Montpellier",
    "id": "france-montpellier",
    "country": "France",
    "location": {
      "latitude": "43.6104",
      "longitude": "3.8700"
    }
  },
  {
    "index": {
      "cost-of-living-index": 74.97,
      "restaurant-price-index": 80.8,
      "groceries-index": 63.2,
      "rent-index": 29.21
    },
    "type": "city",
    "city": "Florence",
    "id": "italy-florence",
    "country": "Italy",
    "location": {
      "latitude": "43.7800",
      "longitude": "11.2500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 74.8,
      "restaurant-price-index": 78.7,
      "groceries-index": 69.06,
      "rent-index": 42.69
    },
    "type": "city",
    "city": "Baltimore",
    "id": "united-states-baltimore",
    "country": "United States",
    "location": {
      "latitude": "39.3051",
      "longitude": "-76.6144"
    }
  },
  {
    "index": {
      "cost-of-living-index": 74.49,
      "restaurant-price-index": 77.3,
      "groceries-index": 65.28,
      "rent-index": 30.24
    },
    "type": "city",
    "city": "Perth",
    "id": "australia-perth",
    "country": "Australia",
    "location": {
      "latitude": "-31.9550",
      "longitude": "115.8400"
    }
  },
  {
    "index": {
      "cost-of-living-index": 74.48,
      "restaurant-price-index": 82.34,
      "groceries-index": 60.1,
      "rent-index": 24.89
    },
    "type": "city",
    "city": "Gent",
    "id": "belgium-gent",
    "country": "Belgium",
    "location": {
      "latitude": "51.0300",
      "longitude": "3.7000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 74.41,
      "restaurant-price-index": 68.01,
      "groceries-index": 69.69,
      "rent-index": 36.8
    },
    "type": "city",
    "city": "Pittsburgh",
    "id": "united-states-pittsburgh",
    "country": "United States",
    "location": {
      "latitude": "40.4396",
      "longitude": "-79.9763"
    }
  },
  {
    "index": {
      "cost-of-living-index": 74.4,
      "restaurant-price-index": 83.74,
      "groceries-index": 63.3,
      "rent-index": 30.68
    },
    "type": "city",
    "city": "Brussels",
    "id": "belgium-brussels",
    "country": "Belgium",
    "location": {
      "latitude": "50.8333",
      "longitude": "4.3333"
    }
  },
  {
    "index": {
      "cost-of-living-index": 74.39,
      "restaurant-price-index": 83.72,
      "groceries-index": 60.32,
      "rent-index": 35.78
    },
    "type": "city",
    "city": "Helsinki",
    "id": "finland-helsinki",
    "country": "Finland",
    "location": {
      "latitude": "60.1756",
      "longitude": "24.9341"
    }
  },
  {
    "index": {
      "cost-of-living-index": 74.34,
      "restaurant-price-index": 75.73,
      "groceries-index": 57.91,
      "rent-index": 31.75
    },
    "type": "city",
    "city": "Leiden",
    "id": "netherlands-leiden",
    "country": "Netherlands"
  },
  {
    "index": {
      "cost-of-living-index": 74.16,
      "restaurant-price-index": 80.58,
      "groceries-index": 58.31,
      "rent-index": 33.44
    },
    "type": "city",
    "city": "Eindhoven",
    "id": "netherlands-eindhoven",
    "country": "Netherlands",
    "location": {
      "latitude": "51.4300",
      "longitude": "5.5000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 74.05,
      "restaurant-price-index": 66.46,
      "groceries-index": 79.33,
      "rent-index": 37.66
    },
    "type": "city",
    "city": "Raleigh",
    "id": "united-states-raleigh",
    "country": "United States",
    "location": {
      "latitude": "35.8323",
      "longitude": "-78.6439"
    }
  },
  {
    "index": {
      "cost-of-living-index": 73.98,
      "restaurant-price-index": 77.56,
      "groceries-index": 67.46,
      "rent-index": 52.78
    },
    "type": "city",
    "city": "Denver",
    "id": "united-states-denver",
    "country": "United States",
    "location": {
      "latitude": "39.7621",
      "longitude": "-104.8759"
    }
  },
  {
    "index": {
      "cost-of-living-index": 73.85,
      "restaurant-price-index": 76.24,
      "groceries-index": 68.61,
      "rent-index": 28.1
    },
    "type": "city",
    "city": "Buffalo",
    "id": "united-states-buffalo",
    "country": "United States",
    "location": {
      "latitude": "45.1794",
      "longitude": "-93.8644"
    }
  },
  {
    "index": {
      "cost-of-living-index": 73.72,
      "restaurant-price-index": 70.62,
      "groceries-index": 73.33,
      "rent-index": 51.28
    },
    "type": "city",
    "city": "Vancouver",
    "id": "canada-vancouver",
    "country": "Canada",
    "location": {
      "latitude": "49.2734",
      "longitude": "-123.1216"
    }
  },
  {
    "index": {
      "cost-of-living-index": 73.71,
      "restaurant-price-index": 72.88,
      "groceries-index": 67.17,
      "rent-index": 22.24
    },
    "type": "city",
    "city": "Toulouse",
    "id": "france-toulouse",
    "country": "France",
    "location": {
      "latitude": "43.6200",
      "longitude": "1.4499"
    }
  },
  {
    "index": {
      "cost-of-living-index": 73.62,
      "restaurant-price-index": 70.74,
      "groceries-index": 57.93,
      "rent-index": 29.73
    },
    "type": "city",
    "city": "Delft",
    "id": "netherlands-delft",
    "country": "Netherlands"
  },
  {
    "index": {
      "cost-of-living-index": 73.56,
      "restaurant-price-index": 85.75,
      "groceries-index": 58.18,
      "rent-index": 25.48
    },
    "type": "city",
    "city": "Antwerp",
    "id": "belgium-antwerp",
    "country": "Belgium"
  },
  {
    "index": {
      "cost-of-living-index": 73.38,
      "restaurant-price-index": 72.23,
      "groceries-index": 66.62,
      "rent-index": 42.84
    },
    "type": "city",
    "city": "Melbourne",
    "id": "australia-melbourne",
    "country": "Australia",
    "location": {
      "latitude": "-37.8200",
      "longitude": "144.9750"
    }
  },
  {
    "index": {
      "cost-of-living-index": 73.35,
      "restaurant-price-index": 74.96,
      "groceries-index": 63.78,
      "rent-index": 18.88
    },
    "type": "city",
    "city": "Genoa",
    "id": "italy-genoa",
    "country": "Italy",
    "location": {
      "latitude": "44.4100",
      "longitude": "8.9300"
    }
  },
  {
    "index": {
      "cost-of-living-index": 73.15,
      "restaurant-price-index": 73.22,
      "groceries-index": 67.98,
      "rent-index": 40.04
    },
    "type": "city",
    "city": "Canberra",
    "id": "australia-canberra",
    "country": "Australia",
    "location": {
      "latitude": "-35.2830",
      "longitude": "149.1290"
    }
  },
  {
    "index": {
      "cost-of-living-index": 73.11,
      "restaurant-price-index": 73.2,
      "groceries-index": 66.23,
      "rent-index": 27.97
    },
    "type": "city",
    "city": "Christchurch",
    "id": "new-zealand-christchurch",
    "country": "New Zealand",
    "location": {
      "latitude": "-43.5350",
      "longitude": "172.6300"
    }
  },
  {
    "index": {
      "cost-of-living-index": 72.86,
      "restaurant-price-index": 70.92,
      "groceries-index": 73.07,
      "rent-index": 40.23
    },
    "type": "city",
    "city": "Asheville",
    "id": "united-states-asheville",
    "country": "United States",
    "location": {
      "latitude": "35.5706",
      "longitude": "-82.5537"
    }
  },
  {
    "index": {
      "cost-of-living-index": 72.65,
      "restaurant-price-index": 77.31,
      "groceries-index": 54.52,
      "rent-index": 43.71
    },
    "type": "city",
    "city": "Munich",
    "id": "germany-munich",
    "country": "Germany",
    "location": {
      "latitude": "48.1299",
      "longitude": "11.5750"
    }
  },
  {
    "index": {
      "cost-of-living-index": 72.64,
      "restaurant-price-index": 80.9,
      "groceries-index": 64.76,
      "rent-index": 34.09
    },
    "type": "city",
    "city": "Newcastle",
    "id": "australia-newcastle",
    "country": "Australia",
    "location": {
      "latitude": "-32.8453",
      "longitude": "151.8150"
    }
  },
  {
    "index": {
      "cost-of-living-index": 72.59,
      "restaurant-price-index": 66.7,
      "groceries-index": 65.41,
      "rent-index": 39.66
    },
    "type": "city",
    "city": "Wellington",
    "id": "new-zealand-wellington",
    "country": "New Zealand",
    "location": {
      "latitude": "-41.3000",
      "longitude": "174.7833"
    }
  },
  {
    "index": {
      "cost-of-living-index": 72.55,
      "restaurant-price-index": 72.38,
      "groceries-index": 59.27,
      "rent-index": 35.8
    },
    "type": "city",
    "city": "Galway",
    "id": "ireland-galway",
    "country": "Ireland",
    "location": {
      "latitude": "53.2724",
      "longitude": "-9.0488"
    }
  },
  {
    "index": {
      "cost-of-living-index": 72.49,
      "restaurant-price-index": 71.57,
      "groceries-index": 65.86,
      "rent-index": 35.97
    },
    "type": "city",
    "city": "Brisbane",
    "id": "australia-brisbane",
    "country": "Australia",
    "location": {
      "latitude": "-27.4550",
      "longitude": "153.0351"
    }
  },
  {
    "index": {
      "cost-of-living-index": 72.48,
      "restaurant-price-index": 89.1,
      "groceries-index": 54.43,
      "rent-index": 25.78
    },
    "type": "city",
    "city": "Aberdeen",
    "id": "united-kingdom-aberdeen",
    "country": "United Kingdom",
    "location": {
      "latitude": "57.1704",
      "longitude": "-2.0800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 72.41,
      "restaurant-price-index": 76.11,
      "groceries-index": 64.21,
      "rent-index": 65.22
    },
    "type": "city",
    "city": "San Diego",
    "id": "united-states-san-diego",
    "country": "United States",
    "location": {
      "latitude": "32.8312",
      "longitude": "-117.1226"
    }
  },
  {
    "index": {
      "cost-of-living-index": 72.29,
      "restaurant-price-index": 73.74,
      "groceries-index": 58.54,
      "rent-index": 26.7
    },
    "type": "city",
    "city": "Groningen",
    "id": "netherlands-groningen",
    "country": "Netherlands",
    "location": {
      "latitude": "53.2204",
      "longitude": "6.5800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 72.05,
      "restaurant-price-index": 63.54,
      "groceries-index": 73.94,
      "rent-index": 37.96
    },
    "type": "city",
    "city": "Victoria",
    "id": "canada-victoria",
    "country": "Canada",
    "location": {
      "latitude": "48.4333",
      "longitude": "-123.3500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 71.53,
      "restaurant-price-index": 60.74,
      "groceries-index": 74.81,
      "rent-index": 28.03
    },
    "type": "city",
    "city": "Halifax",
    "id": "canada-halifax",
    "country": "Canada",
    "location": {
      "latitude": "44.6500",
      "longitude": "-63.6000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 71.3,
      "restaurant-price-index": 66.89,
      "groceries-index": 53.64,
      "rent-index": 33.26
    },
    "type": "city",
    "city": "Hamburg",
    "id": "germany-hamburg",
    "country": "Germany",
    "location": {
      "latitude": "53.5500",
      "longitude": "10.0000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 71.3,
      "restaurant-price-index": 71.1,
      "groceries-index": 65.4,
      "rent-index": 30.4
    },
    "type": "city",
    "city": "Calgary",
    "id": "canada-calgary",
    "country": "Canada",
    "location": {
      "latitude": "51.0830",
      "longitude": "-114.0800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 71.17,
      "restaurant-price-index": 76.9,
      "groceries-index": 58.84,
      "rent-index": 36.93
    },
    "type": "city",
    "city": "Rome",
    "id": "italy-rome",
    "country": "Italy",
    "location": {
      "latitude": "41.8960",
      "longitude": "12.4833"
    }
  },
  {
    "index": {
      "cost-of-living-index": 70.99,
      "restaurant-price-index": 67.19,
      "groceries-index": 52.11,
      "rent-index": 36.14
    },
    "type": "city",
    "city": "Frankfurt",
    "id": "germany-frankfurt",
    "country": "Germany",
    "location": {
      "latitude": "50.1000",
      "longitude": "8.6750"
    }
  },
  {
    "index": {
      "cost-of-living-index": 70.72,
      "restaurant-price-index": 65.07,
      "groceries-index": 68.5,
      "rent-index": 33.57
    },
    "type": "city",
    "city": "Columbus",
    "id": "united-states-columbus",
    "country": "United States",
    "location": {
      "latitude": "33.5088",
      "longitude": "-88.4097"
    }
  },
  {
    "index": {
      "cost-of-living-index": 70.65,
      "restaurant-price-index": 72.1,
      "groceries-index": 63.18,
      "rent-index": 46.14
    },
    "type": "city",
    "city": "Atlanta",
    "id": "united-states-atlanta",
    "country": "United States",
    "location": {
      "latitude": "33.7626",
      "longitude": "-84.4228"
    }
  },
  {
    "index": {
      "cost-of-living-index": 70.58,
      "restaurant-price-index": 71.28,
      "groceries-index": 53.89,
      "rent-index": 38.09
    },
    "type": "city",
    "city": "Rotterdam",
    "id": "netherlands-rotterdam",
    "country": "Netherlands",
    "location": {
      "latitude": "51.9200",
      "longitude": "4.4800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 70.51,
      "restaurant-price-index": 70.68,
      "groceries-index": 67.38,
      "rent-index": 35.9
    },
    "type": "city",
    "city": "Gold Coast",
    "id": "australia-gold-coast",
    "country": "Australia",
    "location": {
      "latitude": "-28.0815",
      "longitude": "153.4482"
    }
  },
  {
    "index": {
      "cost-of-living-index": 70.42,
      "restaurant-price-index": 64.28,
      "groceries-index": 60.62,
      "rent-index": 23.71
    },
    "type": "city",
    "city": "Lille",
    "id": "france-lille",
    "country": "France",
    "location": {
      "latitude": "50.6500",
      "longitude": "3.0800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 70.38,
      "restaurant-price-index": 83.31,
      "groceries-index": 50.61,
      "rent-index": 41.43
    },
    "type": "city",
    "city": "Brighton",
    "id": "united-kingdom-brighton",
    "country": "United Kingdom",
    "location": {
      "latitude": "50.8303",
      "longitude": "-0.1700"
    }
  },
  {
    "index": {
      "cost-of-living-index": 70.36,
      "restaurant-price-index": 72.06,
      "groceries-index": 64.74,
      "rent-index": 29.81
    },
    "type": "city",
    "city": "Edmonton",
    "id": "canada-edmonton",
    "country": "Canada",
    "location": {
      "latitude": "53.5500",
      "longitude": "-113.5000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 70.15,
      "restaurant-price-index": 83.68,
      "groceries-index": 53.49,
      "rent-index": 34.78
    },
    "type": "city",
    "city": "Bristol",
    "id": "united-kingdom-bristol",
    "country": "United Kingdom",
    "location": {
      "latitude": "51.4500",
      "longitude": "-2.5833"
    }
  },
  {
    "index": {
      "cost-of-living-index": 70.1,
      "restaurant-price-index": 67.3,
      "groceries-index": 66.38,
      "rent-index": 28.28
    },
    "type": "city",
    "city": "Hobart",
    "id": "australia-hobart",
    "country": "Australia",
    "location": {
      "latitude": "-42.8500",
      "longitude": "147.2950"
    }
  },
  {
    "index": {
      "cost-of-living-index": 69.88,
      "restaurant-price-index": 66.47,
      "groceries-index": 69.54,
      "rent-index": 38.39
    },
    "type": "city",
    "city": "Reno",
    "id": "united-states-reno",
    "country": "United States",
    "location": {
      "latitude": "39.5497",
      "longitude": "-119.8483"
    }
  },
  {
    "index": {
      "cost-of-living-index": 69.8,
      "restaurant-price-index": 73.46,
      "groceries-index": 62.94,
      "rent-index": 30.87
    },
    "type": "city",
    "city": "Kansas City",
    "id": "united-states-kansas-city",
    "country": "United States",
    "location": {
      "latitude": "39.1234",
      "longitude": "-94.7443"
    }
  },
  {
    "index": {
      "cost-of-living-index": 69.8,
      "restaurant-price-index": 73.2,
      "groceries-index": 64.94,
      "rent-index": 41.56
    },
    "type": "city",
    "city": "Orlando",
    "id": "united-states-orlando",
    "country": "United States",
    "location": {
      "latitude": "28.4788",
      "longitude": "-81.3420"
    }
  },
  {
    "index": {
      "cost-of-living-index": 69.61,
      "restaurant-price-index": 71.85,
      "groceries-index": 52.47,
      "rent-index": 25.92
    },
    "type": "city",
    "city": "Heidelberg",
    "id": "germany-heidelberg",
    "country": "Germany",
    "location": {
      "latitude": "49.4200",
      "longitude": "8.7000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 69.57,
      "restaurant-price-index": 69.98,
      "groceries-index": 62.54,
      "rent-index": 31.33
    },
    "type": "city",
    "city": "Ottawa",
    "id": "canada-ottawa",
    "country": "Canada",
    "location": {
      "latitude": "45.4167",
      "longitude": "-75.7000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 69.38,
      "restaurant-price-index": 75.19,
      "groceries-index": 58.44,
      "rent-index": 24.56
    },
    "type": "city",
    "city": "Bologna",
    "id": "italy-bologna",
    "country": "Italy",
    "location": {
      "latitude": "44.5004",
      "longitude": "11.3400"
    }
  },
  {
    "index": {
      "cost-of-living-index": 69.37,
      "restaurant-price-index": 73,
      "groceries-index": 62.49,
      "rent-index": 33.88
    },
    "type": "city",
    "city": "Las Vegas",
    "id": "united-states-las-vegas",
    "country": "United States",
    "location": {
      "latitude": "36.2291",
      "longitude": "-115.2607"
    }
  },
  {
    "index": {
      "cost-of-living-index": 69.34,
      "restaurant-price-index": 73.35,
      "groceries-index": 61.59,
      "rent-index": 31.78
    },
    "type": "city",
    "city": "Gothenburg",
    "id": "sweden-gothenburg",
    "country": "Sweden"
  },
  {
    "index": {
      "cost-of-living-index": 69.17,
      "restaurant-price-index": 75.38,
      "groceries-index": 64.97,
      "rent-index": 49.38
    },
    "type": "city",
    "city": "Austin",
    "id": "united-states-austin",
    "country": "United States",
    "location": {
      "latitude": "43.6722",
      "longitude": "-92.9761"
    }
  },
  {
    "index": {
      "cost-of-living-index": 69.04,
      "restaurant-price-index": 67.5,
      "groceries-index": 66.41,
      "rent-index": 40.36
    },
    "type": "city",
    "city": "Tampa",
    "id": "united-states-tampa",
    "country": "United States",
    "location": {
      "latitude": "27.9937",
      "longitude": "-82.4454"
    }
  },
  {
    "index": {
      "cost-of-living-index": 69.03,
      "restaurant-price-index": 78.95,
      "groceries-index": 51.58,
      "rent-index": 40.65
    },
    "type": "city",
    "city": "Cambridge",
    "id": "united-kingdom-cambridge",
    "country": "United Kingdom",
    "location": {
      "latitude": "52.2004",
      "longitude": "0.1166"
    }
  },
  {
    "index": {
      "cost-of-living-index": 68.99,
      "restaurant-price-index": 67.31,
      "groceries-index": 52.16,
      "rent-index": 28.54
    },
    "type": "city",
    "city": "Dusseldorf",
    "id": "germany-dusseldorf",
    "country": "Germany",
    "location": {
      "latitude": "51.2204",
      "longitude": "6.7800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 68.93,
      "restaurant-price-index": 65.45,
      "groceries-index": 63.95,
      "rent-index": 33.07
    },
    "type": "city",
    "city": "Vienna",
    "id": "austria-vienna",
    "country": "Austria",
    "location": {
      "latitude": "48.2000",
      "longitude": "16.3666"
    }
  },
  {
    "index": {
      "cost-of-living-index": 68.87,
      "restaurant-price-index": 71.54,
      "groceries-index": 50.52,
      "rent-index": 45.52
    },
    "type": "city",
    "city": "Oxford",
    "id": "united-kingdom-oxford",
    "country": "United Kingdom",
    "location": {
      "latitude": "51.7704",
      "longitude": "-1.2500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 68.85,
      "restaurant-price-index": 69.24,
      "groceries-index": 55.54,
      "rent-index": 53.42
    },
    "type": "city",
    "city": "Dubai",
    "id": "united-arab-emirates-dubai",
    "country": "United Arab Emirates",
    "location": {
      "latitude": "25.2300",
      "longitude": "55.2800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 68.7,
      "restaurant-price-index": 67.3,
      "groceries-index": 51.16,
      "rent-index": 20.72
    },
    "type": "city",
    "city": "Mannheim",
    "id": "germany-mannheim",
    "country": "Germany",
    "location": {
      "latitude": "49.5004",
      "longitude": "8.4700"
    }
  },
  {
    "index": {
      "cost-of-living-index": 68.68,
      "restaurant-price-index": 72.78,
      "groceries-index": 56.56,
      "rent-index": 20.61
    },
    "type": "city",
    "city": "Turin",
    "id": "italy-turin",
    "country": "Italy",
    "location": {
      "latitude": "45.0704",
      "longitude": "7.6700"
    }
  },
  {
    "index": {
      "cost-of-living-index": 68.49,
      "restaurant-price-index": 75.16,
      "groceries-index": 61.29,
      "rent-index": 35.53
    },
    "type": "city",
    "city": "Milwaukee",
    "id": "united-states-milwaukee",
    "country": "United States",
    "location": {
      "latitude": "43.0640",
      "longitude": "-87.9669"
    }
  },
  {
    "index": {
      "cost-of-living-index": 68.13,
      "restaurant-price-index": 66.29,
      "groceries-index": 52.38,
      "rent-index": 24.97
    },
    "type": "city",
    "city": "Nuremberg",
    "id": "germany-nuremberg",
    "country": "Germany"
  },
  {
    "index": {
      "cost-of-living-index": 67.96,
      "restaurant-price-index": 68.07,
      "groceries-index": 50.57,
      "rent-index": 32.55
    },
    "type": "city",
    "city": "Stuttgart",
    "id": "germany-stuttgart",
    "country": "Germany",
    "location": {
      "latitude": "48.7800",
      "longitude": "9.2000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 67.95,
      "restaurant-price-index": 80.09,
      "groceries-index": 53.86,
      "rent-index": 32.02
    },
    "type": "city",
    "city": "Edinburgh",
    "id": "united-kingdom-edinburgh",
    "country": "United Kingdom",
    "location": {
      "latitude": "55.9483",
      "longitude": "-3.2191"
    }
  },
  {
    "index": {
      "cost-of-living-index": 67.91,
      "restaurant-price-index": 69.82,
      "groceries-index": 63.42,
      "rent-index": 35.81
    },
    "type": "city",
    "city": "Phoenix",
    "id": "united-states-phoenix",
    "country": "United States",
    "location": {
      "latitude": "33.5722",
      "longitude": "-112.0891"
    }
  },
  {
    "index": {
      "cost-of-living-index": 67.88,
      "restaurant-price-index": 61.91,
      "groceries-index": 63.66,
      "rent-index": 34.23
    },
    "type": "city",
    "city": "Kelowna",
    "id": "canada-kelowna",
    "country": "Canada",
    "location": {
      "latitude": "49.9000",
      "longitude": "-119.4833"
    }
  },
  {
    "index": {
      "cost-of-living-index": 67.77,
      "restaurant-price-index": 79.92,
      "groceries-index": 59.1,
      "rent-index": 47.23
    },
    "type": "city",
    "city": "Nashville",
    "id": "united-states-nashville",
    "country": "United States",
    "location": {
      "latitude": "36.1714",
      "longitude": "-86.7844"
    }
  },
  {
    "index": {
      "cost-of-living-index": 67.72,
      "restaurant-price-index": 66.37,
      "groceries-index": 63.45,
      "rent-index": 28.32
    },
    "type": "city",
    "city": "Adelaide",
    "id": "australia-adelaide",
    "country": "Australia",
    "location": {
      "latitude": "-34.9350",
      "longitude": "138.6000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 67.49,
      "restaurant-price-index": 62.05,
      "groceries-index": 50.93,
      "rent-index": 28.2
    },
    "type": "city",
    "city": "Bonn",
    "id": "germany-bonn",
    "country": "Germany",
    "location": {
      "latitude": "50.7205",
      "longitude": "7.0800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 66.84,
      "restaurant-price-index": 71.15,
      "groceries-index": 60.03,
      "rent-index": 46.16
    },
    "type": "city",
    "city": "Dallas",
    "id": "united-states-dallas",
    "country": "United States",
    "location": {
      "latitude": "44.9220",
      "longitude": "-123.3137"
    }
  },
  {
    "index": {
      "cost-of-living-index": 66.73,
      "restaurant-price-index": 66.09,
      "groceries-index": 50.54,
      "rent-index": 27.96
    },
    "type": "city",
    "city": "Cologne",
    "id": "germany-cologne",
    "country": "Germany",
    "location": {
      "latitude": "50.9300",
      "longitude": "6.9500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 66.59,
      "restaurant-price-index": 56.04,
      "groceries-index": 51.96,
      "rent-index": 32.69
    },
    "type": "city",
    "city": "Berlin",
    "id": "germany-berlin",
    "country": "Germany",
    "location": {
      "latitude": "52.5218",
      "longitude": "13.4015"
    }
  },
  {
    "index": {
      "cost-of-living-index": 66.47,
      "restaurant-price-index": 61.41,
      "groceries-index": 66.69,
      "rent-index": 27.34
    },
    "type": "city",
    "city": "Montreal",
    "id": "canada-montreal",
    "country": "Canada",
    "location": {
      "latitude": "45.5000",
      "longitude": "-73.5833"
    }
  },
  {
    "index": {
      "cost-of-living-index": 66.45,
      "restaurant-price-index": 66.46,
      "groceries-index": 54.24,
      "rent-index": 23.53
    },
    "type": "city",
    "city": "Newcastle upon Tyne",
    "id": "united-kingdom-newcastle-upon-tyne",
    "country": "United Kingdom"
  },
  {
    "index": {
      "cost-of-living-index": 66.19,
      "restaurant-price-index": 70.76,
      "groceries-index": 50.16,
      "rent-index": 22.06
    },
    "type": "city",
    "city": "Leicester",
    "id": "united-kingdom-leicester",
    "country": "United Kingdom",
    "location": {
      "latitude": "52.6300",
      "longitude": "-1.1332"
    }
  },
  {
    "index": {
      "cost-of-living-index": 66.09,
      "restaurant-price-index": 64.79,
      "groceries-index": 62.79,
      "rent-index": 35.45
    },
    "type": "city",
    "city": "San Antonio",
    "id": "united-states-san-antonio",
    "country": "United States",
    "location": {
      "latitude": "29.4722",
      "longitude": "-98.5247"
    }
  },
  {
    "index": {
      "cost-of-living-index": 66.05,
      "restaurant-price-index": 75.01,
      "groceries-index": 50.22,
      "rent-index": 30.12
    },
    "type": "city",
    "city": "Manchester",
    "id": "united-kingdom-manchester",
    "country": "United Kingdom",
    "location": {
      "latitude": "53.5004",
      "longitude": "-2.2480"
    }
  },
  {
    "index": {
      "cost-of-living-index": 65.97,
      "restaurant-price-index": 65.9,
      "groceries-index": 51.01,
      "rent-index": 22.17
    },
    "type": "city",
    "city": "Bremen",
    "id": "germany-bremen",
    "country": "Germany",
    "location": {
      "latitude": "53.0800",
      "longitude": "8.8000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 65.78,
      "restaurant-price-index": 79.98,
      "groceries-index": 48.79,
      "rent-index": 33.8
    },
    "type": "city",
    "city": "Sliema",
    "id": "malta-sliema",
    "country": "Malta",
    "location": {
      "latitude": "35.9125",
      "longitude": "14.5019"
    }
  },
  {
    "index": {
      "cost-of-living-index": 65.53,
      "restaurant-price-index": 64.96,
      "groceries-index": 60.66,
      "rent-index": 30.98
    },
    "type": "city",
    "city": "Indianapolis",
    "id": "united-states-indianapolis",
    "country": "United States",
    "location": {
      "latitude": "39.7771",
      "longitude": "-86.1458"
    }
  },
  {
    "index": {
      "cost-of-living-index": 65.36,
      "restaurant-price-index": 75.22,
      "groceries-index": 57.04,
      "rent-index": 28.57
    },
    "type": "city",
    "city": "Louisville",
    "id": "united-states-louisville",
    "country": "United States",
    "location": {
      "latitude": "38.1662",
      "longitude": "-85.6488"
    }
  },
  {
    "index": {
      "cost-of-living-index": 64.76,
      "restaurant-price-index": 57.98,
      "groceries-index": 51.34,
      "rent-index": 23.89
    },
    "type": "city",
    "city": "Karlsruhe",
    "id": "germany-karlsruhe",
    "country": "Germany",
    "location": {
      "latitude": "49.0000",
      "longitude": "8.4000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 64.7,
      "restaurant-price-index": 78.82,
      "groceries-index": 56.11,
      "rent-index": 43.17
    },
    "type": "city",
    "city": "Houston",
    "id": "united-states-houston",
    "country": "United States",
    "location": {
      "latitude": "29.7868",
      "longitude": "-95.3905"
    }
  },
  {
    "index": {
      "cost-of-living-index": 64.69,
      "restaurant-price-index": 55.92,
      "groceries-index": 49.86,
      "rent-index": 20.04
    },
    "type": "city",
    "city": "Leipzig",
    "id": "germany-leipzig",
    "country": "Germany",
    "location": {
      "latitude": "51.3354",
      "longitude": "12.4100"
    }
  },
  {
    "index": {
      "cost-of-living-index": 64.62,
      "restaurant-price-index": 61.45,
      "groceries-index": 52.12,
      "rent-index": 30.87
    },
    "type": "city",
    "city": "Freiburg im Breisgau",
    "id": "germany-freiburg-im-breisgau",
    "country": "Germany"
  },
  {
    "index": {
      "cost-of-living-index": 64.59,
      "restaurant-price-index": 75.34,
      "groceries-index": 52.9,
      "rent-index": 22.69
    },
    "type": "city",
    "city": "Dundee",
    "id": "united-kingdom-dundee",
    "country": "United Kingdom",
    "location": {
      "latitude": "56.4704",
      "longitude": "-3.0000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 64.47,
      "restaurant-price-index": 66.58,
      "groceries-index": 50.62,
      "rent-index": 23.79
    },
    "type": "city",
    "city": "Hanover",
    "id": "germany-hanover",
    "country": "Germany"
  },
  {
    "index": {
      "cost-of-living-index": 64.39,
      "restaurant-price-index": 67.26,
      "groceries-index": 57.63,
      "rent-index": 38.39
    },
    "type": "city",
    "city": "Madison",
    "id": "united-states-madison",
    "country": "United States",
    "location": {
      "latitude": "44.0062",
      "longitude": "-97.1084"
    }
  },
  {
    "index": {
      "cost-of-living-index": 64.24,
      "restaurant-price-index": 56.4,
      "groceries-index": 50.64,
      "rent-index": 23.26
    },
    "type": "city",
    "city": "Dresden",
    "id": "germany-dresden",
    "country": "Germany",
    "location": {
      "latitude": "51.0500",
      "longitude": "13.7500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 64.24,
      "restaurant-price-index": 75.6,
      "groceries-index": 48.77,
      "rent-index": 29.55
    },
    "type": "city",
    "city": "Birmingham",
    "id": "united-kingdom-birmingham",
    "country": "United Kingdom",
    "location": {
      "latitude": "52.4750",
      "longitude": "-1.9200"
    }
  },
  {
    "index": {
      "cost-of-living-index": 64.18,
      "restaurant-price-index": 65.92,
      "groceries-index": 50.53,
      "rent-index": 18.87
    },
    "type": "city",
    "city": "Derby",
    "id": "united-kingdom-derby",
    "country": "United Kingdom",
    "location": {
      "latitude": "52.9333",
      "longitude": "-1.5000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 64.13,
      "restaurant-price-index": 64.33,
      "groceries-index": 58.55,
      "rent-index": 37.43
    },
    "type": "city",
    "city": "Salt Lake City",
    "id": "united-states-salt-lake-city",
    "country": "United States",
    "location": {
      "latitude": "40.7774",
      "longitude": "-111.9301"
    }
  },
  {
    "index": {
      "cost-of-living-index": 63.81,
      "restaurant-price-index": 70.96,
      "groceries-index": 50.49,
      "rent-index": 26.74
    },
    "type": "city",
    "city": "Leeds",
    "id": "united-kingdom-leeds",
    "country": "United Kingdom",
    "location": {
      "latitude": "53.8300",
      "longitude": "-1.5800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 63.74,
      "restaurant-price-index": 67.12,
      "groceries-index": 51.9,
      "rent-index": 46.01
    },
    "type": "city",
    "city": "Abu Dhabi",
    "id": "united-arab-emirates-abu-dhabi",
    "country": "United Arab Emirates",
    "location": {
      "latitude": "24.4667",
      "longitude": "54.3666"
    }
  },
  {
    "index": {
      "cost-of-living-index": 63.72,
      "restaurant-price-index": 74.41,
      "groceries-index": 49.98,
      "rent-index": 26.13
    },
    "type": "city",
    "city": "Glasgow",
    "id": "united-kingdom-glasgow",
    "country": "United Kingdom",
    "location": {
      "latitude": "55.8744",
      "longitude": "-4.2507"
    }
  },
  {
    "index": {
      "cost-of-living-index": 62.56,
      "restaurant-price-index": 68.09,
      "groceries-index": 50.8,
      "rent-index": 18.11
    },
    "type": "city",
    "city": "Nicosia",
    "id": "cyprus-nicosia",
    "country": "Cyprus",
    "location": {
      "latitude": "35.1667",
      "longitude": "33.3666"
    }
  },
  {
    "index": {
      "cost-of-living-index": 62.43,
      "restaurant-price-index": 65.23,
      "groceries-index": 52.58,
      "rent-index": 51
    },
    "type": "city",
    "city": "Doha",
    "id": "qatar-doha",
    "country": "Qatar",
    "location": {
      "latitude": "25.2866",
      "longitude": "51.5330"
    }
  },
  {
    "index": {
      "cost-of-living-index": 62.31,
      "restaurant-price-index": 71.72,
      "groceries-index": 46.3,
      "rent-index": 28.86
    },
    "type": "city",
    "city": "Limassol",
    "id": "cyprus-limassol",
    "country": "Cyprus"
  },
  {
    "index": {
      "cost-of-living-index": 61.95,
      "restaurant-price-index": 48.97,
      "groceries-index": 50.52,
      "rent-index": 21.75
    },
    "type": "city",
    "city": "Aachen",
    "id": "germany-aachen",
    "country": "Germany"
  },
  {
    "index": {
      "cost-of-living-index": 61.83,
      "restaurant-price-index": 60.05,
      "groceries-index": 54.97,
      "rent-index": 24.11
    },
    "type": "city",
    "city": "Winnipeg",
    "id": "canada-winnipeg",
    "country": "Canada",
    "location": {
      "latitude": "49.8830",
      "longitude": "-97.1660"
    }
  },
  {
    "index": {
      "cost-of-living-index": 61.57,
      "restaurant-price-index": 58.88,
      "groceries-index": 45.68,
      "rent-index": 28.47
    },
    "type": "city",
    "city": "Beirut",
    "id": "lebanon-beirut",
    "country": "Lebanon",
    "location": {
      "latitude": "33.8720",
      "longitude": "35.5097"
    }
  },
  {
    "index": {
      "cost-of-living-index": 61.41,
      "restaurant-price-index": 63.82,
      "groceries-index": 51.3,
      "rent-index": 27.81
    },
    "type": "city",
    "city": "Cardiff",
    "id": "united-kingdom-cardiff",
    "country": "United Kingdom",
    "location": {
      "latitude": "51.5000",
      "longitude": "-3.2250"
    }
  },
  {
    "index": {
      "cost-of-living-index": 61.41,
      "restaurant-price-index": 65.34,
      "groceries-index": 52.52,
      "rent-index": 22.78
    },
    "type": "city",
    "city": "Sheffield",
    "id": "united-kingdom-sheffield",
    "country": "United Kingdom",
    "location": {
      "latitude": "53.3667",
      "longitude": "-1.5000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 61.3,
      "restaurant-price-index": 64.82,
      "groceries-index": 47.61,
      "rent-index": 30.08
    },
    "type": "city",
    "city": "Southampton",
    "id": "united-kingdom-southampton",
    "country": "United Kingdom",
    "location": {
      "latitude": "50.9000",
      "longitude": "-1.4000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 60.77,
      "restaurant-price-index": 63.18,
      "groceries-index": 44.95,
      "rent-index": 23.96
    },
    "type": "city",
    "city": "Liverpool",
    "id": "united-kingdom-liverpool",
    "country": "United Kingdom",
    "location": {
      "latitude": "53.4160",
      "longitude": "-2.9180"
    }
  },
  {
    "index": {
      "cost-of-living-index": 60.68,
      "restaurant-price-index": 30.97,
      "groceries-index": 69.24,
      "rent-index": 18.96
    },
    "type": "city",
    "city": "Taipei",
    "id": "taiwan-taipei",
    "country": "Taiwan",
    "location": {
      "latitude": "25.0358",
      "longitude": "121.5683"
    }
  },
  {
    "index": {
      "cost-of-living-index": 60.67,
      "restaurant-price-index": 54.95,
      "groceries-index": 51.73,
      "rent-index": 18.97
    },
    "type": "city",
    "city": "Naples",
    "id": "italy-naples",
    "country": "Italy",
    "location": {
      "latitude": "40.8400",
      "longitude": "14.2450"
    }
  },
  {
    "index": {
      "cost-of-living-index": 60.16,
      "restaurant-price-index": 49.45,
      "groceries-index": 56.47,
      "rent-index": 18.68
    },
    "type": "city",
    "city": "San Jose",
    "id": "costa-rica-san-jose",
    "country": "Costa Rica",
    "location": {
      "latitude": "9.9350",
      "longitude": "-84.0841"
    }
  },
  {
    "index": {
      "cost-of-living-index": 60.12,
      "restaurant-price-index": 59.61,
      "groceries-index": 45.14,
      "rent-index": 33.52
    },
    "type": "city",
    "city": "Barcelona",
    "id": "spain-barcelona",
    "country": "Spain",
    "location": {
      "latitude": "41.3833",
      "longitude": "2.1834"
    }
  },
  {
    "index": {
      "cost-of-living-index": 59.97,
      "restaurant-price-index": 62.92,
      "groceries-index": 50.71,
      "rent-index": 24.79
    },
    "type": "city",
    "city": "London",
    "id": "canada-london",
    "country": "Canada",
    "location": {
      "latitude": "42.9700",
      "longitude": "-81.2500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 59.76,
      "restaurant-price-index": 67.31,
      "groceries-index": 51.73,
      "rent-index": 25.55
    },
    "type": "city",
    "city": "Little Rock",
    "id": "united-states-little-rock",
    "country": "United States",
    "location": {
      "latitude": "34.7255",
      "longitude": "-92.3581"
    }
  },
  {
    "index": {
      "cost-of-living-index": 59.43,
      "restaurant-price-index": 61.89,
      "groceries-index": 45.18,
      "rent-index": 14.31
    },
    "type": "city",
    "city": "Athens",
    "id": "greece-athens",
    "country": "Greece",
    "location": {
      "latitude": "37.9833",
      "longitude": "23.7333"
    }
  },
  {
    "index": {
      "cost-of-living-index": 59.32,
      "restaurant-price-index": 70.48,
      "groceries-index": 49.57,
      "rent-index": 23.55
    },
    "type": "city",
    "city": "Belfast",
    "id": "united-kingdom-belfast",
    "country": "United Kingdom",
    "location": {
      "latitude": "54.6000",
      "longitude": "-5.9600"
    }
  },
  {
    "index": {
      "cost-of-living-index": 59.21,
      "restaurant-price-index": 42.26,
      "groceries-index": 53.42,
      "rent-index": 13.78
    },
    "type": "city",
    "city": "Harare",
    "id": "zimbabwe-harare",
    "country": "Zimbabwe",
    "location": {
      "latitude": "-17.8178",
      "longitude": "31.0447"
    }
  },
  {
    "index": {
      "cost-of-living-index": 58.89,
      "restaurant-price-index": 59.54,
      "groceries-index": 45.9,
      "rent-index": 32.51
    },
    "type": "city",
    "city": "Madrid",
    "id": "spain-madrid",
    "country": "Spain",
    "location": {
      "latitude": "40.4000",
      "longitude": "-3.6834"
    }
  },
  {
    "index": {
      "cost-of-living-index": 58.67,
      "restaurant-price-index": 39.57,
      "groceries-index": 51.47,
      "rent-index": 15.83
    },
    "type": "city",
    "city": "Al Khobar",
    "id": "saudi-arabia-al-khobar",
    "country": "Saudi Arabia"
  },
  {
    "index": {
      "cost-of-living-index": 58.53,
      "restaurant-price-index": 66.91,
      "groceries-index": 43.07,
      "rent-index": 17.69
    },
    "type": "city",
    "city": "Kingston upon Hull",
    "id": "united-kingdom-kingston-upon-hull",
    "country": "United Kingdom",
    "location": {
      "latitude": "53.7504",
      "longitude": "-0.3300"
    }
  },
  {
    "index": {
      "cost-of-living-index": 58.48,
      "restaurant-price-index": 53.9,
      "groceries-index": 49.33,
      "rent-index": 30.38
    },
    "type": "city",
    "city": "Manama",
    "id": "bahrain-manama",
    "country": "Bahrain",
    "location": {
      "latitude": "26.2361",
      "longitude": "50.5831"
    }
  },
  {
    "index": {
      "cost-of-living-index": 57.52,
      "restaurant-price-index": 53.91,
      "groceries-index": 45.77,
      "rent-index": 12.73
    },
    "type": "city",
    "city": "Amman",
    "id": "jordan-amman",
    "country": "Jordan",
    "location": {
      "latitude": "31.9500",
      "longitude": "35.9333"
    }
  },
  {
    "index": {
      "cost-of-living-index": 56.76,
      "restaurant-price-index": 28.56,
      "groceries-index": 57.25,
      "rent-index": 26.56
    },
    "type": "city",
    "city": "Bangkok",
    "id": "thailand-bangkok",
    "country": "Thailand",
    "location": {
      "latitude": "13.7500",
      "longitude": "100.5166"
    }
  },
  {
    "index": {
      "cost-of-living-index": 56.59,
      "restaurant-price-index": 57.6,
      "groceries-index": 41.45,
      "rent-index": 11.54
    },
    "type": "city",
    "city": "Thessaloniki",
    "id": "greece-thessaloniki",
    "country": "Greece",
    "location": {
      "latitude": "40.6961",
      "longitude": "22.8850"
    }
  },
  {
    "index": {
      "cost-of-living-index": 56.56,
      "restaurant-price-index": 56.77,
      "groceries-index": 52.21,
      "rent-index": 28.41
    },
    "type": "city",
    "city": "Panama City",
    "id": "panama-panama-city",
    "country": "Panama",
    "location": {
      "latitude": "8.9680",
      "longitude": "-79.5330"
    }
  },
  {
    "index": {
      "cost-of-living-index": 55.12,
      "restaurant-price-index": 48.29,
      "groceries-index": 44.59,
      "rent-index": 19.86
    },
    "type": "city",
    "city": "Ljubljana",
    "id": "slovenia-ljubljana",
    "country": "Slovenia",
    "location": {
      "latitude": "46.0553",
      "longitude": "14.5150"
    }
  },
  {
    "index": {
      "cost-of-living-index": 54.89,
      "restaurant-price-index": 52.73,
      "groceries-index": 43.97,
      "rent-index": 20.16
    },
    "type": "city",
    "city": "Valencia",
    "id": "spain-valencia",
    "country": "Spain",
    "location": {
      "latitude": "39.4850",
      "longitude": "-0.4000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 54.59,
      "restaurant-price-index": 49.83,
      "groceries-index": 43.73,
      "rent-index": 15.81
    },
    "type": "city",
    "city": "Montevideo",
    "id": "uruguay-montevideo",
    "country": "Uruguay",
    "location": {
      "latitude": "-34.8580",
      "longitude": "-56.1711"
    }
  },
  {
    "index": {
      "cost-of-living-index": 53.73,
      "restaurant-price-index": 51.67,
      "groceries-index": 43.26,
      "rent-index": 20.34
    },
    "type": "city",
    "city": "Seville (Sevilla)",
    "id": "spain-seville-sevilla",
    "country": "Spain"
  },
  {
    "index": {
      "cost-of-living-index": 53.63,
      "restaurant-price-index": 48.11,
      "groceries-index": 42.09,
      "rent-index": 32.08
    },
    "type": "city",
    "city": "Lisbon",
    "id": "portugal-lisbon",
    "country": "Portugal",
    "location": {
      "latitude": "38.7227",
      "longitude": "-9.1449"
    }
  },
  {
    "index": {
      "cost-of-living-index": 53.47,
      "restaurant-price-index": 60.12,
      "groceries-index": 36.63,
      "rent-index": 17.57
    },
    "type": "city",
    "city": "Tallinn",
    "id": "estonia-tallinn",
    "country": "Estonia",
    "location": {
      "latitude": "59.4339",
      "longitude": "24.7280"
    }
  },
  {
    "index": {
      "cost-of-living-index": 53.02,
      "restaurant-price-index": 42.77,
      "groceries-index": 38.87,
      "rent-index": 25.47
    },
    "type": "city",
    "city": "Sharjah",
    "id": "united-arab-emirates-sharjah",
    "country": "United Arab Emirates",
    "location": {
      "latitude": "25.3714",
      "longitude": "55.4065"
    }
  },
  {
    "index": {
      "cost-of-living-index": 52.79,
      "restaurant-price-index": 56.67,
      "groceries-index": 41.61,
      "rent-index": 15.69
    },
    "type": "city",
    "city": "Alicante",
    "id": "spain-alicante",
    "country": "Spain",
    "location": {
      "latitude": "38.3512",
      "longitude": "-0.4836"
    }
  },
  {
    "index": {
      "cost-of-living-index": 52.64,
      "restaurant-price-index": 47.07,
      "groceries-index": 38.31,
      "rent-index": 8.72
    },
    "type": "city",
    "city": "Patras",
    "id": "greece-patras",
    "country": "Greece"
  },
  {
    "index": {
      "cost-of-living-index": 51.87,
      "restaurant-price-index": 45.11,
      "groceries-index": 41.69,
      "rent-index": 24.3
    },
    "type": "city",
    "city": "Porto",
    "id": "portugal-porto",
    "country": "Portugal",
    "location": {
      "latitude": "41.1500",
      "longitude": "-8.6200"
    }
  },
  {
    "index": {
      "cost-of-living-index": 51.61,
      "restaurant-price-index": 52.29,
      "groceries-index": 43.21,
      "rent-index": 16.96
    },
    "type": "city",
    "city": "Santiago",
    "id": "chile-santiago",
    "country": "Chile",
    "location": {
      "latitude": "-33.4500",
      "longitude": "-70.6670"
    }
  },
  {
    "index": {
      "cost-of-living-index": 51.21,
      "restaurant-price-index": 48.59,
      "groceries-index": 41.2,
      "rent-index": 13.59
    },
    "type": "city",
    "city": "Split",
    "id": "croatia-split",
    "country": "Croatia",
    "location": {
      "latitude": "43.5204",
      "longitude": "16.4700"
    }
  },
  {
    "index": {
      "cost-of-living-index": 51.18,
      "restaurant-price-index": 45.8,
      "groceries-index": 39.83,
      "rent-index": 11.34
    },
    "type": "city",
    "city": "Heraklion",
    "id": "greece-heraklion",
    "country": "Greece"
  },
  {
    "index": {
      "cost-of-living-index": 51.07,
      "restaurant-price-index": 37.38,
      "groceries-index": 53.69,
      "rent-index": 35.2
    },
    "type": "city",
    "city": "Shanghai",
    "id": "china-shanghai",
    "country": "China",
    "location": {
      "latitude": "31.2165",
      "longitude": "121.4365"
    }
  },
  {
    "index": {
      "cost-of-living-index": 51.05,
      "restaurant-price-index": 48.39,
      "groceries-index": 42.29,
      "rent-index": 22.52
    },
    "type": "city",
    "city": "Malaga",
    "id": "spain-malaga",
    "country": "Spain",
    "location": {
      "latitude": "36.7204",
      "longitude": "-4.4200"
    }
  },
  {
    "index": {
      "cost-of-living-index": 50.99,
      "restaurant-price-index": 44.54,
      "groceries-index": 41.12,
      "rent-index": 15.46
    },
    "type": "city",
    "city": "Zagreb",
    "id": "croatia-zagreb",
    "country": "Croatia",
    "location": {
      "latitude": "45.8000",
      "longitude": "16.0000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 50.95,
      "restaurant-price-index": 41.22,
      "groceries-index": 40.31,
      "rent-index": 15.18
    },
    "type": "city",
    "city": "Coimbra",
    "id": "portugal-coimbra",
    "country": "Portugal",
    "location": {
      "latitude": "40.2004",
      "longitude": "-8.4167"
    }
  },
  {
    "index": {
      "cost-of-living-index": 50.93,
      "restaurant-price-index": 50.45,
      "groceries-index": 43.3,
      "rent-index": 22.41
    },
    "type": "city",
    "city": "Muscat",
    "id": "oman-muscat",
    "country": "Oman",
    "location": {
      "latitude": "23.6133",
      "longitude": "58.5933"
    }
  },
  {
    "index": {
      "cost-of-living-index": 50.85,
      "restaurant-price-index": 32.48,
      "groceries-index": 37.95,
      "rent-index": 11.28
    },
    "type": "city",
    "city": "Jeddah (Jiddah)",
    "id": "saudi-arabia-jeddah-jiddah",
    "country": "Saudi Arabia"
  },
  {
    "index": {
      "cost-of-living-index": 50.81,
      "restaurant-price-index": 42.3,
      "groceries-index": 42.11,
      "rent-index": 11.3
    },
    "type": "city",
    "city": "Rijeka",
    "id": "croatia-rijeka",
    "country": "Croatia",
    "location": {
      "latitude": "45.3300",
      "longitude": "14.4500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 50.43,
      "restaurant-price-index": 47.79,
      "groceries-index": 38.57,
      "rent-index": 12.96
    },
    "type": "city",
    "city": "Tartu",
    "id": "estonia-tartu",
    "country": "Estonia",
    "location": {
      "latitude": "58.3839",
      "longitude": "26.7099"
    }
  },
  {
    "index": {
      "cost-of-living-index": 50.1,
      "restaurant-price-index": 48.42,
      "groceries-index": 35.97,
      "rent-index": 13.31
    },
    "type": "city",
    "city": "Riga",
    "id": "latvia-riga",
    "country": "Latvia",
    "location": {
      "latitude": "56.9500",
      "longitude": "24.1000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 49.9,
      "restaurant-price-index": 39.41,
      "groceries-index": 38.32,
      "rent-index": 33.05
    },
    "type": "city",
    "city": "Ajman",
    "id": "united-arab-emirates-ajman",
    "country": "United Arab Emirates",
    "location": {
      "latitude": "25.4056",
      "longitude": "55.4618"
    }
  },
  {
    "index": {
      "cost-of-living-index": 49.88,
      "restaurant-price-index": 34.06,
      "groceries-index": 39.85,
      "rent-index": 12.44
    },
    "type": "city",
    "city": "Ad Dammam",
    "id": "saudi-arabia-ad-dammam",
    "country": "Saudi Arabia"
  },
  {
    "index": {
      "cost-of-living-index": 49.78,
      "restaurant-price-index": 38.41,
      "groceries-index": 38.6,
      "rent-index": 12.55
    },
    "type": "city",
    "city": "Riyadh",
    "id": "saudi-arabia-riyadh",
    "country": "Saudi Arabia",
    "location": {
      "latitude": "24.6408",
      "longitude": "46.7727"
    }
  },
  {
    "index": {
      "cost-of-living-index": 49.24,
      "restaurant-price-index": 31.08,
      "groceries-index": 48.53,
      "rent-index": 17.49
    },
    "type": "city",
    "city": "Pattaya",
    "id": "thailand-pattaya",
    "country": "Thailand"
  },
  {
    "index": {
      "cost-of-living-index": 49.18,
      "restaurant-price-index": 42.85,
      "groceries-index": 35.24,
      "rent-index": 16.17
    },
    "type": "city",
    "city": "Pretoria",
    "id": "south-africa-pretoria",
    "country": "South Africa",
    "location": {
      "latitude": "-25.7069",
      "longitude": "28.2294"
    }
  },
  {
    "index": {
      "cost-of-living-index": 48.97,
      "restaurant-price-index": 39.68,
      "groceries-index": 40.27,
      "rent-index": 25.59
    },
    "type": "city",
    "city": "Prague",
    "id": "czech-republic-prague",
    "country": "Czech Republic"
  },
  {
    "index": {
      "cost-of-living-index": 48.55,
      "restaurant-price-index": 27.71,
      "groceries-index": 49.61,
      "rent-index": 15.22
    },
    "type": "city",
    "city": "Phuket",
    "id": "thailand-phuket",
    "country": "Thailand",
    "location": {
      "latitude": "7.8765",
      "longitude": "98.3815"
    }
  },
  {
    "index": {
      "cost-of-living-index": 48.32,
      "restaurant-price-index": 49.96,
      "groceries-index": 38.38,
      "rent-index": 18.5
    },
    "type": "city",
    "city": "Santa Cruz de Tenerife",
    "id": "spain-santa-cruz-de-tenerife",
    "country": "Spain",
    "location": {
      "latitude": "28.4700",
      "longitude": "-16.2500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 48.09,
      "restaurant-price-index": 41.45,
      "groceries-index": 39.27,
      "rent-index": 20.72
    },
    "type": "city",
    "city": "Bratislava",
    "id": "slovakia-bratislava",
    "country": "Slovakia",
    "location": {
      "latitude": "48.1500",
      "longitude": "17.1170"
    }
  },
  {
    "index": {
      "cost-of-living-index": 47.9,
      "restaurant-price-index": 43.82,
      "groceries-index": 35.02,
      "rent-index": 17.68
    },
    "type": "city",
    "city": "Sao Paulo",
    "id": "brazil-sao-paulo",
    "country": "Brazil",
    "location": {
      "latitude": "-23.5587",
      "longitude": "-46.6250"
    }
  },
  {
    "index": {
      "cost-of-living-index": 47.37,
      "restaurant-price-index": 45.75,
      "groceries-index": 37.16,
      "rent-index": 17.94
    },
    "type": "city",
    "city": "Johannesburg",
    "id": "south-africa-johannesburg",
    "country": "South Africa",
    "location": {
      "latitude": "-26.1700",
      "longitude": "28.0300"
    }
  },
  {
    "index": {
      "cost-of-living-index": 47.26,
      "restaurant-price-index": 26.71,
      "groceries-index": 42.05,
      "rent-index": 19.68
    },
    "type": "city",
    "city": "Phnom Penh",
    "id": "cambodia-phnom-penh",
    "country": "Cambodia",
    "location": {
      "latitude": "11.5500",
      "longitude": "104.9166"
    }
  },
  {
    "index": {
      "cost-of-living-index": 47.26,
      "restaurant-price-index": 42.37,
      "groceries-index": 33.91,
      "rent-index": 15.66
    },
    "type": "city",
    "city": "Rio de Janeiro",
    "id": "brazil-rio-de-janeiro",
    "country": "Brazil",
    "location": {
      "latitude": "-22.9250",
      "longitude": "-43.2250"
    }
  },
  {
    "index": {
      "cost-of-living-index": 47.09,
      "restaurant-price-index": 42.54,
      "groceries-index": 33.86,
      "rent-index": 14.79
    },
    "type": "city",
    "city": "Brasilia",
    "id": "brazil-brasilia",
    "country": "Brazil",
    "location": {
      "latitude": "-15.7833",
      "longitude": "-47.9161"
    }
  },
  {
    "index": {
      "cost-of-living-index": 46.84,
      "restaurant-price-index": 40.64,
      "groceries-index": 34.08,
      "rent-index": 11.91
    },
    "type": "city",
    "city": "Campinas",
    "id": "brazil-campinas",
    "country": "Brazil",
    "location": {
      "latitude": "-22.9000",
      "longitude": "-47.1000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 46.81,
      "restaurant-price-index": 42.21,
      "groceries-index": 37.44,
      "rent-index": 12.2
    },
    "type": "city",
    "city": "Santo Domingo",
    "id": "dominican-republic-santo-domingo",
    "country": "Dominican Republic",
    "location": {
      "latitude": "18.4701",
      "longitude": "-69.9001"
    }
  },
  {
    "index": {
      "cost-of-living-index": 46.81,
      "restaurant-price-index": 21.65,
      "groceries-index": 50.77,
      "rent-index": 13.1
    },
    "type": "city",
    "city": "Chiang Mai",
    "id": "thailand-chiang-mai",
    "country": "Thailand",
    "location": {
      "latitude": "18.8000",
      "longitude": "98.9800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 46.68,
      "restaurant-price-index": 49.54,
      "groceries-index": 35.66,
      "rent-index": 16.19
    },
    "type": "city",
    "city": "Vilnius",
    "id": "lithuania-vilnius",
    "country": "Lithuania",
    "location": {
      "latitude": "54.6834",
      "longitude": "25.3166"
    }
  },
  {
    "index": {
      "cost-of-living-index": 46.57,
      "restaurant-price-index": 31.76,
      "groceries-index": 42.39,
      "rent-index": 15.18
    },
    "type": "city",
    "city": "Guayaquil",
    "id": "ecuador-guayaquil",
    "country": "Ecuador",
    "location": {
      "latitude": "-2.2200",
      "longitude": "-79.9200"
    }
  },
  {
    "index": {
      "cost-of-living-index": 46.3,
      "restaurant-price-index": 34.77,
      "groceries-index": 37.95,
      "rent-index": 8.38
    },
    "type": "city",
    "city": "Osijek",
    "id": "croatia-osijek",
    "country": "Croatia",
    "location": {
      "latitude": "45.5504",
      "longitude": "18.6800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 45.96,
      "restaurant-price-index": 47.9,
      "groceries-index": 34.11,
      "rent-index": 29.13
    },
    "type": "city",
    "city": "Moscow",
    "id": "russia-moscow",
    "country": "Russia",
    "location": {
      "latitude": "55.7522",
      "longitude": "37.6155"
    }
  },
  {
    "index": {
      "cost-of-living-index": 45.79,
      "restaurant-price-index": 37.02,
      "groceries-index": 43.42,
      "rent-index": 37.38
    },
    "type": "city",
    "city": "Beijing",
    "id": "china-beijing",
    "country": "China",
    "location": {
      "latitude": "39.9289",
      "longitude": "116.3883"
    }
  },
  {
    "index": {
      "cost-of-living-index": 45.75,
      "restaurant-price-index": 39.77,
      "groceries-index": 36.75,
      "rent-index": 11.49
    },
    "type": "city",
    "city": "Kaunas",
    "id": "lithuania-kaunas",
    "country": "Lithuania",
    "location": {
      "latitude": "54.9504",
      "longitude": "23.8800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 45.7,
      "restaurant-price-index": 35.13,
      "groceries-index": 38.03,
      "rent-index": 18.86
    },
    "type": "city",
    "city": "Brno",
    "id": "czech-republic-brno",
    "country": "Czech Republic"
  },
  {
    "index": {
      "cost-of-living-index": 45.52,
      "restaurant-price-index": 30.16,
      "groceries-index": 39.41,
      "rent-index": 13
    },
    "type": "city",
    "city": "Olomouc",
    "id": "czech-republic-olomouc",
    "country": "Czech Republic"
  },
  {
    "index": {
      "cost-of-living-index": 45,
      "restaurant-price-index": 44.82,
      "groceries-index": 36.43,
      "rent-index": 27.05
    },
    "type": "city",
    "city": "Cape Town",
    "id": "south-africa-cape-town",
    "country": "South Africa",
    "location": {
      "latitude": "-33.9200",
      "longitude": "18.4350"
    }
  },
  {
    "index": {
      "cost-of-living-index": 44.96,
      "restaurant-price-index": 40.95,
      "groceries-index": 34.8,
      "rent-index": 10.16
    },
    "type": "city",
    "city": "Klaipeda",
    "id": "lithuania-klaipeda",
    "country": "Lithuania",
    "location": {
      "latitude": "55.7204",
      "longitude": "21.1199"
    }
  },
  {
    "index": {
      "cost-of-living-index": 44.93,
      "restaurant-price-index": 34.56,
      "groceries-index": 36.54,
      "rent-index": 15.23
    },
    "type": "city",
    "city": "Kosice",
    "id": "slovakia-kosice",
    "country": "Slovakia",
    "location": {
      "latitude": "48.7304",
      "longitude": "21.2500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 44.73,
      "restaurant-price-index": 33.98,
      "groceries-index": 40.66,
      "rent-index": 12.28
    },
    "type": "city",
    "city": "Quito",
    "id": "ecuador-quito",
    "country": "Ecuador",
    "location": {
      "latitude": "-0.2150",
      "longitude": "-78.5001"
    }
  },
  {
    "index": {
      "cost-of-living-index": 44.56,
      "restaurant-price-index": 39.28,
      "groceries-index": 34.98,
      "rent-index": 13.53
    },
    "type": "city",
    "city": "Baghdad",
    "id": "iraq-baghdad",
    "country": "Iraq",
    "location": {
      "latitude": "33.3386",
      "longitude": "44.3939"
    }
  },
  {
    "index": {
      "cost-of-living-index": 44.47,
      "restaurant-price-index": 38.38,
      "groceries-index": 34.43,
      "rent-index": 17.32
    },
    "type": "city",
    "city": "Budapest",
    "id": "hungary-budapest",
    "country": "Hungary",
    "location": {
      "latitude": "47.5000",
      "longitude": "19.0833"
    }
  },
  {
    "index": {
      "cost-of-living-index": 44.26,
      "restaurant-price-index": 34.94,
      "groceries-index": 39.02,
      "rent-index": 15.2
    },
    "type": "city",
    "city": "Guatemala City",
    "id": "guatemala-guatemala-city",
    "country": "Guatemala"
  },
  {
    "index": {
      "cost-of-living-index": 43.31,
      "restaurant-price-index": 34.39,
      "groceries-index": 33.47,
      "rent-index": 8.54
    },
    "type": "city",
    "city": "Recife",
    "id": "brazil-recife",
    "country": "Brazil",
    "location": {
      "latitude": "-8.0756",
      "longitude": "-34.9156"
    }
  },
  {
    "index": {
      "cost-of-living-index": 43.07,
      "restaurant-price-index": 31.21,
      "groceries-index": 35.63,
      "rent-index": 8.92
    },
    "type": "city",
    "city": "Natal",
    "id": "brazil-natal",
    "country": "Brazil",
    "location": {
      "latitude": "-5.7800",
      "longitude": "-35.2400"
    }
  },
  {
    "index": {
      "cost-of-living-index": 43.03,
      "restaurant-price-index": 39.93,
      "groceries-index": 32.89,
      "rent-index": 21.07
    },
    "type": "city",
    "city": "Warsaw",
    "id": "poland-warsaw",
    "country": "Poland",
    "location": {
      "latitude": "52.2500",
      "longitude": "21.0000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 43,
      "restaurant-price-index": 28.44,
      "groceries-index": 42.21,
      "rent-index": 16.13
    },
    "type": "city",
    "city": "Kuala Lumpur",
    "id": "malaysia-kuala-lumpur",
    "country": "Malaysia",
    "location": {
      "latitude": "3.1667",
      "longitude": "101.7000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 42.88,
      "restaurant-price-index": 35.18,
      "groceries-index": 38.54,
      "rent-index": 13.56
    },
    "type": "city",
    "city": "Nairobi",
    "id": "kenya-nairobi",
    "country": "Kenya",
    "location": {
      "latitude": "-1.2833",
      "longitude": "36.8167"
    }
  },
  {
    "index": {
      "cost-of-living-index": 42.76,
      "restaurant-price-index": 33.3,
      "groceries-index": 30.34,
      "rent-index": 10.42
    },
    "type": "city",
    "city": "Porto Alegre",
    "id": "brazil-porto-alegre",
    "country": "Brazil",
    "location": {
      "latitude": "-30.0500",
      "longitude": "-51.2000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 42.69,
      "restaurant-price-index": 31.47,
      "groceries-index": 42.78,
      "rent-index": 24.32
    },
    "type": "city",
    "city": "Shenzhen",
    "id": "china-shenzhen",
    "country": "China",
    "location": {
      "latitude": "22.5524",
      "longitude": "114.1221"
    }
  },
  {
    "index": {
      "cost-of-living-index": 42.68,
      "restaurant-price-index": 27.09,
      "groceries-index": 39.79,
      "rent-index": 18.53
    },
    "type": "city",
    "city": "Tehran",
    "id": "iran-tehran",
    "country": "Iran",
    "location": {
      "latitude": "35.6719",
      "longitude": "51.4243"
    }
  },
  {
    "index": {
      "cost-of-living-index": 42.6,
      "restaurant-price-index": 30.07,
      "groceries-index": 37.36,
      "rent-index": 10.76
    },
    "type": "city",
    "city": "Ostrava",
    "id": "czech-republic-ostrava",
    "country": "Czech Republic"
  },
  {
    "index": {
      "cost-of-living-index": 42.48,
      "restaurant-price-index": 33.39,
      "groceries-index": 28.46,
      "rent-index": 10.06
    },
    "type": "city",
    "city": "Belo Horizonte",
    "id": "brazil-belo-horizonte",
    "country": "Brazil",
    "location": {
      "latitude": "-19.9150",
      "longitude": "-43.9150"
    }
  },
  {
    "index": {
      "cost-of-living-index": 42.39,
      "restaurant-price-index": 31.48,
      "groceries-index": 36.62,
      "rent-index": 14.44
    },
    "type": "city",
    "city": "Lima",
    "id": "peru-lima",
    "country": "Peru",
    "location": {
      "latitude": "-12.0480",
      "longitude": "-77.0501"
    }
  },
  {
    "index": {
      "cost-of-living-index": 42.15,
      "restaurant-price-index": 37.46,
      "groceries-index": 33.88,
      "rent-index": 10.49
    },
    "type": "city",
    "city": "Port Elizabeth",
    "id": "south-africa-port-elizabeth",
    "country": "South Africa",
    "location": {
      "latitude": "-33.9700",
      "longitude": "25.6000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 41.97,
      "restaurant-price-index": 23.36,
      "groceries-index": 42.24,
      "rent-index": 17.01
    },
    "type": "city",
    "city": "Jakarta",
    "id": "indonesia-jakarta",
    "country": "Indonesia",
    "location": {
      "latitude": "-6.1744",
      "longitude": "106.8294"
    }
  },
  {
    "index": {
      "cost-of-living-index": 41.88,
      "restaurant-price-index": 26.91,
      "groceries-index": 42.93,
      "rent-index": 18.14
    },
    "type": "city",
    "city": "Guangzhou",
    "id": "china-guangzhou",
    "country": "China",
    "location": {
      "latitude": "23.1450",
      "longitude": "113.3250"
    }
  },
  {
    "index": {
      "cost-of-living-index": 41.82,
      "restaurant-price-index": 32.7,
      "groceries-index": 35.09,
      "rent-index": 11.7
    },
    "type": "city",
    "city": "Irbil",
    "id": "iraq-irbil",
    "country": "Iraq",
    "location": {
      "latitude": "36.1790",
      "longitude": "44.0086"
    }
  },
  {
    "index": {
      "cost-of-living-index": 41.56,
      "restaurant-price-index": 23.17,
      "groceries-index": 44.11,
      "rent-index": 9.2
    },
    "type": "city",
    "city": "Penang",
    "id": "malaysia-penang",
    "country": "Malaysia"
  },
  {
    "index": {
      "cost-of-living-index": 41.54,
      "restaurant-price-index": 38.18,
      "groceries-index": 32.21,
      "rent-index": 18.53
    },
    "type": "city",
    "city": "Wroclaw",
    "id": "poland-wroclaw",
    "country": "Poland",
    "location": {
      "latitude": "51.1104",
      "longitude": "17.0300"
    }
  },
  {
    "index": {
      "cost-of-living-index": 41.43,
      "restaurant-price-index": 34.1,
      "groceries-index": 28.1,
      "rent-index": 9.66
    },
    "type": "city",
    "city": "Curitiba",
    "id": "brazil-curitiba",
    "country": "Brazil",
    "location": {
      "latitude": "-25.4200",
      "longitude": "-49.3200"
    }
  },
  {
    "index": {
      "cost-of-living-index": 41.11,
      "restaurant-price-index": 27.35,
      "groceries-index": 45.18,
      "rent-index": 11
    },
    "type": "city",
    "city": "Chengdu",
    "id": "china-chengdu",
    "country": "China",
    "location": {
      "latitude": "30.6700",
      "longitude": "104.0700"
    }
  },
  {
    "index": {
      "cost-of-living-index": 41.01,
      "restaurant-price-index": 34.46,
      "groceries-index": 31.44,
      "rent-index": 16.55
    },
    "type": "city",
    "city": "Gdansk",
    "id": "poland-gdansk",
    "country": "Poland",
    "location": {
      "latitude": "54.3600",
      "longitude": "18.6400"
    }
  },
  {
    "index": {
      "cost-of-living-index": 40.95,
      "restaurant-price-index": 35.53,
      "groceries-index": 31.52,
      "rent-index": 17.7
    },
    "type": "city",
    "city": "Krakow (Cracow)",
    "id": "poland-krakow-cracow",
    "country": "Poland"
  },
  {
    "index": {
      "cost-of-living-index": 40.93,
      "restaurant-price-index": 35.05,
      "groceries-index": 33.25,
      "rent-index": 13.11
    },
    "type": "city",
    "city": "Sofia",
    "id": "bulgaria-sofia",
    "country": "Bulgaria",
    "location": {
      "latitude": "42.6833",
      "longitude": "23.3167"
    }
  },
  {
    "index": {
      "cost-of-living-index": 40.8,
      "restaurant-price-index": 40.35,
      "groceries-index": 32.18,
      "rent-index": 17.77
    },
    "type": "city",
    "city": "Saint Petersburg",
    "id": "russia-saint-petersburg",
    "country": "Russia"
  },
  {
    "index": {
      "cost-of-living-index": 40.74,
      "restaurant-price-index": 37.26,
      "groceries-index": 29.12,
      "rent-index": 11.88
    },
    "type": "city",
    "city": "Florianopolis",
    "id": "brazil-florianopolis",
    "country": "Brazil",
    "location": {
      "latitude": "-27.5800",
      "longitude": "-48.5200"
    }
  },
  {
    "index": {
      "cost-of-living-index": 40.61,
      "restaurant-price-index": 38.78,
      "groceries-index": 31.91,
      "rent-index": 14.78
    },
    "type": "city",
    "city": "Durban",
    "id": "south-africa-durban",
    "country": "South Africa",
    "location": {
      "latitude": "-29.8650",
      "longitude": "30.9800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 40.17,
      "restaurant-price-index": 25.31,
      "groceries-index": 33.42,
      "rent-index": 19.38
    },
    "type": "city",
    "city": "Manila",
    "id": "philippines-manila",
    "country": "Philippines",
    "location": {
      "latitude": "14.6042",
      "longitude": "120.9822"
    }
  },
  {
    "index": {
      "cost-of-living-index": 40.16,
      "restaurant-price-index": 38.69,
      "groceries-index": 30.34,
      "rent-index": 11.3
    },
    "type": "city",
    "city": "Debrecen",
    "id": "hungary-debrecen",
    "country": "Hungary",
    "location": {
      "latitude": "47.5305",
      "longitude": "21.6300"
    }
  },
  {
    "index": {
      "cost-of-living-index": 39.98,
      "restaurant-price-index": 34.91,
      "groceries-index": 28.51,
      "rent-index": 11.88
    },
    "type": "city",
    "city": "Belgrade",
    "id": "serbia-belgrade",
    "country": "Serbia",
    "location": {
      "latitude": "44.8186",
      "longitude": "20.4680"
    }
  },
  {
    "index": {
      "cost-of-living-index": 39.9,
      "restaurant-price-index": 32.77,
      "groceries-index": 31.33,
      "rent-index": 10.47
    },
    "type": "city",
    "city": "Podgorica",
    "id": "montenegro-podgorica",
    "country": "Montenegro",
    "location": {
      "latitude": "42.4660",
      "longitude": "19.2663"
    }
  },
  {
    "index": {
      "cost-of-living-index": 39.55,
      "restaurant-price-index": 28.06,
      "groceries-index": 30.93,
      "rent-index": 9.71
    },
    "type": "city",
    "city": "Sarajevo",
    "id": "bosnia-and-herzegovina-sarajevo",
    "country": "Bosnia And Herzegovina",
    "location": {
      "latitude": "43.8500",
      "longitude": "18.3830"
    }
  },
  {
    "index": {
      "cost-of-living-index": 39.53,
      "restaurant-price-index": 33.08,
      "groceries-index": 30.17,
      "rent-index": 14.4
    },
    "type": "city",
    "city": "Poznan",
    "id": "poland-poznan",
    "country": "Poland",
    "location": {
      "latitude": "52.4058",
      "longitude": "16.8999"
    }
  },
  {
    "index": {
      "cost-of-living-index": 39.32,
      "restaurant-price-index": 36.55,
      "groceries-index": 31.85,
      "rent-index": 11.06
    },
    "type": "city",
    "city": "Buenos Aires",
    "id": "argentina-buenos-aires",
    "country": "Argentina",
    "location": {
      "latitude": "-34.6025",
      "longitude": "-58.3975"
    }
  },
  {
    "index": {
      "cost-of-living-index": 39.27,
      "restaurant-price-index": 40.17,
      "groceries-index": 30.84,
      "rent-index": 7.84
    },
    "type": "city",
    "city": "Constanta",
    "id": "romania-constanta",
    "country": "Romania",
    "location": {
      "latitude": "44.2027",
      "longitude": "28.6100"
    }
  },
  {
    "index": {
      "cost-of-living-index": 39.21,
      "restaurant-price-index": 38.27,
      "groceries-index": 31.25,
      "rent-index": 13.14
    },
    "type": "city",
    "city": "Bucharest",
    "id": "romania-bucharest",
    "country": "Romania",
    "location": {
      "latitude": "44.4334",
      "longitude": "26.0999"
    }
  },
  {
    "index": {
      "cost-of-living-index": 38.97,
      "restaurant-price-index": 31.66,
      "groceries-index": 29.48,
      "rent-index": 12.23
    },
    "type": "city",
    "city": "Lodz",
    "id": "poland-lodz",
    "country": "Poland",
    "location": {
      "latitude": "51.7750",
      "longitude": "19.4514"
    }
  },
  {
    "index": {
      "cost-of-living-index": 38.8,
      "restaurant-price-index": 20.09,
      "groceries-index": 37.17,
      "rent-index": 11.59
    },
    "type": "city",
    "city": "Hanoi",
    "id": "vietnam-hanoi",
    "country": "Vietnam",
    "location": {
      "latitude": "21.0333",
      "longitude": "105.8500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 38.71,
      "restaurant-price-index": 38.3,
      "groceries-index": 31.06,
      "rent-index": 11.64
    },
    "type": "city",
    "city": "Nizhny Novgorod",
    "id": "russia-nizhny-novgorod",
    "country": "Russia",
    "location": {
      "latitude": "56.3330",
      "longitude": "44.0001"
    }
  },
  {
    "index": {
      "cost-of-living-index": 38.55,
      "restaurant-price-index": 26.7,
      "groceries-index": 33.24,
      "rent-index": 13.37
    },
    "type": "city",
    "city": "Rabat",
    "id": "morocco-rabat",
    "country": "Morocco",
    "location": {
      "latitude": "34.0253",
      "longitude": "-6.8361"
    }
  },
  {
    "index": {
      "cost-of-living-index": 38.4,
      "restaurant-price-index": 32.59,
      "groceries-index": 30.36,
      "rent-index": 10
    },
    "type": "city",
    "city": "Szeged",
    "id": "hungary-szeged",
    "country": "Hungary",
    "location": {
      "latitude": "46.2504",
      "longitude": "20.1500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 38.24,
      "restaurant-price-index": 29.83,
      "groceries-index": 29.95,
      "rent-index": 10.16
    },
    "type": "city",
    "city": "Tirana",
    "id": "albania-tirana",
    "country": "Albania",
    "location": {
      "latitude": "41.3275",
      "longitude": "19.8189"
    }
  },
  {
    "index": {
      "cost-of-living-index": 38.17,
      "restaurant-price-index": 32.41,
      "groceries-index": 32.57,
      "rent-index": 8.8
    },
    "type": "city",
    "city": "Varna",
    "id": "bulgaria-varna",
    "country": "Bulgaria",
    "location": {
      "latitude": "43.2156",
      "longitude": "27.8953"
    }
  },
  {
    "index": {
      "cost-of-living-index": 38.1,
      "restaurant-price-index": 28.87,
      "groceries-index": 32.23,
      "rent-index": 10.29
    },
    "type": "city",
    "city": "Istanbul",
    "id": "turkey-istanbul",
    "country": "Turkey",
    "location": {
      "latitude": "41.1050",
      "longitude": "29.0100"
    }
  },
  {
    "index": {
      "cost-of-living-index": 38.07,
      "restaurant-price-index": 31.94,
      "groceries-index": 28.03,
      "rent-index": 12.12
    },
    "type": "city",
    "city": "Katowice",
    "id": "poland-katowice",
    "country": "Poland",
    "location": {
      "latitude": "50.2604",
      "longitude": "19.0200"
    }
  },
  {
    "index": {
      "cost-of-living-index": 37.94,
      "restaurant-price-index": 19.89,
      "groceries-index": 36.53,
      "rent-index": 15.73
    },
    "type": "city",
    "city": "Ho Chi Minh City",
    "id": "vietnam-ho-chi-minh-city",
    "country": "Vietnam",
    "location": {
      "latitude": "10.7800",
      "longitude": "106.6950"
    }
  },
  {
    "index": {
      "cost-of-living-index": 37.89,
      "restaurant-price-index": 35.8,
      "groceries-index": 34.85,
      "rent-index": 12.39
    },
    "type": "city",
    "city": "Monterrey",
    "id": "mexico-monterrey",
    "country": "Mexico",
    "location": {
      "latitude": "25.6700",
      "longitude": "-100.3300"
    }
  },
  {
    "index": {
      "cost-of-living-index": 37.87,
      "restaurant-price-index": 36.74,
      "groceries-index": 29.14,
      "rent-index": 11.24
    },
    "type": "city",
    "city": "Yekaterinburg",
    "id": "russia-yekaterinburg",
    "country": "Russia",
    "location": {
      "latitude": "56.8500",
      "longitude": "60.6000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 37.65,
      "restaurant-price-index": 21.52,
      "groceries-index": 35.54,
      "rent-index": 11.74
    },
    "type": "city",
    "city": "Cebu",
    "id": "philippines-cebu",
    "country": "Philippines",
    "location": {
      "latitude": "10.3200",
      "longitude": "123.9001"
    }
  },
  {
    "index": {
      "cost-of-living-index": 37.38,
      "restaurant-price-index": 33.14,
      "groceries-index": 32.97,
      "rent-index": 13.43
    },
    "type": "city",
    "city": "Cancun",
    "id": "mexico-cancun",
    "country": "Mexico",
    "location": {
      "latitude": "21.1700",
      "longitude": "-86.8300"
    }
  },
  {
    "index": {
      "cost-of-living-index": 37.26,
      "restaurant-price-index": 36.03,
      "groceries-index": 33.7,
      "rent-index": 9.26
    },
    "type": "city",
    "city": "Krasnoyarsk",
    "id": "russia-krasnoyarsk",
    "country": "Russia",
    "location": {
      "latitude": "56.0140",
      "longitude": "92.8660"
    }
  },
  {
    "index": {
      "cost-of-living-index": 37.19,
      "restaurant-price-index": 31.1,
      "groceries-index": 30.98,
      "rent-index": 11.52
    },
    "type": "city",
    "city": "La Paz",
    "id": "bolivia-la-paz",
    "country": "Bolivia",
    "location": {
      "latitude": "-16.4980",
      "longitude": "-68.1500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 37.17,
      "restaurant-price-index": 32.27,
      "groceries-index": 30.9,
      "rent-index": 13.58
    },
    "type": "city",
    "city": "Cluj-Napoca",
    "id": "romania-cluj-napoca",
    "country": "Romania",
    "location": {
      "latitude": "46.7884",
      "longitude": "23.5984"
    }
  },
  {
    "index": {
      "cost-of-living-index": 37.15,
      "restaurant-price-index": 28.36,
      "groceries-index": 30.84,
      "rent-index": 13.05
    },
    "type": "city",
    "city": "Casablanca",
    "id": "morocco-casablanca",
    "country": "Morocco",
    "location": {
      "latitude": "33.6000",
      "longitude": "-7.6164"
    }
  },
  {
    "index": {
      "cost-of-living-index": 37.15,
      "restaurant-price-index": 32.12,
      "groceries-index": 33.23,
      "rent-index": 18.36
    },
    "type": "city",
    "city": "Mexico City",
    "id": "mexico-mexico-city",
    "country": "Mexico",
    "location": {
      "latitude": "19.4424",
      "longitude": "-99.1310"
    }
  },
  {
    "index": {
      "cost-of-living-index": 37,
      "restaurant-price-index": 39.32,
      "groceries-index": 30.19,
      "rent-index": 10.77
    },
    "type": "city",
    "city": "Kazan",
    "id": "russia-kazan",
    "country": "Russia",
    "location": {
      "latitude": "55.7499",
      "longitude": "49.1263"
    }
  },
  {
    "index": {
      "cost-of-living-index": 36.89,
      "restaurant-price-index": 38.9,
      "groceries-index": 29.34,
      "rent-index": 10.64
    },
    "type": "city",
    "city": "Samara",
    "id": "russia-samara",
    "country": "Russia",
    "location": {
      "latitude": "53.1950",
      "longitude": "50.1513"
    }
  },
  {
    "index": {
      "cost-of-living-index": 36.89,
      "restaurant-price-index": 31.72,
      "groceries-index": 30.3,
      "rent-index": 10.3
    },
    "type": "city",
    "city": "Brasov",
    "id": "romania-brasov",
    "country": "Romania",
    "location": {
      "latitude": "45.6475",
      "longitude": "25.6072"
    }
  },
  {
    "index": {
      "cost-of-living-index": 36.83,
      "restaurant-price-index": 24.99,
      "groceries-index": 33.55,
      "rent-index": 5.82
    },
    "type": "city",
    "city": "Bursa",
    "id": "turkey-bursa",
    "country": "Turkey",
    "location": {
      "latitude": "40.2000",
      "longitude": "29.0700"
    }
  },
  {
    "index": {
      "cost-of-living-index": 36.73,
      "restaurant-price-index": 24.55,
      "groceries-index": 29.06,
      "rent-index": 7.41
    },
    "type": "city",
    "city": "Banja Luka",
    "id": "bosnia-and-herzegovina-banja-luka",
    "country": "Bosnia And Herzegovina",
    "location": {
      "latitude": "44.7804",
      "longitude": "17.1800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 36.67,
      "restaurant-price-index": 29.61,
      "groceries-index": 30.46,
      "rent-index": 8
    },
    "type": "city",
    "city": "Plovdiv",
    "id": "bulgaria-plovdiv",
    "country": "Bulgaria",
    "location": {
      "latitude": "42.1540",
      "longitude": "24.7540"
    }
  },
  {
    "index": {
      "cost-of-living-index": 36.65,
      "restaurant-price-index": 29.1,
      "groceries-index": 28.53,
      "rent-index": 13.93
    },
    "type": "city",
    "city": "Lublin",
    "id": "poland-lublin",
    "country": "Poland",
    "location": {
      "latitude": "51.2504",
      "longitude": "22.5727"
    }
  },
  {
    "index": {
      "cost-of-living-index": 36.6,
      "restaurant-price-index": 36.17,
      "groceries-index": 29.37,
      "rent-index": 9.93
    },
    "type": "city",
    "city": "Rostov-na-donu",
    "id": "russia-rostov-na-donu",
    "country": "Russia"
  },
  {
    "index": {
      "cost-of-living-index": 36.38,
      "restaurant-price-index": 30.97,
      "groceries-index": 31.5,
      "rent-index": 11.59
    },
    "type": "city",
    "city": "Novosibirsk",
    "id": "russia-novosibirsk",
    "country": "Russia",
    "location": {
      "latitude": "55.0300",
      "longitude": "82.9600"
    }
  },
  {
    "index": {
      "cost-of-living-index": 36.31,
      "restaurant-price-index": 31.9,
      "groceries-index": 30.21,
      "rent-index": 10.81
    },
    "type": "city",
    "city": "Timisoara",
    "id": "romania-timisoara",
    "country": "Romania",
    "location": {
      "latitude": "45.7588",
      "longitude": "21.2234"
    }
  },
  {
    "index": {
      "cost-of-living-index": 36.25,
      "restaurant-price-index": 31.62,
      "groceries-index": 29.05,
      "rent-index": 9.56
    },
    "type": "city",
    "city": "Iasi",
    "id": "romania-iasi",
    "country": "Romania",
    "location": {
      "latitude": "47.1683",
      "longitude": "27.5749"
    }
  },
  {
    "index": {
      "cost-of-living-index": 36.2,
      "restaurant-price-index": 33.08,
      "groceries-index": 30.63,
      "rent-index": 8
    },
    "type": "city",
    "city": "Kaliningrad",
    "id": "russia-kaliningrad",
    "country": "Russia",
    "location": {
      "latitude": "54.7000",
      "longitude": "20.4973"
    }
  },
  {
    "index": {
      "cost-of-living-index": 36.01,
      "restaurant-price-index": 29.32,
      "groceries-index": 34.27,
      "rent-index": 10.11
    },
    "type": "city",
    "city": "Queretaro",
    "id": "mexico-queretaro",
    "country": "Mexico",
    "location": {
      "latitude": "20.6300",
      "longitude": "-100.3800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 35.95,
      "restaurant-price-index": 31.93,
      "groceries-index": 31.04,
      "rent-index": 8.14
    },
    "type": "city",
    "city": "Voronezh",
    "id": "russia-voronezh",
    "country": "Russia",
    "location": {
      "latitude": "51.7300",
      "longitude": "39.2700"
    }
  },
  {
    "index": {
      "cost-of-living-index": 35.87,
      "restaurant-price-index": 31.88,
      "groceries-index": 30.11,
      "rent-index": 9.1
    },
    "type": "city",
    "city": "Sibiu",
    "id": "romania-sibiu",
    "country": "Romania",
    "location": {
      "latitude": "45.7971",
      "longitude": "24.1371"
    }
  },
  {
    "index": {
      "cost-of-living-index": 35.82,
      "restaurant-price-index": 25.27,
      "groceries-index": 32.17,
      "rent-index": 7.23
    },
    "type": "city",
    "city": "Arad",
    "id": "romania-arad",
    "country": "Romania",
    "location": {
      "latitude": "46.1700",
      "longitude": "21.3200"
    }
  },
  {
    "index": {
      "cost-of-living-index": 35.74,
      "restaurant-price-index": 34.54,
      "groceries-index": 29.58,
      "rent-index": 9.61
    },
    "type": "city",
    "city": "Perm",
    "id": "russia-perm",
    "country": "Russia",
    "location": {
      "latitude": "58.0000",
      "longitude": "56.2500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 35.69,
      "restaurant-price-index": 25.49,
      "groceries-index": 31.5,
      "rent-index": 6.09
    },
    "type": "city",
    "city": "Ankara",
    "id": "turkey-ankara",
    "country": "Turkey",
    "location": {
      "latitude": "39.9272",
      "longitude": "32.8644"
    }
  },
  {
    "index": {
      "cost-of-living-index": 35.45,
      "restaurant-price-index": 33.17,
      "groceries-index": 29.29,
      "rent-index": 10.34
    },
    "type": "city",
    "city": "Krasnodar",
    "id": "russia-krasnodar",
    "country": "Russia",
    "location": {
      "latitude": "45.0200",
      "longitude": "39.0000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 35.45,
      "restaurant-price-index": 26.76,
      "groceries-index": 34.61,
      "rent-index": 25.62
    },
    "type": "city",
    "city": "Lagos",
    "id": "nigeria-lagos",
    "country": "Nigeria",
    "location": {
      "latitude": "6.4433",
      "longitude": "3.3915"
    }
  },
  {
    "index": {
      "cost-of-living-index": 35.44,
      "restaurant-price-index": 29.89,
      "groceries-index": 26.99,
      "rent-index": 7.95
    },
    "type": "city",
    "city": "Skopje",
    "id": "macedonia-skopje",
    "country": "Macedonia",
    "location": {
      "latitude": "42.0000",
      "longitude": "21.4335"
    }
  },
  {
    "index": {
      "cost-of-living-index": 35.27,
      "restaurant-price-index": 28.81,
      "groceries-index": 29.92,
      "rent-index": 8.02
    },
    "type": "city",
    "city": "Chelyabinsk",
    "id": "russia-chelyabinsk",
    "country": "Russia",
    "location": {
      "latitude": "55.1550",
      "longitude": "61.4387"
    }
  },
  {
    "index": {
      "cost-of-living-index": 35.05,
      "restaurant-price-index": 27.06,
      "groceries-index": 26.5,
      "rent-index": 7.86
    },
    "type": "city",
    "city": "Novi Sad",
    "id": "serbia-novi-sad",
    "country": "Serbia",
    "location": {
      "latitude": "45.2504",
      "longitude": "19.8499"
    }
  },
  {
    "index": {
      "cost-of-living-index": 34.9,
      "restaurant-price-index": 21.38,
      "groceries-index": 38.95,
      "rent-index": 8.3
    },
    "type": "city",
    "city": "Colombo",
    "id": "sri-lanka-colombo",
    "country": "Sri Lanka",
    "location": {
      "latitude": "6.9320",
      "longitude": "79.8578"
    }
  },
  {
    "index": {
      "cost-of-living-index": 34.7,
      "restaurant-price-index": 31.29,
      "groceries-index": 32.19,
      "rent-index": 10.33
    },
    "type": "city",
    "city": "Guadalajara",
    "id": "mexico-guadalajara",
    "country": "Mexico",
    "location": {
      "latitude": "20.6700",
      "longitude": "-103.3300"
    }
  },
  {
    "index": {
      "cost-of-living-index": 34.65,
      "restaurant-price-index": 31.25,
      "groceries-index": 29.06,
      "rent-index": 8.23
    },
    "type": "city",
    "city": "Tomsk",
    "id": "russia-tomsk",
    "country": "Russia",
    "location": {
      "latitude": "56.4950",
      "longitude": "84.9750"
    }
  },
  {
    "index": {
      "cost-of-living-index": 34.65,
      "restaurant-price-index": 23.56,
      "groceries-index": 32.2,
      "rent-index": 9.68
    },
    "type": "city",
    "city": "Ulaanbaatar",
    "id": "mongolia-ulaanbaatar",
    "country": "Mongolia",
    "location": {
      "latitude": "47.9167",
      "longitude": "106.9166"
    }
  },
  {
    "index": {
      "cost-of-living-index": 34.61,
      "restaurant-price-index": 20.19,
      "groceries-index": 31.92,
      "rent-index": 5.67
    },
    "type": "city",
    "city": "Dhaka",
    "id": "bangladesh-dhaka",
    "country": "Bangladesh",
    "location": {
      "latitude": "23.7231",
      "longitude": "90.4086"
    }
  },
  {
    "index": {
      "cost-of-living-index": 34.27,
      "restaurant-price-index": 27.66,
      "groceries-index": 28.31,
      "rent-index": 7.61
    },
    "type": "city",
    "city": "Oradea",
    "id": "romania-oradea",
    "country": "Romania",
    "location": {
      "latitude": "47.0500",
      "longitude": "21.9200"
    }
  },
  {
    "index": {
      "cost-of-living-index": 34.24,
      "restaurant-price-index": 22.73,
      "groceries-index": 29.85,
      "rent-index": 6.96
    },
    "type": "city",
    "city": "Izmir",
    "id": "turkey-izmir",
    "country": "Turkey",
    "location": {
      "latitude": "38.4361",
      "longitude": "27.1518"
    }
  },
  {
    "index": {
      "cost-of-living-index": 34.03,
      "restaurant-price-index": 30.02,
      "groceries-index": 29.01,
      "rent-index": 6.9
    },
    "type": "city",
    "city": "Izhevsk",
    "id": "russia-izhevsk",
    "country": "Russia",
    "location": {
      "latitude": "56.8500",
      "longitude": "53.2300"
    }
  },
  {
    "index": {
      "cost-of-living-index": 34.01,
      "restaurant-price-index": 21.9,
      "groceries-index": 31.17,
      "rent-index": 5.56
    },
    "type": "city",
    "city": "Antalya",
    "id": "turkey-antalya",
    "country": "Turkey",
    "location": {
      "latitude": "36.8900",
      "longitude": "30.7000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 33.97,
      "restaurant-price-index": 36.55,
      "groceries-index": 28.19,
      "rent-index": 11.04
    },
    "type": "city",
    "city": "Minsk",
    "id": "belarus-minsk",
    "country": "Belarus",
    "location": {
      "latitude": "53.9000",
      "longitude": "27.5666"
    }
  },
  {
    "index": {
      "cost-of-living-index": 33.96,
      "restaurant-price-index": 28.86,
      "groceries-index": 27.03,
      "rent-index": 10.04
    },
    "type": "city",
    "city": "Asuncion",
    "id": "paraguay-asuncion",
    "country": "Paraguay",
    "location": {
      "latitude": "-25.2964",
      "longitude": "-57.6415"
    }
  },
  {
    "index": {
      "cost-of-living-index": 33.88,
      "restaurant-price-index": 28.54,
      "groceries-index": 25.9,
      "rent-index": 16.73
    },
    "type": "city",
    "city": "Kiev",
    "id": "ukraine-kiev",
    "country": "Ukraine",
    "location": {
      "latitude": "50.4334",
      "longitude": "30.5166"
    }
  },
  {
    "index": {
      "cost-of-living-index": 33.75,
      "restaurant-price-index": 28.31,
      "groceries-index": 25.57,
      "rent-index": 5.54
    },
    "type": "city",
    "city": "Nis",
    "id": "serbia-nis",
    "country": "Serbia",
    "location": {
      "latitude": "43.3304",
      "longitude": "21.9000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 33.1,
      "restaurant-price-index": 32.15,
      "groceries-index": 25.42,
      "rent-index": 10.58
    },
    "type": "city",
    "city": "Yerevan",
    "id": "armenia-yerevan",
    "country": "Armenia",
    "location": {
      "latitude": "40.1812",
      "longitude": "44.5136"
    }
  },
  {
    "index": {
      "cost-of-living-index": 33.07,
      "restaurant-price-index": 27.55,
      "groceries-index": 26.12,
      "rent-index": 8.19
    },
    "type": "city",
    "city": "Chisinau",
    "id": "moldova-chisinau",
    "country": "Moldova",
    "location": {
      "latitude": "47.0050",
      "longitude": "28.8577"
    }
  },
  {
    "index": {
      "cost-of-living-index": 32.85,
      "restaurant-price-index": 22.96,
      "groceries-index": 28.7,
      "rent-index": 5.52
    },
    "type": "city",
    "city": "Kathmandu",
    "id": "nepal-kathmandu",
    "country": "Nepal",
    "location": {
      "latitude": "27.7167",
      "longitude": "85.3166"
    }
  },
  {
    "index": {
      "cost-of-living-index": 32.74,
      "restaurant-price-index": 26.64,
      "groceries-index": 27.63,
      "rent-index": 7.47
    },
    "type": "city",
    "city": "Craiova",
    "id": "romania-craiova",
    "country": "Romania",
    "location": {
      "latitude": "44.3263",
      "longitude": "23.8259"
    }
  },
  {
    "index": {
      "cost-of-living-index": 32.74,
      "restaurant-price-index": 20.82,
      "groceries-index": 32.94,
      "rent-index": 7.99
    },
    "type": "city",
    "city": "Algiers",
    "id": "algeria-algiers",
    "country": "Algeria",
    "location": {
      "latitude": "36.7631",
      "longitude": "3.0506"
    }
  },
  {
    "index": {
      "cost-of-living-index": 32.61,
      "restaurant-price-index": 26.8,
      "groceries-index": 25.5,
      "rent-index": 10.6
    },
    "type": "city",
    "city": "Odessa",
    "id": "ukraine-odessa",
    "country": "Ukraine",
    "location": {
      "latitude": "46.4900",
      "longitude": "30.7100"
    }
  },
  {
    "index": {
      "cost-of-living-index": 32.53,
      "restaurant-price-index": 25.57,
      "groceries-index": 25.34,
      "rent-index": 11.92
    },
    "type": "city",
    "city": "Bogota",
    "id": "colombia-bogota",
    "country": "Colombia",
    "location": {
      "latitude": "4.5964",
      "longitude": "-74.0833"
    }
  },
  {
    "index": {
      "cost-of-living-index": 31.84,
      "restaurant-price-index": 33.59,
      "groceries-index": 24.6,
      "rent-index": 10.45
    },
    "type": "city",
    "city": "Astana",
    "id": "kazakhstan-astana",
    "country": "Kazakhstan",
    "location": {
      "latitude": "51.1811",
      "longitude": "71.4278"
    }
  },
  {
    "index": {
      "cost-of-living-index": 31.19,
      "restaurant-price-index": 24.53,
      "groceries-index": 29.1,
      "rent-index": 9.86
    },
    "type": "city",
    "city": "Gurgaon",
    "id": "india-gurgaon",
    "country": "India",
    "location": {
      "latitude": "28.4500",
      "longitude": "77.0200"
    }
  },
  {
    "index": {
      "cost-of-living-index": 30.87,
      "restaurant-price-index": 26.91,
      "groceries-index": 26.31,
      "rent-index": 6.11
    },
    "type": "city",
    "city": "Cairo",
    "id": "egypt-cairo",
    "country": "Egypt",
    "location": {
      "latitude": "30.0500",
      "longitude": "31.2500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 30.84,
      "restaurant-price-index": 29.88,
      "groceries-index": 24.28,
      "rent-index": 10.23
    },
    "type": "city",
    "city": "Almaty",
    "id": "kazakhstan-almaty",
    "country": "Kazakhstan",
    "location": {
      "latitude": "43.3250",
      "longitude": "76.9150"
    }
  },
  {
    "index": {
      "cost-of-living-index": 30.59,
      "restaurant-price-index": 23.37,
      "groceries-index": 22.57,
      "rent-index": 10.29
    },
    "type": "city",
    "city": "Kharkiv",
    "id": "ukraine-kharkiv",
    "country": "Ukraine",
    "location": {
      "latitude": "50.0000",
      "longitude": "36.2500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 30.44,
      "restaurant-price-index": 25.28,
      "groceries-index": 23.16,
      "rent-index": 8.75
    },
    "type": "city",
    "city": "Dnipro",
    "id": "ukraine-dnipro",
    "country": "Ukraine",
    "location": {
      "latitude": "48.4800",
      "longitude": "35.0000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 30.25,
      "restaurant-price-index": 31.7,
      "groceries-index": 23.71,
      "rent-index": 9.78
    },
    "type": "city",
    "city": "Baku",
    "id": "azerbaijan-baku",
    "country": "Azerbaijan",
    "location": {
      "latitude": "40.3953",
      "longitude": "49.8622"
    }
  },
  {
    "index": {
      "cost-of-living-index": 30.16,
      "restaurant-price-index": 23.25,
      "groceries-index": 26.11,
      "rent-index": 9.27
    },
    "type": "city",
    "city": "Medellin",
    "id": "colombia-medellin",
    "country": "Colombia",
    "location": {
      "latitude": "6.2750",
      "longitude": "-75.5750"
    }
  },
  {
    "index": {
      "cost-of-living-index": 30.01,
      "restaurant-price-index": 22.67,
      "groceries-index": 23.87,
      "rent-index": 11.05
    },
    "type": "city",
    "city": "Lviv",
    "id": "ukraine-lviv",
    "country": "Ukraine"
  },
  {
    "index": {
      "cost-of-living-index": 29.87,
      "restaurant-price-index": 27.57,
      "groceries-index": 28.36,
      "rent-index": 21.37
    },
    "type": "city",
    "city": "Mumbai",
    "id": "india-mumbai",
    "country": "India",
    "location": {
      "latitude": "19.0170",
      "longitude": "72.8570"
    }
  },
  {
    "index": {
      "cost-of-living-index": 29.32,
      "restaurant-price-index": 19.96,
      "groceries-index": 30.53,
      "rent-index": 6.15
    },
    "type": "city",
    "city": "Chandigarh",
    "id": "india-chandigarh",
    "country": "India",
    "location": {
      "latitude": "30.7200",
      "longitude": "76.7800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 28.91,
      "restaurant-price-index": 20.83,
      "groceries-index": 23.12,
      "rent-index": 7
    },
    "type": "city",
    "city": "Cali",
    "id": "colombia-cali",
    "country": "Colombia",
    "location": {
      "latitude": "3.4000",
      "longitude": "-76.5000"
    }
  },
  {
    "index": {
      "cost-of-living-index": 28.58,
      "restaurant-price-index": 20.95,
      "groceries-index": 28.81,
      "rent-index": 9.27
    },
    "type": "city",
    "city": "Bangalore",
    "id": "india-bangalore",
    "country": "India",
    "location": {
      "latitude": "12.9700",
      "longitude": "77.5600"
    }
  },
  {
    "index": {
      "cost-of-living-index": 28.38,
      "restaurant-price-index": 22.29,
      "groceries-index": 26.15,
      "rent-index": 9.03
    },
    "type": "city",
    "city": "Bishkek",
    "id": "kyrgyzstan-bishkek",
    "country": "Kyrgyzstan",
    "location": {
      "latitude": "42.8731",
      "longitude": "74.5852"
    }
  },
  {
    "index": {
      "cost-of-living-index": 28.33,
      "restaurant-price-index": 23.98,
      "groceries-index": 26.45,
      "rent-index": 8.52
    },
    "type": "city",
    "city": "Delhi",
    "id": "india-delhi",
    "country": "India",
    "location": {
      "latitude": "28.6700",
      "longitude": "77.2300"
    }
  },
  {
    "index": {
      "cost-of-living-index": 28.27,
      "restaurant-price-index": 23.44,
      "groceries-index": 28.31,
      "rent-index": 7.8
    },
    "type": "city",
    "city": "Pune",
    "id": "india-pune",
    "country": "India",
    "location": {
      "latitude": "18.5300",
      "longitude": "73.8500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 28.2,
      "restaurant-price-index": 22.11,
      "groceries-index": 25.02,
      "rent-index": 6.03
    },
    "type": "city",
    "city": "Noida",
    "id": "india-noida",
    "country": "India"
  },
  {
    "index": {
      "cost-of-living-index": 28.11,
      "restaurant-price-index": 21.29,
      "groceries-index": 25.7,
      "rent-index": 4.51
    },
    "type": "city",
    "city": "Alexandria",
    "id": "egypt-alexandria",
    "country": "Egypt",
    "location": {
      "latitude": "31.2000",
      "longitude": "29.9500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 28.08,
      "restaurant-price-index": 18.92,
      "groceries-index": 23.71,
      "rent-index": 4
    },
    "type": "city",
    "city": "Zaporizhzhya",
    "id": "ukraine-zaporizhzhya",
    "country": "Ukraine",
    "location": {
      "latitude": "47.8573",
      "longitude": "35.1768"
    }
  },
  {
    "index": {
      "cost-of-living-index": 27.9,
      "restaurant-price-index": 27.12,
      "groceries-index": 21.46,
      "rent-index": 10.04
    },
    "type": "city",
    "city": "Tbilisi",
    "id": "georgia-tbilisi",
    "country": "Georgia",
    "location": {
      "latitude": "41.7250",
      "longitude": "44.7908"
    }
  },
  {
    "index": {
      "cost-of-living-index": 27.08,
      "restaurant-price-index": 21.66,
      "groceries-index": 24.19,
      "rent-index": 8.88
    },
    "type": "city",
    "city": "Pristina",
    "id": "kosovo-disputed-territory-pristina",
    "country": "Kosovo (Disputed Territory)"
  },
  {
    "index": {
      "cost-of-living-index": 27,
      "restaurant-price-index": 22.79,
      "groceries-index": 25.74,
      "rent-index": 9.5
    },
    "type": "city",
    "city": "Thane",
    "id": "india-thane",
    "country": "India"
  },
  {
    "index": {
      "cost-of-living-index": 26.95,
      "restaurant-price-index": 22.36,
      "groceries-index": 29.1,
      "rent-index": 7.82
    },
    "type": "city",
    "city": "Caracas",
    "id": "venezuela-caracas",
    "country": "Venezuela",
    "location": {
      "latitude": "10.5010",
      "longitude": "-66.9170"
    }
  },
  {
    "index": {
      "cost-of-living-index": 26.69,
      "restaurant-price-index": 15.54,
      "groceries-index": 24.77,
      "rent-index": 5.95
    },
    "type": "city",
    "city": "Tunis",
    "id": "tunisia-tunis",
    "country": "Tunisia",
    "location": {
      "latitude": "36.8028",
      "longitude": "10.1797"
    }
  },
  {
    "index": {
      "cost-of-living-index": 26.5,
      "restaurant-price-index": 18.75,
      "groceries-index": 25.78,
      "rent-index": 5.35
    },
    "type": "city",
    "city": "Jaipur",
    "id": "india-jaipur",
    "country": "India",
    "location": {
      "latitude": "26.9211",
      "longitude": "75.8100"
    }
  },
  {
    "index": {
      "cost-of-living-index": 26.43,
      "restaurant-price-index": 20.34,
      "groceries-index": 22.79,
      "rent-index": 7.72
    },
    "type": "city",
    "city": "Tashkent",
    "id": "uzbekistan-tashkent",
    "country": "Uzbekistan",
    "location": {
      "latitude": "41.3117",
      "longitude": "69.2949"
    }
  },
  {
    "index": {
      "cost-of-living-index": 25.9,
      "restaurant-price-index": 17.77,
      "groceries-index": 26.52,
      "rent-index": 6.33
    },
    "type": "city",
    "city": "Hyderabad",
    "id": "india-hyderabad",
    "country": "India",
    "location": {
      "latitude": "17.4000",
      "longitude": "78.4800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 25.8,
      "restaurant-price-index": 15.67,
      "groceries-index": 26.3,
      "rent-index": 4.24
    },
    "type": "city",
    "city": "Indore",
    "id": "india-indore",
    "country": "India",
    "location": {
      "latitude": "22.7151",
      "longitude": "75.8650"
    }
  },
  {
    "index": {
      "cost-of-living-index": 25.62,
      "restaurant-price-index": 15.15,
      "groceries-index": 26.45,
      "rent-index": 6.97
    },
    "type": "city",
    "city": "Chennai",
    "id": "india-chennai",
    "country": "India",
    "location": {
      "latitude": "13.0900",
      "longitude": "80.2800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 25.5,
      "restaurant-price-index": 17.2,
      "groceries-index": 26.41,
      "rent-index": 5.36
    },
    "type": "city",
    "city": "Ahmedabad",
    "id": "india-ahmedabad",
    "country": "India",
    "location": {
      "latitude": "23.0301",
      "longitude": "72.5800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 25.32,
      "restaurant-price-index": 20.88,
      "groceries-index": 24.92,
      "rent-index": 5.41
    },
    "type": "city",
    "city": "Kolkata",
    "id": "india-kolkata",
    "country": "India",
    "location": {
      "latitude": "22.4950",
      "longitude": "88.3247"
    }
  },
  {
    "index": {
      "cost-of-living-index": 24.82,
      "restaurant-price-index": 15.31,
      "groceries-index": 26.5,
      "rent-index": 5.04
    },
    "type": "city",
    "city": "Coimbatore",
    "id": "india-coimbatore",
    "country": "India",
    "location": {
      "latitude": "11.0000",
      "longitude": "76.9500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 24.68,
      "restaurant-price-index": 18.72,
      "groceries-index": 25.79,
      "rent-index": 4.16
    },
    "type": "city",
    "city": "Surat",
    "id": "india-surat",
    "country": "India",
    "location": {
      "latitude": "21.2000",
      "longitude": "72.8400"
    }
  },
  {
    "index": {
      "cost-of-living-index": 24.53,
      "restaurant-price-index": 19.42,
      "groceries-index": 22.64,
      "rent-index": 4.87
    },
    "type": "city",
    "city": "Lucknow (Lakhnau)",
    "id": "india-lucknow-lakhnau",
    "country": "India"
  },
  {
    "index": {
      "cost-of-living-index": 24.53,
      "restaurant-price-index": 18.92,
      "groceries-index": 24.01,
      "rent-index": 7.44
    },
    "type": "city",
    "city": "Navi Mumbai",
    "id": "india-navi-mumbai",
    "country": "India"
  },
  {
    "index": {
      "cost-of-living-index": 24.46,
      "restaurant-price-index": 16.57,
      "groceries-index": 25.02,
      "rent-index": 3.99
    },
    "type": "city",
    "city": "Vadodara",
    "id": "india-vadodara",
    "country": "India",
    "location": {
      "latitude": "22.3100",
      "longitude": "73.1800"
    }
  },
  {
    "index": {
      "cost-of-living-index": 24.39,
      "restaurant-price-index": 16.78,
      "groceries-index": 23.33,
      "rent-index": 3.51
    },
    "type": "city",
    "city": "Bhopal",
    "id": "india-bhopal",
    "country": "India",
    "location": {
      "latitude": "23.2500",
      "longitude": "77.4100"
    }
  },
  {
    "index": {
      "cost-of-living-index": 24.25,
      "restaurant-price-index": 19.9,
      "groceries-index": 24.66,
      "rent-index": 4.85
    },
    "type": "city",
    "city": "Mangalore",
    "id": "india-mangalore",
    "country": "India",
    "location": {
      "latitude": "12.9000",
      "longitude": "74.8500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 24.07,
      "restaurant-price-index": 13.65,
      "groceries-index": 25.86,
      "rent-index": 4.13
    },
    "type": "city",
    "city": "Guwahati",
    "id": "india-guwahati",
    "country": "India",
    "location": {
      "latitude": "26.1600",
      "longitude": "91.7700"
    }
  },
  {
    "index": {
      "cost-of-living-index": 24,
      "restaurant-price-index": 13.4,
      "groceries-index": 26.4,
      "rent-index": 4.1
    },
    "type": "city",
    "city": "Bhubaneswar",
    "id": "india-bhubaneswar",
    "country": "India"
  },
  {
    "index": {
      "cost-of-living-index": 23.7,
      "restaurant-price-index": 15.47,
      "groceries-index": 25.78,
      "rent-index": 4.56
    },
    "type": "city",
    "city": "Mysore",
    "id": "india-mysore",
    "country": "India",
    "location": {
      "latitude": "12.3100",
      "longitude": "76.6600"
    }
  },
  {
    "index": {
      "cost-of-living-index": 23.52,
      "restaurant-price-index": 12.64,
      "groceries-index": 25.19,
      "rent-index": 5.4
    },
    "type": "city",
    "city": "Kochi",
    "id": "india-kochi",
    "country": "India",
    "location": {
      "latitude": "10.0150",
      "longitude": "76.2239"
    }
  },
  {
    "index": {
      "cost-of-living-index": 21.88,
      "restaurant-price-index": 13.55,
      "groceries-index": 21.66,
      "rent-index": 5.3
    },
    "type": "city",
    "city": "Vijayawada",
    "id": "india-vijayawada",
    "country": "India",
    "location": {
      "latitude": "16.5200",
      "longitude": "80.6300"
    }
  },
  {
    "index": {
      "cost-of-living-index": 21.18,
      "restaurant-price-index": 15.6,
      "groceries-index": 20.57,
      "rent-index": 4.25
    },
    "type": "city",
    "city": "Visakhapatnam",
    "id": "india-visakhapatnam",
    "country": "India"
  },
  {
    "index": {
      "cost-of-living-index": 21.1,
      "restaurant-price-index": 18.43,
      "groceries-index": 17.63,
      "rent-index": 4.24
    },
    "type": "city",
    "city": "Lahore",
    "id": "pakistan-lahore",
    "country": "Pakistan",
    "location": {
      "latitude": "31.5600",
      "longitude": "74.3500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 20.76,
      "restaurant-price-index": 10.86,
      "groceries-index": 22.12,
      "rent-index": 4.42
    },
    "type": "city",
    "city": "Thiruvananthapuram",
    "id": "india-thiruvananthapuram",
    "country": "India",
    "location": {
      "latitude": "8.5000",
      "longitude": "76.9500"
    }
  },
  {
    "index": {
      "cost-of-living-index": 20.6,
      "restaurant-price-index": 15.88,
      "groceries-index": 18.57,
      "rent-index": 5.26
    },
    "type": "city",
    "city": "Islamabad",
    "id": "pakistan-islamabad",
    "country": "Pakistan",
    "location": {
      "latitude": "33.7000",
      "longitude": "73.1666"
    }
  },
  {
    "index": {
      "cost-of-living-index": 19.66,
      "restaurant-price-index": 15.64,
      "groceries-index": 17.68,
      "rent-index": 4.46
    },
    "type": "city",
    "city": "Karachi",
    "id": "pakistan-karachi",
    "country": "Pakistan",
    "location": {
      "latitude": "24.8700",
      "longitude": "66.9900"
    }
  },
  {
    "index": {
      "cost-of-living-index": 17.07,
      "restaurant-price-index": 14.96,
      "groceries-index": 14.17,
      "rent-index": 3.6
    },
    "type": "city",
    "city": "Rawalpindi",
    "id": "pakistan-rawalpindi",
    "country": "Pakistan",
    "location": {
      "latitude": "33.6000",
      "longitude": "73.0400"
    }
  }
]

const todo = [
  'south-korea-seoul',
  'israel-ramat-gan',
  'netherlands-the-hague-den-haag',
  'netherlands-leiden',
  'netherlands-delft',
  'belgium-antwerp',
  'sweden-gothenburg',
  'germany-nuremberg',
  'united-kingdom-newcastle-upon-tyne',
  'germany-freiburg-im-breisgau',
  'germany-hanover',
  'cyprus-limassol',
  'germany-aachen',
  'saudi-arabia-al-khobar',
  'spain-seville-sevilla',
  'greece-patras',
  'greece-heraklion',
  'saudi-arabia-jeddah-jiddah',
  'saudi-arabia-ad-dammam',
  'thailand-pattaya',
  'czech-republic-prague',
  'czech-republic-brno',
  'czech-republic-olomouc',
  'guatemala-guatemala-city',
  'czech-republic-ostrava',
  'malaysia-penang',
  'poland-krakow-cracow',
  'russia-saint-petersburg',
  'russia-rostov-na-donu',
  'ukraine-lviv',
  'india-noida',
  'kosovo-disputed-territory-pristina',
  'india-thane',
  'india-lucknow-lakhnau',
  'india-navi-mumbai',
  'india-bhubaneswar',
  'india-visakhapatnam'
]

const getLatLong = async (id) => {
  const url = `https://google.com/search?q=${id.replace(/-/g, '+')}+latitude+longitude`

  const data = await fetch(url)
  const text = await data.text()

  const answerMatch = text.match(/[0-9]{1,3}\.[0-9]{4}� [NS], [0-9]{1,3}\.[0-9]{4}� [WE]/)

  if (!answerMatch) return { id }

  const [ match ] = answerMatch
  const [ latitude, longitude ] = match
        .split(',')
        .map(i => i.match(/[0-9]{1,3}\.[0-9]{4}/))
        .map(([i]) => i)

  return { id, location: { latitude, longitude } }
}

;(async () => {
  const result = await Promise.all(todo.map(getLatLong))
  const mapped = result
        .filter(i => i.location)
        .reduce((acc, { id, location }) => ({ ...acc, [id]: { location } }), {})

  const final = data.map(it => {
    if (it.location) return it
    return { ...it, ...mapped[it.id] }
  })

  console.log(JSON.stringify(final))
})()
