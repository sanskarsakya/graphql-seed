import { request } from 'graphql-request';
import { logGraphqlError } from './../utils';
 export const initUser = async (host: string) => {
	try {
		await request(
			host,
			`
                mutation {
                    signup(
                        email: "testuser@gmail.com"
                        password: "password123"
                        firstName: "Mikk"
                        lastName: "Küttim"
                    ) {
                        token
                    }
                }
            `
		);
	} catch (error) {
		console.log('initUser failed');
		if (error.respone && error.response.errors) {
			logGraphqlError(error.response.errors);
		}
	}
};