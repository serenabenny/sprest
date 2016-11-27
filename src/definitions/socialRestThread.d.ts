declare module $REST.Types {
    /**
     * Social Rest Thread
     */
    interface ISocialRestThread extends IBase {
        /**
         * Properties
         */

        ID?: string;

        SocialThread: ComplexTypes.SocialThread;

        /**
         * Methods
         */

        delete(): ISocialRestThread;

        reply(restCreationData:ComplexTypes.SocialPostCreationData): ISocialRestThread;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         */
        execute(callback?:(...args) => any): ISocialRestThread;

        /**
         * Method to execute the request.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(waitFl:boolean): ISocialRestThread;

        /**
         * Method to execute the request.
         * @param callback - The method to be executed after the request completes.
         * @param waitFl - Flag to execute the request, after the previous requests have completed.
         */
        execute(callback:any, waitFl:boolean): ISocialRestThread;

        /**
         * Method to execute the request synchronously.
         */
        executeAndWait(): ISocialRestThread;
    }
}