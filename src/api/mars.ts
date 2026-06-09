const BASE_URL = "http://localhost:5193/marsweather";

export async function getMarsWeather() {
    const res = await fetch(BASE_URL);

    if (!res.ok) {
        throw new Error("Failed to fetch Mars weather");
    }

    return res.json();
}