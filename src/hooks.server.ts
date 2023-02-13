import { kuma } from "$lib/server/cache";
import axios from 'axios';


const updateCache = async() => {
    try {
		const kumaResponse = await axios("https://uptime.odyssey346.dev/api/status-page/main");

        if (kumaResponse.status === 200 ) {
            kuma.set(kumaResponse.data);
        } else {
            kuma.set({ error: true, message: "Error: " + kumaResponse.status });
        }
	} catch (err) {
        console.log(err);
		kuma.set({ error: true, message: "Error: " + err });
	}
}

updateCache();

setInterval(updateCache, 30000);