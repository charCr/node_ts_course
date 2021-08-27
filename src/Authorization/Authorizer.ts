import { Account, SessionToken, TokenGenerator } from "../Server/Model";


export class Authorizer implements TokenGenerator{
    async generateToken(account: Account): Promise<SessionToken | undefined> {
        if(account.username === 'carlos' && account.password === 'carlos12') {
            return {tokenId: '1'}
        }else {
            return undefined;
        }
    }
    
}