const pingResolver = {
    Query: {
        async ping() {
            return 'pong';
        },
        async pingAuthenticated() {
            return 'pong'
        }
    }
};

export default pingResolver;