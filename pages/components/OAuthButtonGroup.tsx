import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import { GitHubIcon, GoogleIcon, TwitterIcon } from './ProviderIcons'
import queryString from "query-string"

const providers = [
    { name: 'GitHub', icon: <GitHubIcon boxSize="5" /> },
    { name: 'Google', icon: <GoogleIcon boxSize="5" /> },
    { name: 'Twitter', icon: <TwitterIcon boxSize="5" /> },
]
type TOauth = 'GitHub' | 'Google' | 'Twitter' | string
export const GITHUB_CLIENT_ID = "44ecdb87c3b5ac2efdde";

export const OAuthButtonGroup = () => {
    const handleOauth = (name: TOauth) => {
        const config = {
            client_id: GITHUB_CLIENT_ID,
            redirect_uri: `${window.location.origin}/githubAuth`,
            scope: "user",
        };
        window.open(
            `https://github.com/login/oauth/authorize?${queryString.stringify(
                config
            )}`,
            "oauth"
        );
    }
    return <ButtonGroup variant="outline" spacing="4" width="full">
        {providers.map(({ name, icon }) => (
            <Button disabled={name !== 'GitHub'} onClick={() => { handleOauth(name) }} key={name} width="full">
                <VisuallyHidden>Sign in with {name}</VisuallyHidden>
                {icon}
            </Button>
        ))}
    </ButtonGroup>
}