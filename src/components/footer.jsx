import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <ul>
            <li className="logoSocialMidia">
              <a href="https://github.com/ArthurCastro99" target="_blank">
                <img
                  src="../../../src/assets/images/footer/github.png"
                  alt="Icon github"
                />
              </a>
            </li>
            <li className="logoSocialMidia">
              <a
                href="https://www.instagram.com/arthurcastro_99/"
                target="_blank"
              >
                <img
                  src="../../../src/assets/images/footer/instagram.png"
                  alt="Icon instagram"
                />
              </a>
            </li>
            <li className="logoSocialMidia">
              <a
                href="https://www.linkedin.com/in/arthur-castro-b70a02223/"
                target="_blank"
              >
                <img
                  src="../../../src/assets/images/footer/linkedin.png"
                  alt="Icon linkedin"
                />
              </a>
            </li>
          </ul>
        </div>
        <p>Todos os direitos reservados - 2026</p>
      </footer>
    </>
  );
}
