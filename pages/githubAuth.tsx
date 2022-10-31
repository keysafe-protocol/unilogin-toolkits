import React, { useEffect, useMemo, useRef, useState } from "react";
import queryString from "query-string";
import { useCountDown, useRequest } from "ahooks";
import { EPostMessageType } from "../types";
import { Button } from "@chakra-ui/react";

const OAuthResult = (props: any) => {
    const postedRef = useRef(false);

    const [search, setSearch] = useState('')
    useEffect(() => {
        const search = window.location.search;
        setSearch(search)
    }, [])

    const code = useMemo(() => {
        if (typeof search === 'string') {
            return queryString.parse(search).code;
        }
        return undefined;
    }, [search]);
    const { loading, error } = useRequest(async () => {
        if (code && window.opener && !postedRef.current) {
            postedRef.current = true;

            window.opener.postMessage(
                {
                    type: EPostMessageType.GITHUB_OAUTH,
                    data: code
                }
            );
            window.close()
            // setTargetDate(
            //     dayjs()
            //         .add(3, "s")
            //         .toDate()
            // );

            //     return;
            //     const res = await oauthServices.oauth({
            //         code: code as string,
            //         org: OAuthOrg.Github,
            //     });
            //     console.log(res);
            //     if (window.opener) {
            //         window.opener.postMessage(
            //             {
            //                 type: PostMesaageType.OAuthSuccess,
            //                 data: JSON.parse(res.profile || ""),
            //             },
            //             window.opener.location
            //         );
            //     }
            // } else {
            //     return Error();
            // }
        }
    }, { ready: !!code });
    return (
        <section>
            <div className="flex justify-center pt-20">
                {!code ? (
                    <div className="text-center text-red-500 text-lg">
                        Authorization is failed, please try again later
                    </div>
                ) : (
                    <div className="text-center text-basecolor text-lg">
                        Authorization is successful, this page will close!
                        {/* <strong>{formatCountDown(countDown)}</strong> seconds. */}
                    </div>
                )}
            </div>
        </section>
    );
};
export default OAuthResult;
