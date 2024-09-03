export default class AuthService {
    init(authToken: string): Promise<{
        roles: any;
        email: any;
        auth0_id: any;
    }>;
    private verify;
    private decodeToken;
    private getToken;
}
