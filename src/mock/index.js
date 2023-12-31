
import { createServer } from 'miragejs'
import { API_BASE_URL } from 'configs/AppConfig';

import { signInUserData } from './data/authData'

import { authFakeApi } from './fakeApi'

export default function mockServer({ environment = 'test' }) {
    return createServer({
        environment,
        seeds(server) {
			server.db.loadData({
				signInUserData
			})
		},

        routes() {

            this.urlPrefix = ''
            this.namespace = ''
            authFakeApi(this, API_BASE_URL)

            this.passthrough(request => {
                const isExternal = request.url.startsWith('http')
                return isExternal
            })

            this.passthrough(request => {
                console.log(request)
                const isExternal = request.url.startsWith('/tableAndChairs')
                return isExternal
            })
            this.passthrough(request => {
                const isExternal = request.url.startsWith('textures')
                return isExternal
            })
            this.passthrough("https://jsonplaceholder.typicode.com/**")
            // this.passthrough("/tableAndChairs/scene.gltf")
        },
    })
}