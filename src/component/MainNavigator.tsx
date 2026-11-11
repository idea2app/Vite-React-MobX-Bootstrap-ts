import { observer } from 'mobx-react';
import { Container, FormSelect } from 'idea-react';

import { mainNavLinks } from '../meta';
import { i18n, LanguageName } from '../model/Translation';
import style from './MainNavigator.module.less';

const isLanguage = (value: string): value is keyof typeof LanguageName =>
  Object.prototype.hasOwnProperty.call(LanguageName, value);

export const MainNavigator = observer(() => {
  const { currentLanguage } = i18n;

  return (
    <header className="sticky-top bg-primary" style={{ zIndex: 1030 }}>
      <Container className="navbar navbar-expand-lg flex-column flex-lg-row align-items-stretch align-items-lg-center">
        <a className="navbar-brand text-white" href=".">
          <img
            className={`${style.logo} me-2`}
            src="https://github.com/idea2app.png"
            alt=""
          />
          {document.title}
        </a>

        <nav className="navbar-nav me-auto d-flex flex-row flex-wrap">
          {mainNavLinks().map(({ title, href }) => (
            <a key={title} className="nav-link text-white" href={href}>
              {title}
            </a>
          ))}
        </nav>

        <FormSelect
          aria-label="Language"
          className="w-auto"
          value={currentLanguage}
          onChange={({ currentTarget }) => {
            if (isLanguage(currentTarget.value))
              i18n.loadLanguages(currentTarget.value);
          }}
        >
          {Object.entries(LanguageName).map(([key, name]) => (
            <option key={key} value={key}>
              {name}
            </option>
          ))}
        </FormSelect>
      </Container>
    </header>
  );
});
