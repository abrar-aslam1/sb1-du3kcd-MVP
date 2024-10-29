export interface Location {
  id: string;
  name: string;
  country: string;
  region?: string;
  imageUrl: string;
  popularity: number;
}

export const locations: Location[] = [
  {
    "id": "maui-hawaii",
    "name": "Maui",
    "country": "United States",
    "region": "Hawaii",
    "imageUrl": "https://images.unsplash.com/photo-1542259009477-0d4ebff0964b",
    "popularity": 94
  },
  {
    "id": "paris-france",
    "name": "Paris",
    "country": "France",
    "region": "Île-de-France",
    "imageUrl": "https://images.unsplash.com/photo-1431274172761-fca41d930114",
    "popularity": 98
  },
  {
    "id": "santorini-greece",
    "name": "Santorini",
    "country": "Greece",
    "region": "Cyclades Islands",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
    "popularity": 96
  },
  {
    "id": "tuscany-italy",
    "name": "Tuscany",
    "country": "Italy",
    "region": "Tuscany",
    "imageUrl": "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    "popularity": 92
  },
  {
    "id": "bali-indonesia",
    "name": "Bali",
    "country": "Indonesia",
    "region": "Lesser Sunda Islands",
    "imageUrl": "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    "popularity": 95
  },
  {
    "id": "amalfi-coast-italy",
    "name": "Amalfi Coast",
    "country": "Italy",
    "region": "Campania",
    "imageUrl": "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca",
    "popularity": 93
  },
  {
    "id": "bahamas",
    "name": "Bahamas",
    "country": "Bahamas",
    "region": "Caribbean",
    "imageUrl": "https://images.unsplash.com/photo-1548574505-5e239809ee19",
    "popularity": 90
  },
  {
    "id": "cancun-mexico",
    "name": "Cancún",
    "country": "Mexico",
    "region": "Quintana Roo",
    "imageUrl": "https://images.unsplash.com/photo-1682553064442-03f186cf9e4c",
    "popularity": 89
  },
  {
    "id": "punta-cana-dominican-republic",
    "name": "Punta Cana",
    "country": "Dominican Republic",
    "region": "La Altagracia",
    "imageUrl": "https://images.unsplash.com/photo-1627393100177-b4297e79a5be",
    "popularity": 88
  },
  {
    "id": "phuket-thailand",
    "name": "Phuket",
    "country": "Thailand",
    "region": "Phuket Province",
    "imageUrl": "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5",
    "popularity": 87
  },
  {
    "id": "barcelona-spain",
    "name": "Barcelona",
    "country": "Spain",
    "region": "Catalonia",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded",
    "popularity": 85
  },
  {
    "id": "dubai-uae",
    "name": "Dubai",
    "country": "United Arab Emirates",
    "region": "Dubai Emirate",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    "popularity": 86
  },
  {
    "id": "lake-como-italy",
    "name": "Lake Como",
    "country": "Italy",
    "region": "Lombardy",
    "imageUrl": "https://images.unsplash.com/photo-1583497947765-0673d2fc2fb8",
    "popularity": 84
  },
  {
    "id": "venice-italy",
    "name": "Venice",
    "country": "Italy",
    "region": "Veneto",
    "imageUrl": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0",
    "popularity": 91
  },
  {
    "id": "fiji",
    "name": "Fiji",
    "country": "Fiji",
    "region": "South Pacific",
    "imageUrl": "https://images.unsplash.com/photo-1589179447602-8e2ebdecfe59",
    "popularity": 83
  },
  {
    "id": "jamaica",
    "name": "Jamaica",
    "country": "Jamaica",
    "region": "Caribbean",
    "imageUrl": "https://images.unsplash.com/photo-1589456506629-b2ea1a8576fb",
    "popularity": 82
  },
  {
    "id": "maldives",
    "name": "Maldives",
    "country": "Maldives",
    "region": "Indian Ocean",
    "imageUrl": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    "popularity": 97
  },
  {
    "id": "costa-rica",
    "name": "Costa Rica",
    "country": "Costa Rica",
    "region": "Central America",
    "imageUrl": "https://images.unsplash.com/photo-1580094777767-4584d4b5c6dc",
    "popularity": 80
  },
  {
    "id": "newport-rhode-island",
    "name": "Newport",
    "country": "United States",
    "region": "Rhode Island",
    "imageUrl": "https://images.unsplash.com/photo-1583447796373-0791a6e3a70c",
    "popularity": 78
  },
  {
    "id": "prague-czech-republic",
    "name": "Prague",
    "country": "Czech Republic",
    "region": "Bohemia",
    "imageUrl": "https://images.unsplash.com/photo-1541849546-216549ae216d",
    "popularity": 79
  },
  {
    "id": "sydney-australia",
    "name": "Sydney",
    "country": "Australia",
    "region": "New South Wales",
    "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
    "popularity": 81
  },
  {
    "id": "kauai-hawaii",
    "name": "Kauai",
    "country": "United States",
    "region": "Hawaii",
    "imageUrl": "https://images.unsplash.com/photo-1542304074-9c8ce93b52fd",
    "popularity": 85
  },
  {
    "id": "rome-italy",
    "name": "Rome",
    "country": "Italy",
    "region": "Lazio",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5",
    "popularity": 90
  },
  {
    "id": "tulum-mexico",
    "name": "Tulum",
    "country": "Mexico",
    "region": "Quintana Roo",
    "imageUrl": "https://images.unsplash.com/photo-1620127252536-03bdfcf6d5c3",
    "popularity": 84
  },
  {
    "id": "lake-tahoe-california",
    "name": "Lake Tahoe",
    "country": "United States",
    "region": "California/Nevada",
    "imageUrl": "https://images.unsplash.com/photo-1537509622795-ac0c6a3d1f8d",
    "popularity": 77
  },
  {
    "id": "cape-town-south-africa",
    "name": "Cape Town",
    "country": "South Africa",
    "region": "Western Cape",
    "imageUrl": "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
    "popularity": 76
  },
  {
    "id": "banff-canada",
    "name": "Banff",
    "country": "Canada",
    "region": "Alberta",
    "imageUrl": "https://images.unsplash.com/photo-1587133599421-40a3cd84831b",
    "popularity": 75
  },
  {
    "id": "st-lucia",
    "name": "St. Lucia",
    "country": "St. Lucia",
    "region": "Caribbean",
    "imageUrl": "https://images.unsplash.com/photo-1599023394137-811ec39eb316",
    "popularity": 82
  },
  {
    "id": "koh-samui-thailand",
    "name": "Koh Samui",
    "country": "Thailand",
    "region": "Surat Thani",
    "imageUrl": "https://images.unsplash.com/photo-1537956965359-7573183d1f57",
    "popularity": 83
  },
  {
    "id": "queenstown-new-zealand",
    "name": "Queenstown",
    "country": "New Zealand",
    "region": "Otago",
    "imageUrl": "https://images.unsplash.com/photo-1589871973318-9ca1258faa5d",
    "popularity": 74
  },
  {
    "id": "aruba",
    "name": "Aruba",
    "country": "Aruba",
    "region": "Caribbean",
    "imageUrl": "https://images.unsplash.com/photo-1544556571-0a23ef7c4eb4",
    "popularity": 79
  },
  {
    "id": "florence-italy",
    "name": "Florence",
    "country": "Italy",
    "region": "Tuscany",
    "imageUrl": "https://images.unsplash.com/photo-1541370976299-4d24ebbc9077",
    "popularity": 88
  },
  {
    "id": "big-island-hawaii",
    "name": "Big Island",
    "country": "United States",
    "region": "Hawaii",
    "imageUrl": "https://images.unsplash.com/photo-1545251142-f32339076e6d",
    "popularity": 80
  },
  {
    "id": "las-vegas-nevada",
    "name": "Las Vegas",
    "country": "United States",
    "region": "Nevada",
    "imageUrl": "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4",
    "popularity": 70
  },
  {
    "id": "napa-valley-california",
    "name": "Napa Valley",
    "country": "United States",
    "region": "California",
    "imageUrl": "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c",
    "popularity": 77
  },
  {
    "id": "antigua",
    "name": "Antigua",
    "country": "Antigua and Barbuda",
    "region": "Caribbean",
    "imageUrl": "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff",
    "popularity": 76
  },
  {
    "id": "bahia-brazil",
    "name": "Bahia",
    "country": "Brazil",
    "region": "Northeast",
    "imageUrl": "https://images.unsplash.com/photo-1623765944235-576e442131f6",
    "popularity": 69
  },
  {
    "id": "mykonos-greece",
    "name": "Mykonos",
    "country": "Greece",
    "region": "Cyclades Islands",
    "imageUrl": "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a",
    "popularity": 85
  },
  {
    "id": "cairns-australia",
    "name": "Cairns",
    "country": "Australia",
    "region": "Queensland",
    "imageUrl": "https://images.unsplash.com/photo-1624023749462-5765e955855d",
    "popularity": 68
  },
  {
    "id": "edinburgh-scotland",
    "name": "Edinburgh",
    "country": "United Kingdom",
    "region": "Scotland",
    "imageUrl": "https://images.unsplash.com/photo-1582557192629-0e71ef2cd214",
    "popularity": 73
  },
  {
    "id": "kyoto-japan",
    "name": "Kyoto",
    "country": "Japan",
    "region": "Kansai",
    "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    "popularity": 72
  },
  {
    "id": "bora-bora-french-polynesia",
    "name": "Bora Bora",
    "country": "French Polynesia",
    "region": "Leeward Islands",
    "imageUrl": "https://images.unsplash.com/photo-1633160198172-66d2f342e5ee",
    "popularity": 89
  },
  {
    "id": "marrakech-morocco",
    "name": "Marrakech",
    "country": "Morocco",
    "region": "Marrakesh-Safi",
    "imageUrl": "https://images.unsplash.com/photo-1597212618440-806262de4f6b",
    "popularity": 71
  },
  {
    "id": "dubrovnik-croatia",
    "name": "Dubrovnik",
    "country": "Croatia",
    "region": "Dalmatia",
    "imageUrl": "https://images.unsplash.com/photo-1555990538-c48dba58edf4",
    "popularity": 74
  },
  {
    "id": "krabi-thailand",
    "name": "Krabi",
    "country": "Thailand",
    "region": "Krabi Province",
    "imageUrl": "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a",
    "popularity": 75
  },
  {
    "id": "barbados",
    "name": "Barbados",
    "country": "Barbados",
    "region": "Caribbean",
    "imageUrl": "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a",
    "popularity": 78
  },
  {
    "id": "porto-portugal",
    "name": "Porto",
    "country": "Portugal",
    "region": "Porto District",
    "imageUrl": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b",
    "popularity": 70
  },
  {
    "id": "siem-reap-cambodia",
    "name": "Siem Reap",
    "country": "Cambodia",
    "region": "Siem Reap Province",
    "imageUrl": "https://images.unsplash.com/photo-1600820641817-89815fa0ad59",
    "popularity": 67
  },
  {
    "id": "machu-picchu-peru",
    "name": "Machu Picchu",
    "country": "Peru",
    "region": "Cusco Region",
    "imageUrl": "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
    "popularity": 69
  },
  {
    "id": "cartagena-colombia",
    "name": "Cartagena",
    "country": "Colombia",
    "region": "Bolívar",
    "imageUrl": "https://images.unsplash.com/photo-1583997052301-0042b33fc598",
    "popularity": 68
  },
  {
    "id": "koh-phi-phi-thailand",
    "name": "Koh Phi Phi",
    "country": "Thailand",
    "region": "Krabi Province",
    "imageUrl": "https://images.unsplash.com/photo-1537956965359-7573183d1f57",
    "popularity": 72
  },
  {
    "id": "seychelles",
    "name": "Seychelles",
    "country": "Seychelles",
    "region": "Indian Ocean",
    "imageUrl": "https://images.unsplash.com/photo-1589979481223-deb893043163",
    "popularity": 86
  },
  {
    "id": "lake-bled-slovenia",
    "name": "Lake Bled",
    "country": "Slovenia",
    "region": "Upper Carniola",
    "imageUrl": "https://images.unsplash.com/photo-1614687345016-b9e8f1f19275",
    "popularity": 65
  },
  {
    "id": "zanzibar-tanzania",
    "name": "Zanzibar",
    "country": "Tanzania",
    "region": "Zanzibar Archipelago",
    "imageUrl": "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe",
    "popularity": 66
  }
];

export function searchLocations(query: string): Location[] {
  const normalizedQuery = query.toLowerCase().trim();
  
  return locations.filter((location) => {
    return (
      location.name.toLowerCase().includes(normalizedQuery) ||
      location.country.toLowerCase().includes(normalizedQuery) ||
      location.region?.toLowerCase().includes(normalizedQuery)
    );
  }).sort((a, b) => b.popularity - a.popularity);
}