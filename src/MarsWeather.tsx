import { useEffect, useState } from "react";
import { getMarsWeather } from "./api/mars";

export default function MarsWeather() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("calling API...");

        getMarsWeather()
            .then((data) => {
                console.log("API SUCCESS:", data);
                setData(data);
            })
            .catch((err) => {
                console.error("API ERROR:", err);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
    );
}