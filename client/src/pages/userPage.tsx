import { AriaSelect } from '../components/AriaSelect';
import {
  MainButton,
  MainContent,
  PageContentDivision,
  SectionHeading,
  SectionMain,
  SelectListItem,
  Seperator,
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
          <section>
            <header
              style={{
                marginBottom: '15px',
              }}
            >
              <SectionHeading>Components</SectionHeading>
              <Seperator />
            </header>
            <SectionMain>
              <AriaSelect label="Prefix">
                <SelectListItem>Hi</SelectListItem>
                <SelectListItem>There</SelectListItem>
              </AriaSelect>
            </SectionMain>
          </section>
          <section>
            <header
              style={{
                marginBottom: '15px',
              }}
            >
              <SectionHeading>Linking</SectionHeading>
              <Seperator />
            </header>
            <SectionMain>
              <MainButton $slim>
                <p>Connect Roblox</p>
              </MainButton>
            </SectionMain>
          </section>

          <section>
            <header
              style={{
                marginBottom: '15px',
              }}
            >
              <SectionHeading>Userdata</SectionHeading>
              <Seperator />
            </header>
            <SectionMain>
              <MainButton $slim $warning>
                <p>Request the deletion of your data</p>
              </MainButton>
            </SectionMain>
          </section>
        </div>
      </MainContent>
    </PageContentDivision>
  );
}
