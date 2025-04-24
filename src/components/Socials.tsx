import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import DirectionsCarRounded from "@material-ui/icons/DirectionsCarRounded";
import Telegram from "@material-ui/icons/Telegram";
import Social from "./Social";

const StyledSocials = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 639px) {
    margin-top: 10px;
  }
`;

const Socials = () => {
  return (
    <StyledSocials>
      <Social
        icon={<GitHubIcon fontSize="inherit" />}
        link="https://github.com/smile101603"
        text="GitHub"
      />
      <Social
        icon={<Telegram fontSize="inherit" />}
        link="https://t.me/sunstar987"
        text="Telegram"
      />
      {/* <Social
        icon={<LinkedInIcon fontSize="inherit" />}
        link="https://www.linkedin.com/in/smile101603"
        text="linked in"
      /> */}
      <Social
        icon={<DirectionsCarRounded fontSize="inherit" />}
        link="https://discord.com/users/sunstar7077"
        text="Discord"
      />
    </StyledSocials>
  );
};

export default Socials;
