import { AriaSelect } from '../components/AriaSelect';
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

export function UserPage() {
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
                <ContentButton>
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
