const Footer = () => {
  const emails = [
    { href: "#", text: "launready@gmail.com" },
    { href: "#", text: "rcvelasco2@up.edu.ph" },
    { href: "#", text: "velascoronrussell@gmail.com" },
  ];

  const mobile = [
    { href: "#", text: "09496509222" },
    { href: "#", text: "04994459545" },
  ];

  const socials = [
    { href: "#", text: "Facebook - Launready" },
    { href: "#", text: "IG - @Launready" },
  ];

  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pb-8 break-words">
        <div>
          <h3 className="text-md font-semibold mb-4">Email</h3>
          <ul className="space-y-2">
            {emails.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-600 text-sm" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Mobile</h3>
          <ul className="space-y-2">
            {mobile.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-600 text-sm" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Socials</h3>
          <ul className="space-y-2">
            {socials.map((link, index) => (
              <li key={index}>
                <a className="text-neutral-600 text-sm" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-center tracking-wider text-neutral-400 text-sm">
        {" "}
        @2025-2030 Launready. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
