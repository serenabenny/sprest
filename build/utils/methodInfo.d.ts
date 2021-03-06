import { IMethodInfo } from "../definitions";
/*********************************************************************************************************************************/
/*********************************************************************************************************************************/
export declare class MethodInfo {
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    constructor(methodName: string, methodInfo: IMethodInfo, args: any);
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    readonly body: string;
    readonly getAllItemsFl: boolean;
    readonly replaceEndpointFl: boolean;
    readonly requestMethod: string;
    readonly url: string;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private readonly passDataInBody;
    private readonly passDataInQS;
    private readonly isTemplate;
    private readonly replace;
    private methodData;
    private methodInfo;
    private methodParams;
    private methodUrl;
    /*********************************************************************************************************************************/
    /*********************************************************************************************************************************/
    private generateParams();
    private generateUrl();
}
