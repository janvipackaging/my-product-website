import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // A comprehensive list of major cities across all Indian states and union territories.
  // The names are lowercase and URL-friendly (e.g., 'new-delhi').
  const CITIES = [
    // Andaman and Nicobar Islands
    'port-blair',
    // Andhra Pradesh
    'visakhapatnam', 'vijayawada', 'guntur', 'nellore', 'kurnool', 'rajahmundry', 'tirupati', 'kakinada', 'anantapur', 'vizianagaram',
    // Arunachal Pradesh
    'itanagar',
    // Assam
    'guwahati', 'dibrugarh', 'silchar', 'jorhat',
    // Bihar
    'patna', 'gaya', 'bhagalpur', 'muzaffarpur', 'purnia', 'darbhanga',
    // Chandigarh
    'chandigarh',
    // Chhattisgarh
    'raipur', 'bhilai', 'bilaspur', 'korba',
    // Dadra and Nagar Haveli and Daman and Diu
    'daman', 'silvassa',
    // Delhi
    'delhi', 'new-delhi',
    // Goa
    'panaji', 'margao', 'vasco-da-gama',
    // Gujarat
    'ahmedabad', 'surat', 'vadodara', 'rajkot', 'bhavnagar', 'jamnagar', 'junagadh', 'gandhinagar',
    // Haryana
    'faridabad', 'gurgaon', 'panipat', 'ambala', 'yamunanagar', 'rohtak', 'hisar', 'karnal', 'sonipat',
    // Himachal Pradesh
    'shimla', 'solan', 'dharamshala',
    // Jammu and Kashmir
    'srinagar', 'jammu', 'anantnag',
    // Jharkhand
    'ranchi', 'jamshedpur', 'dhanbad', 'bokaro-steel-city',
    // Karnataka
    'bangalore', 'hubli-dharwad', 'mysore', 'mangalore', 'belgaum', 'davanagere', 'bellary', 'gulbarga', 'shimoga',
    // Kerala
    'thiruvananthapuram', 'kochi', 'kozhikode', 'kollam', 'thrissur', 'kannur', 'alappuzha',
    // Ladakh
    'leh',
    // Lakshadweep
    'kavaratti',
    // Madhya Pradesh
    'indore', 'bhopal', 'jabalpur', 'gwalior', 'ujjain', 'sagar', 'dewas', 'satna',
    // Maharashtra
    'mumbai', 'pune', 'nagpur', 'thane', 'nashik', 'aurangabad', 'solapur', 'navi-mumbai', 'kolhapur', 'amravati',
    // Manipur
    'imphal',
    // Meghalaya
    'shillong',
    // Mizoram
    'aizawl',
    // Nagaland
    'kohima', 'dimapur',
    // Odisha
    'bhubaneswar', 'cuttack', 'rourkela', 'brahmapur', 'sambalpur',
    // Puducherry
    'puducherry',
    // Punjab
    'ludhiana', 'amritsar', 'jalandhar', 'patiala', 'bathinda', 'mohali',
    // Rajasthan
    'jaipur', 'jodhpur', 'kota', 'bikaner', 'ajmer', 'udaipur', 'bhilwara', 'alwar', 'sikar',
    // Sikkim
    'gangtok',
    // Tamil Nadu
    'chennai', 'coimbatore', 'madurai', 'tiruchirappalli', 'salem', 'tirunelveli', 'erode', 'vellore', 'thoothukudi',
    // Telangana
    'hyderabad', 'warangal', 'nizamabad', 'karimnagar', 'ramagundam', 'khammam',
    // Tripura
    'agartala',
    // Uttar Pradesh
    'lucknow', 'kanpur', 'ghaziabad', 'agra', 'meerut', 'varanasi', 'prayagraj', 'bareilly', 'aligarh', 'moradabad', 'noida', 'saharanpur', 'gorakhpur', 'jhansi',
    // Uttarakhand
    'dehradun', 'haridwar', 'roorkee', 'haldwani',
    // West Bengal
    'kolkata', 'asansol', 'siliguri', 'durgapur', 'howrah',
  ];

  const cityUrls = CITIES.map((city) => ({

    url: `https://www.janvipackaging.online/bopp-film/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: 'https://www.janvipackaging.online', // Your homepage
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...cityUrls,
  ];
}
