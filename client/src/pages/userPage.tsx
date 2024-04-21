import { AriaSelect } from '../components/AriaSelect';
import { FetchRobloxStatus } from '../queries/FetchRobloxStatus';
import {
  ContentButton,
  MainContent,
  MiscButton,
  PageContentDivision,
  SectionMain,
  SectionRow,
  SelectListItem,
  SectionBase,
} from '../styles/base';
import { API_ENDPOINTS } from '../utils/constants';

export function UserPage() {
  const { data, isError } = FetchRobloxStatus();

  const handleRobloxAuth = () => {
    if (!data?.data) {
      window.location.href = API_ENDPOINTS.ROBLOX_LOGIN;
    } else {
      console.log(data?.data);
    }
  };

  return (
    <PageContentDivision>
      <MainContent>
        <div
          style={{
            maxWidth: '1000px',
            width: '100%',
          }}
        >
          {/* Stats */}
          <SectionBase>
            <header>
              <h1>Stats</h1>
            </header>
            <SectionMain>
              <AriaSelect label="Prefix">
                <SelectListItem>Hi</SelectListItem>
                <SelectListItem>There</SelectListItem>
              </AriaSelect>
            </SectionMain>
          </SectionBase>

          {/* Linking */}
          <SectionBase>
            <header>
              <h1>Linking</h1>
            </header>
            <SectionMain>
              <SectionRow>
                <SectionRow>
                  <img
                    src="/images/defaultRobloxIcon.png"
                    style={{
                      height: '2.5rem',
                      aspectRatio: '1',
                      borderRadius: '25%',
                    }}
                  ></img>
                  <p>Connect Roblox</p>
                </SectionRow>
                <ContentButton onPress={handleRobloxAuth}>
                  <p>Connect Roblox</p>
                </ContentButton>
              </SectionRow>
            </SectionMain>
          </SectionBase>

          {/* Userdata */}
          <SectionBase style={{ display: 'none' }}>
            <header>
              <h1>Userdata</h1>
            </header>
            <SectionMain>
              <MiscButton warning isDisabled overlay>
                <p>Request the deletion of your data</p>
              </MiscButton>
            </SectionMain>
          </SectionBase>
        </div>
      </MainContent>
    </PageContentDivision>
  );
}
