const dev = {
  API_ENDPOINT_URL: '/api'
};

const prod = {
  API_ENDPOINT_URL: 'https://hammer-systems.vercel.app/api/'
};

const test = {
  API_ENDPOINT_URL: '/api'
};

const getEnv = () => {
	switch (process.env.NODE_ENV) {
		case 'development':
			return dev
		case 'production':
			return prod
		case 'test':
			return test
		default:
			return prod
			break;
	}
}

export const env = getEnv()
