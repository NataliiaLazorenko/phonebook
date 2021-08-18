import { ReactComponent as LinkedInIcon } from '../../icons/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../../icons/github.svg';
import { ReactComponent as EmailIcon } from '../../icons/email.svg';
import Container from '../Container';
import Logo from '../Logo';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Logo classes={styles.footerLogo} />
        <div className={styles.developerContacts}>
          <p className={styles.text}>
            Developed by
            <span className={styles.developerName}> Nataliia Lazorenko</span>
          </p>
          <ul className={styles.linksList}>
            <li className={styles.linksListItem}>
              <a
                href="https://github.com/NataliiaLazorenko"
                target="_blank"
                aria-label="link to GitHub"
                rel="noreferrer"
                className={styles.developerLink}
              >
                <GitHubIcon className={styles.footerIcon} />
              </a>
            </li>
            <li className={styles.linksListItem}>
              <a
                href="https://www.linkedin.com/in/lazorenko-nataliia/"
                target="_blank"
                aria-label="link to LinkedIn"
                rel="noreferrer"
                className={styles.developerLink}
              >
                <LinkedInIcon className={styles.footerIcon} />
              </a>
            </li>
            <li className={styles.linksListItem}>
              <a
                href="mailto:natalystruk@gmail.com"
                target="blank"
                aria-label="link to email"
                className={styles.developerLink}
              >
                <EmailIcon className={styles.footerIcon} />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
