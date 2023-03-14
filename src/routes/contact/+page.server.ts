import type { Actions } from "./$types";
import { env } from "$env/dynamic/private";
import { sendMatrixMessage } from "brunost";

export const actions: Actions = {
    default: async ({ request, getClientAddress}) => {
        const formData = await request.formData();
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        const ip = getClientAddress();

        if (!name || !email || !message) {
            return { error: true, message: "Please fill out all fields." };
        }

        if (message.length > 500) {
            return { error: true, message: "Message is too long." };
        }

        if (!env.discord_webhook_url) {
            return { error: true, message: "Something went wrong." };
        }

        // send Matrix message
        const matrix = await sendMatrixMessage(env.matrix_homeserver, env.matrix_roomid, env.matrix_token, `New contact form submission!\n\nFrom: ${name} (${email})\nMessage: ${message}\nIP: ${ip}`);

        console.log(matrix);
        // // send Discord webhook
        // const webhook = await fetch(env.discord_webhook_url, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         content: `**New contact form submission**\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}\n**IP:** ${ip}`
        //     })
        // });

        // if (webhook.status !== 204) {
        //     return { error: true, message: "Something went wrong." };
        // }

        return { success: true, message: "Message sent!" };
    }
};
