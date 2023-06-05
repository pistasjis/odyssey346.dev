import type { Actions } from "./$types";
import { env } from "$env/dynamic/private";
import { sendMatrixMessage } from "brunost";
import nodemailer from "nodemailer";

export const actions: Actions = {
	default: async ({ request, getClientAddress }) => {
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

		if (
			!env.smtp_host ||
			!env.smtp_port ||
			!env.smtp_secure ||
			!env.smtp_user ||
			!env.smtp_pass ||
			!env.smtp_to
		) {
			return { error: true, message: "Something went wrong." };
		}

		const transporter = nodemailer.createTransport({
			host: env.smtp_host,
			port: env.smtp_port,
			secure: env.smtp_secure,
			auth: {
				user: env.smtp_user,
				pass: env.smtp_pass
			}
		});

		const initial = await transporter.sendMail({
			from: `"New contact form submission from ${name}, ${email}" <${env.smtp_user}>`,
			to: env.smtp_to,
			subject: "New contact form submission",
			text: `${message}\n`,
			headers: {
				"X-Mail-IP": ip
			}
		});

		console.log("message sent: %s", initial.response);

		return { success: true, message: "Message sent!" };
	}
};
