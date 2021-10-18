import { createServer, IncomingMessage, ServerResponse } from 'http';
import { Utils } from './Utils';
import { LoginHandler } from './LoginHandler';
import { Authorizer } from '../Authorization/Authorizer';
import { UserHandler } from './UserHandler'

export class Server {
private authorizer: Authorizer = new Authorizer();
    public createServer() {
        createServer(
            async (req: IncomingMessage, res: ServerResponse) => {
                console.log('got request from: ' + req.url);
                const basePath = Utils.getUrlBasePath(req.url);

                switch (basePath) {
                    case 'login':
                        await new LoginHandler(req, res, this.authorizer).handleRequest();
                        break;
                    case 'user':
                    await new UserHandler(req, res)
                    break;
                    default:
                        break;
                }

                res.end();
            }
        ).listen(8080);
        console.log('server started')
    }
}