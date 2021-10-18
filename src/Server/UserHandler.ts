import { IncomingMessage, ServerResponse } from "http";
import { HTTP_CODES, HTTP_METHODS } from "../Shared/Model";
import { UsersDBAccess } from "../User/UserDBAccess";
import { BaseRequestHandler } from "./BaseRequestHandler";
import { Utils } from "./Utils";

export class UserHandler extends BaseRequestHandler {
    private userDBAccess: UsersDBAccess = new UsersDBAccess();

    public constructor(req: IncomingMessage, res: ServerResponse) {
        super(req, res)
    }
    async handleRequest() {
        switch (this.req.method) {
            case HTTP_METHODS.GET:
                this.handleGet()
                break;
        
            default:
                this.handleNotFound()
                break;
        }
    }

    private async handleGet() {
        const parsedUrl = Utils.getUrlParameters(this.req.url)
    }

}